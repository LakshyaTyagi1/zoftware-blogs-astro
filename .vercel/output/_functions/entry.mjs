import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_itF8m6OQ.mjs';
import { manifest } from './manifest_BkhsyMkK.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/categories.json.astro.mjs');
const _page3 = () => import('./pages/api/latest-blogs.json.astro.mjs');
const _page4 = () => import('./pages/api/posts.json.astro.mjs');
const _page5 = () => import('./pages/api/sanity-webhook.astro.mjs');
const _page6 = () => import('./pages/page/_page_.astro.mjs');
const _page7 = () => import('./pages/rss.xml.astro.mjs');
const _page8 = () => import('./pages/test-react.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const _page10 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.17.1_@types+node@25.2.1_@vercel+functions@2.2.13_jiti@2.6.1_rollup@4.57.1_typescript@5.9.3_yaml@2.8.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/categories.json.ts", _page2],
    ["src/pages/api/latest-blogs.json.ts", _page3],
    ["src/pages/api/posts.json.ts", _page4],
    ["src/pages/api/sanity-webhook.ts", _page5],
    ["src/pages/page/[page].astro", _page6],
    ["src/pages/rss.xml.js", _page7],
    ["src/pages/test-react.astro", _page8],
    ["src/pages/index.astro", _page9],
    ["src/pages/[...slug].astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d73df2d9-bcaa-4072-83c6-41e2526573c0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
