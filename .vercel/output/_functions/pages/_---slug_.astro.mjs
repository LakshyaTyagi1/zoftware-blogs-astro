import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, n as Fragment, u as unescapeHTML } from '../chunks/astro/server_BG2dLf6E.mjs';
import { toHTML } from '@portabletext/to-html';
import { $ as $$BlogPost } from '../chunks/BlogPost_DYgaPvrt.mjs';
import { e as getPostBySlug, a as plainTextFromBlocks } from '../chunks/mongodb_-bMovVU1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (!slug) {
    throw new Error("Missing post slug.");
  }
  const post = await getPostBySlug(slug);
  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }
  const description = post.description || plainTextFromBlocks(post.body, 200);
  const html = toHTML(post.body ?? []);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "title": post.title, "description": description, "publishedAt": post.publishedAt, "updatedAt": post.updatedAt, "coverImage": post.coverImage, "categories": post.categories, "tags": post.tags }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(html)}` })} ` })}`;
}, "/Users/work/dev/zoftware-blogs/astro-blog/src/pages/[...slug].astro", void 0);

const $$file = "/Users/work/dev/zoftware-blogs/astro-blog/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
