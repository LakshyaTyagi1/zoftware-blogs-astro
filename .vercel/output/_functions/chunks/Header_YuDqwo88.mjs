import { e as createAstro, f as createComponent, h as addAttribute, r as renderTemplate, m as maybeRenderHead, k as renderComponent } from './astro/server_BG2dLf6E.mjs';
/* empty css                          */
import { a as SITE_TITLE } from './consts_DKdsN5O1.mjs';

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/work/dev/zoftware-blogs/astro-blog/src/assets/blog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://example.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : Astro2.url;
  const rssURL = Astro2.site ? new URL("rss.xml", Astro2.site) : new URL("rss.xml", Astro2.url);
  const { title, description, image = FallbackImage } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/png" href="/favicon.png"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(rssURL, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/Geist-Variable.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/Geist-VariableItalic.woff2" as="font" type="font/woff2" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image.src, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image.src, Astro2.url), "content")}>`;
}, "/Users/work/dev/zoftware-blogs/astro-blog/src/components/BaseHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full mt-auto"> ${renderComponent($$result, "FooterReact", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/work/dev/zoftware-blogs/astro-blog/src/components/footer/Footer.tsx", "client:component-export": "default" })} </div>`;
}, "/Users/work/dev/zoftware-blogs/astro-blog/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  const safeDate = date instanceof Date ? date : new Date(date);
  const day = safeDate.getDate();
  const month = safeDate.toLocaleString("en-us", { month: "short" });
  const year = safeDate.getFullYear();
  const ordinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(safeDate.toISOString(), "datetime")}> ${`${ordinal(day)} ${month} ${year}`} </time>`;
}, "/Users/work/dev/zoftware-blogs/astro-blog/src/components/FormattedDate.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed top-0 left-0 right-0 z-50 bg-white"> ${renderComponent($$result, "Topbar", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/work/dev/zoftware-blogs/astro-blog/src/components/topbar/Topbar.tsx", "client:component-export": "default" })} </div>`;
}, "/Users/work/dev/zoftware-blogs/astro-blog/src/components/Header.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$FormattedDate as b, $$Footer as c };
