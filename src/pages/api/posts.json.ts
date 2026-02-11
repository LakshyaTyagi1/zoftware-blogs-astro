import type { APIRoute } from "astro";
import {
  getAllPostsForRss,
  getPostsPage,
  getPostsRange,
  plainTextFromBlocks,
} from "../../lib/mongodb";
import { getSanityImageUrl } from "../../utils/sanityImages";

function serializePosts(posts: any[]) {
  return posts.map((post) => {
    const description =
      post.description ||
      plainTextFromBlocks(post.body, 160) ||
      "Discover insights and detailed analysis...";
    const coverImageUrl = getSanityImageUrl(post.coverImage, {
      width: 800,
      height: 450,
    });
    return {
      slug: post.slug,
      title: post.title,
      description,
      categories:
        post.categories
          ?.map((category: { title: string }) => category.title)
          .filter(Boolean) ?? [],
      tags:
        post.tags?.map((tag: { title: string }) => tag.title).filter(Boolean) ??
        [],
      coverImageUrl,
      coverImageAlt: post.coverImage?.alt || post.title,
      publishedAt: post.publishedAt || "",
    };
  });
}

export const GET: APIRoute = async ({ url }) => {
  const pageParam = url.searchParams.get("page");
  const startParam = url.searchParams.get("start");
  const limitParam = url.searchParams.get("limit");
  const allParam = url.searchParams.get("all");

  if (allParam === "1") {
    const posts = await getAllPostsForRss();
    return new Response(
      JSON.stringify({ posts: serializePosts(posts), total: posts.length }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
          "cache-control": "public, max-age=60",
        },
      },
    );
  }

  const limit = Math.max(1, Number(limitParam || "6"));
  let posts;
  let total;

  if (startParam !== null) {
    const startIndex = Number.isNaN(Number(startParam))
      ? 0
      : Number(startParam);
    ({ posts, total } = await getPostsRange(startIndex, limit));
  } else {
    const page = Math.max(1, Number(pageParam || "1"));
    ({ posts, total } = await getPostsPage(page, limit));
  }

  return new Response(JSON.stringify({ posts: serializePosts(posts), total }), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=60",
    },
  });
};
