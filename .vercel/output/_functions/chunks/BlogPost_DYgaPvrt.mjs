import { e as createAstro, f as createComponent, k as renderComponent, l as renderHead, r as renderTemplate, n as Fragment, h as addAttribute, o as renderSlot, p as renderScript } from './astro/server_BG2dLf6E.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$FormattedDate, c as $$Footer } from './Header_YuDqwo88.mjs';
import { g as getSanityImageUrl } from './sanityImages_DPZx0U4u.mjs';
/* empty css                          */

const $$Astro = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    title,
    description,
    publishedAt,
    updatedAt,
    coverImage,
    categories,
    tags
  } = Astro2.props;
  const publishedDate = publishedAt ? new Date(publishedAt) : null;
  const updatedDate = updatedAt ? new Date(updatedAt) : null;
  const coverImageUrl = coverImage ? getSanityImageUrl(coverImage, { width: 1200, height: 630 }) : "";
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-[1200px] mx-auto px-6 pt-28 sm:pt-32 lg:pt-36 pb-16 flex-1"> <article> <!-- Header --> <header class="mb-10"> <!-- Category --> ${categories && categories[0] && renderTemplate`<p class="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4"> ${categories[0].title} </p>`} <!-- Title --> <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-5 tracking-[-0.02em]"> ${title} </h1> <!-- Meta info --> <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500"> <div class="flex items-center gap-2"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> ${publishedDate && renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": publishedDate })}`} </div> <span class="text-slate-300">•</span> <span>8 min read</span> ${updatedDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="text-slate-300">•</span> <span>
Updated:${" "} ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": updatedDate })} </span> ` })}`} </div> </header> <!-- Featured image --> ${coverImage && coverImageUrl && renderTemplate`<div class="mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-white"> <img${addAttribute(1200, "width")}${addAttribute(630, "height")}${addAttribute(coverImageUrl, "src")}${addAttribute(coverImage?.alt || title, "alt")} onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\'w-full h-64 flex items-center justify-center bg-slate-100\'><svg class=\'w-16 h-16 text-slate-300\' fill=\'none\' stroke=\'currentColor\' viewBox=\'0 0 24 24\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\' /></svg></div>'" class="w-full h-auto object-cover"> </div>`} <div class="grid gap-10 lg:grid-cols-[minmax(260px,30%)_minmax(0,1fr)] lg:gap-12" data-toc-layout> <aside class="order-2 lg:order-1"> <div class="lg:sticky lg:top-28 space-y-6"> <div class="rounded-2xl border border-slate-200 bg-white p-5"> <p class="text-xs uppercase tracking-[0.25em] text-slate-500 mb-5">
In this post
</p> <nav class="space-y-4 text-sm text-slate-600" data-toc="desktop"></nav> </div> <!-- Share Section --> <div class="rounded-2xl border border-slate-200 bg-white p-6"> <h3 class="text-lg font-semibold text-slate-900 mb-4">
Share this article
</h3> <div class="flex flex-wrap gap-3"> <button class="px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 transition text-xs font-medium">
Twitter
</button> <button class="px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 transition text-xs font-medium">
LinkedIn
</button> <button class="px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 transition text-xs font-medium">
Facebook
</button> <button class="px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 transition text-xs font-medium">
Copy Link
</button> </div> </div> <!-- Newsletter Signup --> <div class="rounded-2xl border border-slate-200 bg-white p-6"> <h3 class="text-lg font-semibold text-slate-900 mb-2">
Subscribe to Our Newsletter
</h3> <p class="text-slate-600 mb-4 text-sm leading-relaxed">
Get the latest software reviews and insights
                                    delivered to your inbox.
</p> <form class="space-y-3"> <input type="email" placeholder="Your email address" class="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm"> <button type="submit" class="w-full py-2 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition text-sm">
Subscribe
</button> </form> <p class="text-xs text-slate-500 mt-3">
We respect your privacy. Unsubscribe at any
                                    time.
</p> </div> </div> </aside> <div class="order-1 lg:order-2"> <!-- Content --> <div class="prose prose-lg max-w-none"> ${renderSlot($$result, $$slots["default"])} </div> <!-- CTA Section --> <section class="mt-8 sm:mt-12"> <div class="rounded-2xl border border-slate-200 bg-[radial-gradient(600px_300px_at_10%_0%,#E7F0FF_0%,transparent_70%)] p-6 sm:p-8"> <h3 class="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 sm:mb-2 leading-tight sm:leading-normal">
Transform Your Customer Experience
</h3> <p class="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
Want to explore how unified CX and
                                    execution-led transformation can work for
                                    your organization?
</p> <a href="https://calendly.com/gauravsawhney/zoftwarediscoverycall" target="_blank" rel="noopener noreferrer" class="block w-full py-2.5 sm:py-3 rounded-xl bg-brand-blue-v2 text-white text-sm sm:text-base font-semibold hover:bg-bright-blue-v2 hover:text-white transition text-center">
Book Your Free CX Strategy Consulting Call
</a> </div> </section> </div> </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/work/dev/zoftware-blogs/astro-blog/src/layouts/BlogPost.astro?astro&type=script&index=0&lang.ts")}  </body> </html>`;
}, "/Users/work/dev/zoftware-blogs/astro-blog/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
