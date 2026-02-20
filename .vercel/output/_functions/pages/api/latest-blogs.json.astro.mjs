import { p as postsCollection, a as plainTextFromBlocks } from '../../chunks/mongodb_-bMovVU1.mjs';
import { g as getSanityImageUrl } from '../../chunks/sanityImages_DPZx0U4u.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const SITE_URL = "https://blog.zoftwarehub.com";
const NOT_DRAFT = { draft: { $ne: true } };
const GET = async () => {
  try {
    const col = await postsCollection();
    const posts = await col.find(NOT_DRAFT).sort({ publishedAt: -1 }).limit(3).toArray();
    const blogs = posts.map((post) => {
      const categoryName = post.categories && post.categories.length > 0 ? post.categories[0].title || "" : "";
      const excerpt = post.description || plainTextFromBlocks(post.body, 160) || "Discover insights and detailed analysis...";
      const featuredMedia = post.coverImage ? getSanityImageUrl(post.coverImage, { width: 800, height: 450 }) : "";
      return {
        link: `${SITE_URL}/${post.slug}`,
        featured_media: featuredMedia,
        title: {
          rendered: post.title || ""
        },
        category: {
          name: categoryName
        },
        date: post.publishedAt || (/* @__PURE__ */ new Date()).toISOString(),
        excerpt: {
          rendered: excerpt
        }
      };
    });
    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch latest blogs" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
