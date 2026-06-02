export const prerender = false;

import type { APIRoute } from "astro";
import { newsletterSubscribersCollection } from "../../lib/mongoClient";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json().catch(() => ({}));
    const email = String(payload.email || "").trim().toLowerCase();

    if (!emailPattern.test(email)) {
      return new Response(JSON.stringify({ error: "Enter a valid email" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const now = new Date();
    const collection = await newsletterSubscribersCollection();

    await collection.updateOne(
      { email },
      {
        $set: {
          email,
          source: "blog",
          pageTitle: String(payload.pageTitle || "").trim(),
          pageUrl: String(payload.pageUrl || "").trim(),
          userAgent: request.headers.get("user-agent") || "",
          updatedAt: now,
        },
        $setOnInsert: { createdAt: now },
      },
      { upsert: true },
    );

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error("Newsletter subscription failed:", error);
    return new Response(JSON.stringify({ error: "Subscription failed" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
};
