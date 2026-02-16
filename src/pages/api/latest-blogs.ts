import type { APIRoute } from "astro";
import { postsCollection } from "../../lib/mongoClient";
import { getSanityImageUrl } from "../../utils/sanityImages";
import { plainTextFromBlocks } from "../../lib/mongodb";

type Blog = {
  link: string;
  featured_media: string;
  title: {
    rendered: string;
  };
  category: {
    name: string;
  };
  date: string;
  excerpt: {
    rendered: string;
  };
};

const SITE_URL = "https://blog.zoftwarehub.com";
const NOT_DRAFT = { draft: { $ne: true } };

export const GET: APIRoute = async () => {
  try {
    const col = await postsCollection();

    // Fetch the latest 3 posts sorted by publishedAt date
    const posts = await col
      .find(NOT_DRAFT)
      .sort({ publishedAt: -1 })
      .limit(3)
      .toArray();

    // Transform posts to the requested Blog structure
    const blogs: Blog[] = posts.map((post) => {
      // Get the first category or default to empty
      const categoryName =
        post.categories && post.categories.length > 0
          ? post.categories[0].title || ""
          : "";

      // Generate excerpt from description or body
      const excerpt =
        post.description ||
        plainTextFromBlocks(post.body, 160) ||
        "Discover insights and detailed analysis...";

      // Get featured image URL
      const featuredMedia = post.coverImage
        ? getSanityImageUrl(post.coverImage, { width: 800, height: 450 })
        : "";

      return {
        link: `${SITE_URL}/${post.slug}`,
        featured_media: featuredMedia,
        title: {
          rendered: post.title || "",
        },
        category: {
          name: categoryName,
        },
        date: post.publishedAt || new Date().toISOString(),
        excerpt: {
          rendered: excerpt,
        },
      };
    });

    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch latest blogs" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};
