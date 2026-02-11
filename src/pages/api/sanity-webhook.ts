/**
 * Sanity Webhook Endpoint
 *
 * Receives webhook events from Sanity when content is created, updated, or deleted.
 * Updates MongoDB accordingly to keep the cache in sync.
 *
 * Configure in Sanity dashboard → API → Webhooks:
 *   URL:        https://your-domain.com/api/sanity-webhook
 *   Trigger:    On create, update, delete
 *   Filter:     _type in ["post", "category", "tag"]
 *   Projection: {_id, _type, _rev, "operation": delta::operation()}
 *   Secret:     <SANITY_WEBHOOK_SECRET>
 */

import type { APIRoute } from "astro";
import crypto from "node:crypto";
import { createClient } from "@sanity/client";
import { MongoClient } from "mongodb";

// ── Config ──

const WEBHOOK_SECRET = import.meta.env.SANITY_WEBHOOK_SECRET || "";
const VERCEL_DEPLOY_HOOK = import.meta.env.VERCEL_DEPLOY_HOOK || "";

const sanityProjectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "";
const sanityDataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const sanityApiVersion =
  import.meta.env.PUBLIC_SANITY_API_VERSION || "2026-02-05";

const mongoUri =
  import.meta.env.MONGODB_URI ||
  "mongodb://localhost:27017/?directConnection=true";
const mongoDbName = import.meta.env.MONGODB_DB || "zoftware-blog";

// ── Lazy Sanity client (only created when webhook fires — not at import time) ──

let _sanityClient: ReturnType<typeof createClient> | null = null;
function getSanityClient() {
  if (!_sanityClient) {
    _sanityClient = createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: false,
    });
  }
  return _sanityClient;
}

// ── Lazy Mongo client ──

let _mongoClient: MongoClient | null = null;
async function getMongoDb() {
  if (!_mongoClient) {
    _mongoClient = new MongoClient(mongoUri);
    await _mongoClient.connect();
  }
  return _mongoClient.db(mongoDbName);
}

// ── GROQ projections (same shape the Astro app expects) ──

const POST_FIELDS = `{
  _id,
  _rev,
  title,
  "slug": slug.current,
  description,
  publishedAt,
  updatedAt,
  coverImage,
  categories[]->{_id, title, "slug": slug.current},
  tags[]->{_id, title, "slug": slug.current},
  body,
  draft
}`;

// ── Signature verification ──

function verifySignature(body: string, signature: string | null): boolean {
  if (!WEBHOOK_SECRET) {
    // If no secret configured, skip verification (dev mode)
    console.warn(
      "[webhook] No SANITY_WEBHOOK_SECRET set — skipping signature verification.",
    );
    return true;
  }
  if (!signature) return false;
  const expected = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(body)
    .digest("base64");
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      message: "This endpoint only accepts POST requests for webhooks",
    }),
    {
      status: 405,
      headers: { "content-type": "application/json" },
    },
  );
};

export const POST: APIRoute = async ({ request }) => {
  const rawBody = await request.text();
  const signature = request.headers.get("sanity-webhook-signature");

  if (!verifySignature(rawBody, signature)) {
    console.error("[webhook] Invalid signature.");
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  let payload: {
    _id?: string;
    _type?: string;
    _rev?: string;
    operation?: string;
  };
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
    });
  }

  const { _id, _type, _rev, operation } = payload;
  if (!_id || !_type) {
    return new Response(JSON.stringify({ error: "Missing _id or _type" }), {
      status: 400,
    });
  }

  console.log(`[webhook] ${operation} ${_type} ${_id} (rev: ${_rev})`);

  try {
    const db = await getMongoDb();

    // ── DELETE ──
    if (operation === "delete") {
      if (_type === "post") {
        await db.collection("posts").deleteOne({ _id });
      } else if (_type === "category") {
        await db.collection("categories").deleteOne({ _id });
        // Remove from denormalized arrays in posts
        await db.collection("posts").updateMany({ "categories._id": _id }, {
          $pull: { categories: { _id } },
        } as any);
      } else if (_type === "tag") {
        await db.collection("tags").deleteOne({ _id });
        await db
          .collection("posts")
          .updateMany({ "tags._id": _id }, { $pull: { tags: { _id } } } as any);
      }

      await triggerRebuild();
      return json({ ok: true, action: "deleted", _type, _id });
    }

    // ── CREATE / UPDATE ──
    const sanity = getSanityClient();

    if (_type === "post") {
      const post = await sanity.fetch(
        `*[_type == "post" && _id == $id && !(_id in path("drafts.**"))][0]${POST_FIELDS}`,
        { id: _id },
      );
      if (post) {
        // Dedup: skip if same revision already stored
        const existing = await db
          .collection("posts")
          .findOne({ _id }, { projection: { _sanityRev: 1 } });
        if (existing && existing._sanityRev === post._rev) {
          return json({ ok: true, action: "skipped (same rev)", _type, _id });
        }
        await db
          .collection("posts")
          .replaceOne(
            { _id },
            { ...post, _sanityRev: post._rev },
            { upsert: true },
          );
      } else {
        // Post might have become a draft or was unpublished → remove from cache
        await db.collection("posts").deleteOne({ _id });
      }
    } else if (_type === "category") {
      const cat = await sanity.fetch(
        `*[_type == "category" && _id == $id][0]{ _id, _rev, title, "slug": slug.current }`,
        { id: _id },
      );
      if (cat) {
        await db
          .collection("categories")
          .replaceOne({ _id }, cat, { upsert: true });
        // Update denormalized copies in posts
        await db.collection("posts").updateMany(
          { "categories._id": _id },
          {
            $set: {
              "categories.$[elem].title": cat.title,
              "categories.$[elem].slug": cat.slug,
            },
          },
          { arrayFilters: [{ "elem._id": _id }] },
        );
      }
    } else if (_type === "tag") {
      const tag = await sanity.fetch(
        `*[_type == "tag" && _id == $id][0]{ _id, _rev, title, "slug": slug.current }`,
        { id: _id },
      );
      if (tag) {
        await db.collection("tags").replaceOne({ _id }, tag, { upsert: true });
        await db.collection("posts").updateMany(
          { "tags._id": _id },
          {
            $set: {
              "tags.$[elem].title": tag.title,
              "tags.$[elem].slug": tag.slug,
            },
          },
          { arrayFilters: [{ "elem._id": _id }] },
        );
      }
    }

    await triggerRebuild();
    return json({ ok: true, action: operation || "upserted", _type, _id });
  } catch (err: any) {
    console.error("[webhook] Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};

// ── Helpers ──

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

async function triggerRebuild() {
  if (!VERCEL_DEPLOY_HOOK) return;
  try {
    await fetch(VERCEL_DEPLOY_HOOK, { method: "POST" });
    console.log("[webhook] Triggered Vercel rebuild.");
  } catch (err) {
    console.warn("[webhook] Failed to trigger Vercel rebuild:", err);
  }
}
