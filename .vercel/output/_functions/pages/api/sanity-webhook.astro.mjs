import crypto from 'node:crypto';
import { createClient } from '@sanity/client';
import { MongoClient } from 'mongodb';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const WEBHOOK_SECRET = "your-local-secret";
const sanityProjectId = "vj9ifh8t";
const sanityDataset = "production";
const sanityApiVersion = "2026-02-05";
const mongoUri = "mongodb+srv://scraper-admin:FWVzS755sBgI5SUf@scraperdb.lvubbz1.mongodb.net/?appName=scraperDB";
const mongoDbName = "blogs-production-cache";
let _sanityClient = null;
function getSanityClient() {
  if (!_sanityClient) {
    _sanityClient = createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: false
    });
  }
  return _sanityClient;
}
let _mongoClient = null;
async function getMongoDb() {
  if (!_mongoClient) {
    _mongoClient = new MongoClient(mongoUri);
    await _mongoClient.connect();
  }
  return _mongoClient.db(mongoDbName);
}
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
function verifySignature(body, signature) {
  if (!signature) return false;
  const parts = signature.split(",");
  let timestamp = "";
  let v1Sig = "";
  for (const part of parts) {
    if (part.startsWith("t=")) {
      timestamp = part.substring(2);
    } else if (part.startsWith("v1=")) {
      v1Sig = part.substring(3);
    }
  }
  if (!timestamp || !v1Sig) {
    console.error("[webhook] Missing timestamp or v1 in signature");
    return false;
  }
  const signedContent = `${timestamp}.${body}`;
  const expected = crypto.createHmac("sha256", WEBHOOK_SECRET).update(signedContent).digest("base64");
  const v1SigStandard = v1Sig.replace(/-/g, "+").replace(/_/g, "/");
  const paddingNeeded = (4 - v1SigStandard.length % 4) % 4;
  const v1SigPadded = v1SigStandard + "=".repeat(paddingNeeded);
  return v1SigPadded === expected;
}
const GET = async () => {
  return new Response(
    JSON.stringify({
      message: "This endpoint only accepts POST requests for webhooks"
    }),
    {
      status: 405,
      headers: { "content-type": "application/json" }
    }
  );
};
const POST = async ({ request }) => {
  const rawBody = await request.text();
  const signature = request.headers.get("sanity-webhook-signature");
  if (!verifySignature(rawBody, signature)) {
    console.error("[webhook] Invalid signature.");
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401
    });
  }
  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400
    });
  }
  const { _id, _type, _rev, operation } = payload;
  if (!_id || !_type) {
    return new Response(JSON.stringify({ error: "Missing _id or _type" }), {
      status: 400
    });
  }
  console.log(`[webhook] ${operation} ${_type} ${_id} (rev: ${_rev})`);
  try {
    const db = await getMongoDb();
    if (operation === "delete") {
      if (_type === "post") {
        await db.collection("posts").deleteOne({ _id });
      } else if (_type === "category") {
        await db.collection("categories").deleteOne({ _id });
        await db.collection("posts").updateMany({ "categories._id": _id }, {
          $pull: { categories: { _id } }
        });
      } else if (_type === "tag") {
        await db.collection("tags").deleteOne({ _id });
        await db.collection("posts").updateMany({ "tags._id": _id }, { $pull: { tags: { _id } } });
      }
      await triggerRebuild();
      return json({ ok: true, action: "deleted", _type, _id });
    }
    const sanity = getSanityClient();
    if (_type === "post") {
      const post = await sanity.fetch(
        `*[_type == "post" && _id == $id && !(_id in path("drafts.**"))][0]${POST_FIELDS}`,
        { id: _id }
      );
      if (post) {
        const existing = await db.collection("posts").findOne({ _id }, { projection: { _sanityRev: 1 } });
        if (existing && existing._sanityRev === post._rev) {
          return json({ ok: true, action: "skipped (same rev)", _type, _id });
        }
        await db.collection("posts").replaceOne(
          { _id },
          { ...post, _sanityRev: post._rev },
          { upsert: true }
        );
      } else {
        await db.collection("posts").deleteOne({ _id });
      }
    } else if (_type === "category") {
      const cat = await sanity.fetch(
        `*[_type == "category" && _id == $id][0]{ _id, _rev, title, "slug": slug.current }`,
        { id: _id }
      );
      if (cat) {
        await db.collection("categories").replaceOne({ _id }, cat, { upsert: true });
        await db.collection("posts").updateMany(
          { "categories._id": _id },
          {
            $set: {
              "categories.$[elem].title": cat.title,
              "categories.$[elem].slug": cat.slug
            }
          },
          { arrayFilters: [{ "elem._id": _id }] }
        );
      }
    } else if (_type === "tag") {
      const tag = await sanity.fetch(
        `*[_type == "tag" && _id == $id][0]{ _id, _rev, title, "slug": slug.current }`,
        { id: _id }
      );
      if (tag) {
        await db.collection("tags").replaceOne({ _id }, tag, { upsert: true });
        await db.collection("posts").updateMany(
          { "tags._id": _id },
          {
            $set: {
              "tags.$[elem].title": tag.title,
              "tags.$[elem].slug": tag.slug
            }
          },
          { arrayFilters: [{ "elem._id": _id }] }
        );
      }
    }
    await triggerRebuild();
    return json({ ok: true, action: operation || "upserted", _type, _id });
  } catch (err) {
    console.error("[webhook] Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500
    });
  }
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" }
  });
}
async function triggerRebuild() {
  return;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
