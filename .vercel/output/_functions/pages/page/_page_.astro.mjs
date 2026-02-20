import { e as createAstro, f as createComponent, k as renderComponent, l as renderHead, h as addAttribute, r as renderTemplate } from '../../chunks/astro/server_BG2dLf6E.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$FormattedDate, c as $$Footer } from '../../chunks/Header_YuDqwo88.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../../chunks/consts_DKdsN5O1.mjs';
import { d as getTotalPostCount, c as getPostsPage, a as plainTextFromBlocks } from '../../chunks/mongodb_-bMovVU1.mjs';
import { g as getSanityImageUrl } from '../../chunks/sanityImages_DPZx0U4u.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const prerender = false;
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const POSTS_PER_PAGE = 6;
  const total = await getTotalPostCount();
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
  const currentPage = Math.max(1, parseInt(Astro2.params.page || "1", 10));
  const safePage = Math.min(currentPage, totalPages);
  const { posts } = await getPostsPage(safePage, POSTS_PER_PAGE);
  function pageWindow(cur, totalPagesCount, size = 5) {
    const half = Math.floor(size / 2);
    let start = Math.max(1, cur - half);
    let end = Math.min(totalPagesCount, start + size - 1);
    if (end - start + 1 < size) start = Math.max(1, end - size + 1);
    const arr = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  }
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${SITE_TITLE} \u2014 Page ${safePage}`, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-[1200px] mx-auto px-6 pt-24 pb-16"> <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"> <div> <p class="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Archive</p> <h2 class="text-2xl md:text-3xl font-semibold text-slate-900">Page ${safePage}</h2> <p class="text-sm text-slate-500">More insights and deep dives.</p> </div> <a href="/" class="text-sm text-brand-blue-v2 hover:underline">Back to latest</a> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> ${posts.map((post) => {
    const coverImageUrl = getSanityImageUrl(post.coverImage, { width: 800, height: 450 });
    const description = post.description || plainTextFromBlocks(post.body, 160) || "Discover insights and detailed analysis...";
    return renderTemplate`<a${addAttribute(`/${post.slug}/`, "href")} class="flex-1 bg-white border min-w-[310px] border-[#737373] lg:hover:scale-105 p-[15px] flex flex-col transition-transform duration-300"${addAttribute(post.slug, "data-post-id")}> <!-- Image --> <div class="relative w-full bg-slate-100 rounded-[10px] overflow-hidden flex-1 min-h-[160px]"> ${coverImageUrl ? renderTemplate`<img${addAttribute(800, "width")}${addAttribute(400, "height")}${addAttribute(coverImageUrl, "src")}${addAttribute(post.coverImage?.alt || post.title, "alt")} loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover rounded-[10px]">` : null} <div${addAttribute(`w-full h-full items-center justify-center ${coverImageUrl ? "hidden" : "flex"}`, "class")} data-fallback> <svg class="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> </div> <!-- Content --> <div class="flex items-center justify-between text-sm leading-[135%] antialiased"> <p class="text-[#2C4E9B] font-semibold capitalize line-clamp-1 mr-2"> ${post.categories && post.categories[0] ? post.categories[0].title : ""} </p> <p class="text-[#696871] font-normal whitespace-nowrap ml-auto"> ${post.publishedAt ? renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.publishedAt })}` : ""} </p> </div> <p class="line-clamp-2 mt-0 mb-3 text-base text-[#282828] antialiased font-medium leading-[150%]"> ${post.title} </p> <p class="line-clamp-2 mt-0 mb-1 text-sm font-normal leading-[135%] text-[#696871] antialiased"> ${description.slice(0, 180)} </p> </a>`;
  })} </div> ${totalPages > 1 && renderTemplate`<nav class="flex items-center justify-center gap-2" aria-label="Pagination"> <a${addAttribute(safePage <= 2 ? "/" : `/page/${safePage - 1}/`, "href")} class="px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 transition">
Previous
</a> ${pageWindow(safePage, totalPages, 5).map((page) => renderTemplate`<a${addAttribute(page === 1 ? "/" : `/page/${page}/`, "href")}${addAttribute(`px-4 py-2 rounded-full transition ${page === safePage ? "bg-brand-blue-v2 text-white" : "border border-slate-200 text-slate-700 hover:border-slate-300"}`, "class")}${addAttribute(page === safePage ? "page" : void 0, "aria-current")}> ${page} </a>`)} ${safePage < totalPages && renderTemplate`<a${addAttribute(`/page/${safePage + 1}/`, "href")} class="px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 transition">
Next
</a>`} </nav>`} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/work/dev/zoftware-blogs/astro-blog/src/pages/page/[page].astro", void 0);

const $$file = "/Users/work/dev/zoftware-blogs/astro-blog/src/pages/page/[page].astro";
const $$url = "/page/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
