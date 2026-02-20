import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent, u as unescapeHTML, h as addAttribute, l as renderHead } from '../chunks/astro/server_BG2dLf6E.mjs';
import { c as $$Footer, b as $$FormattedDate, a as $$Header, $ as $$BaseHead } from '../chunks/Header_YuDqwo88.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_DKdsN5O1.mjs';
import { c as getPostsPage, a as plainTextFromBlocks } from '../chunks/mongodb_-bMovVU1.mjs';
import { g as getSanityImageUrl } from '../chunks/sanityImages_DPZx0U4u.mjs';
export { renderers } from '../renderers.mjs';

const $$BlogSearch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="blog-search-container" class="max-w-[1000px] mx-auto"> <div class="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-4 py-4 md:px-6 md:py-5"> <div class="flex flex-col md:flex-row gap-3 items-stretch"> <div class="relative flex-1"> <input id="search-input" type="text" placeholder="Search by title, summary, or tags..." class="w-full px-4 py-3 pr-10 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-v2/20 focus:border-brand-blue-v2"> <svg class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m1.85-4.65a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> <select id="category-filter" class="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue-v2/20 focus:border-brand-blue-v2 md:w-56"> <option value="">All Categories</option> </select> </div> <div class="mt-3 flex items-center justify-between text-xs text-slate-500"> <div id="search-results-count" class="hidden">
Found <span id="results-number" class="font-semibold text-slate-900">0</span> results
</div> <button id="clear-search" class="hidden text-slate-700 hover:text-slate-900">
Clear filters
</button> </div> </div> </div>`;
}, "/Users/work/dev/zoftware-blogs/astro-blog/src/components/BlogSearch.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const POSTS_PER_PAGE = 6;
  const { posts, total } = await getPostsPage(1, POSTS_PER_PAGE);
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
  const postsData = posts.map((post) => {
    const description = post.description || plainTextFromBlocks(post.body, 160) || "Discover insights and detailed analysis...";
    const coverImageUrl = getSanityImageUrl(post.coverImage, { width: 800, height: 450 });
    return {
      slug: post.slug,
      title: post.title,
      description,
      categories: post.categories?.map((category) => category.title).filter(Boolean) ?? [],
      tags: post.tags?.map((tag) => tag.title).filter(Boolean) ?? [],
      coverImageUrl,
      coverImageAlt: post.coverImage?.alt || post.title,
      publishedAt: post.publishedAt || ""
    };
  });
  const displayPostsData = postsData.slice(0, POSTS_PER_PAGE);
  const initialPostsJson = JSON.stringify(displayPostsData).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  function humanizeLabel(value) {
    return value.replace(/[-_]+/g, " ").split(" ").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  function pageWindow(cur, totalPagesCount, size = 5) {
    const half = Math.floor(size / 2);
    let start = Math.max(1, cur - half);
    let end = Math.min(totalPagesCount, start + size - 1);
    if (end - start + 1 < size) start = Math.max(1, end - size + 1);
    const arr = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  }
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", '</head> <body class="flex flex-col min-h-screen"> ', ' <div class="flex-1"> <!-- Hero Section --> <section class="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(1200px_500px_at_10%_-10%,#E7F0FF_0%,transparent_60%),radial-gradient(900px_400px_at_90%_-20%,#F5F7FF_0%,transparent_55%)] pt-36 sm:pt-36 lg:pt-40"> <div class="max-w-[1200px] mx-auto px-6 pb-16"> <div class="text-center"> <p class="text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">Zoftware Blog</p> <h1 class="text-4xl md:text-5xl font-semibold text-slate-900 tracking-[-0.02em] mb-4">\nClarity for modern software decisions\n</h1> <p class="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10">\nDeep dives on SaaS, growth, and product strategy. Short reads, real takeaways.\n</p> ', ' </div> </div> </section> <!-- Main Content --> <main class="max-w-[1200px] mx-auto px-6 pt-14 pb-16"> <div class="mb-8"> <p class="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Latest</p> <h2 class="text-2xl md:text-3xl font-semibold text-slate-900">Recent articles</h2> </div> <!-- Posts Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-posts-grid> ', ' </div> <div id="no-results-message" class="hidden text-center py-16"> <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <p class="text-lg font-semibold text-slate-900 mb-1">No results found</p> <p class="text-sm text-slate-500">Try adjusting your search or filters to find what you need.</p> </div> <div class="mt-10 flex flex-col items-center gap-3"> <button id="load-more" class="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-700 transition hover:border-slate-300 hover:text-slate-900 sm:w-auto sm:max-w-none">\nLoad more\n</button> </div> <noscript> ', ' </noscript> <script type="application/json" id="initial-posts"', "", ">", `<\/script> <script type="module">
				const dataNode = document.getElementById('initial-posts');
				let loadedPosts = [];
				let totalCount = 0;
				let postsPerLoad = 6;

				if (dataNode) {
					try {
						loadedPosts = JSON.parse(dataNode.textContent || '[]');
					} catch (error) {
						console.error('Failed to parse initial posts data', error);
						loadedPosts = [];
					}
					postsPerLoad = Number(dataNode.dataset.postsPerPage || '6');
					totalCount = Number(dataNode.dataset.total || '0');
				}

				const postsGrid = document.querySelector('[data-posts-grid]');
				const loadMoreButton = document.getElementById('load-more');
				const noResults = document.getElementById('no-results-message');

				const searchInput = document.getElementById('search-input');
				const categorySelect = document.getElementById('category-filter');
				const clearButton = document.getElementById('clear-search');
				const resultsCount = document.getElementById('search-results-count');
				const resultsNumber = document.getElementById('results-number');

				if (!postsGrid) {
					console.warn('Posts grid not found');
				}

				const fuseOptions = {
					keys: [
						{ name: 'title', weight: 0.5 },
						{ name: 'description', weight: 0.3 },
						{ name: 'tags', weight: 0.15 },
						{ name: 'categories', weight: 0.05 },
					],
					threshold: 0.4,
					ignoreLocation: true,
					minMatchCharLength: 2,
				};

				let renderedCount = loadedPosts.length;
				let isFiltering = false;
				let allPosts = null;
				let fuse = null;
				let fuseReady = null;
				let fuseSource = null;

				function populateCategories(source) {
					if (!categorySelect) return;
					const allCategories = [...new Set(source.flatMap((post) => post.categories))].filter(Boolean).sort();
					categorySelect.innerHTML = '<option value="">All Categories</option>';
					allCategories.forEach((cat) => {
						const option = document.createElement('option');
						option.value = cat;
						option.textContent = cat;
						categorySelect.appendChild(option);
					});
				}

				populateCategories(loadedPosts);

				function formatDate(value) {
					if (!value) return '';
					const date = new Date(value);
					if (Number.isNaN(date.valueOf())) return '';
					const day = date.getDate();
					const month = date.toLocaleString('en-us', { month: 'short' });
					const year = date.getFullYear();
					const ordinal = (n) => {
						const s = ["th", "st", "nd", "rd"];
						const v = n % 100;
						return n + (s[(v - 20) % 10] || s[v] || s[0]);
					};
					return \`\${ordinal(day)} \${month} \${year}\`;
				}

				function buildCard(post) {
					const article = document.createElement('a');
					article.href = \`/\${post.slug}/\`;
					article.className = 'flex-1 bg-white border min-w-[310px] border-[#737373] lg:hover:scale-105 p-[15px] flex flex-col transition-transform duration-300';
					article.dataset.postId = post.slug;

					const humanizeLabel = (value) =>
						value
							.replace(/[-_]+/g, ' ')
							.split(' ')
							.filter(Boolean)
							.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' ');

					const imageMarkup = post.coverImageUrl
						? \`<img width="800" height="400" src="\${post.coverImageUrl}" alt="\${post.coverImageAlt || post.title}" loading="lazy" class="w-full h-full object-cover rounded-[10px]" />\`
						: '';

					article.innerHTML = \`
						<div class="relative w-full bg-slate-100 rounded-[10px] overflow-hidden flex-1 min-h-[160px]">
							\${imageMarkup}
							<div class="w-full h-full items-center justify-center \${post.coverImageUrl ? 'hidden' : 'flex'}" data-fallback>
								<svg class="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							</div>
						</div>
						
						<div class="flex items-center justify-between mt-5 text-sm leading-[135%] antialiased">
							<p class="text-[#2C4E9B] font-semibold capitalize line-clamp-1 mr-2" data-category></p>
							<p class="text-[#696871] font-normal whitespace-nowrap ml-auto" data-date></p>
						</div>
						
						<p class="line-clamp-2 mt-0 mb-3 text-base text-[#282828] antialiased font-medium leading-[150%]" data-title></p>
						<p class="line-clamp-2 mt-0 mb-1 text-sm font-normal leading-[135%] text-[#696871] antialiased" data-description></p>
					\`;

					const dateEl = article.querySelector('[data-date]');
					if (dateEl) dateEl.textContent = formatDate(post.publishedAt);

					const titleEl = article.querySelector('[data-title]');
					if (titleEl) titleEl.textContent = post.title;

					const descEl = article.querySelector('[data-description]');
					if (descEl) descEl.textContent = (post.description || '').slice(0, 180);

					const categoryEl = article.querySelector('[data-category]');
					if (categoryEl && post.categories && post.categories[0]) {
						categoryEl.textContent = humanizeLabel(post.categories[0]);
					}

					const img = article.querySelector('img');
					if (img) {
						img.onerror = () => {
							img.style.display = 'none';
							const fallback = article.querySelector('[data-fallback]');
							if (fallback) {
								fallback.classList.remove('hidden');
								fallback.classList.add('flex');
							}
						};
					}

					return article;
				}

				function renderList(list) {
					if (!postsGrid) return;
					const fragment = document.createDocumentFragment();
					list.forEach((post) => {
						fragment.appendChild(buildCard(post));
					});
					postsGrid.innerHTML = '';
					postsGrid.appendChild(fragment);
				}

				function appendList(list) {
					if (!postsGrid) return;
					const fragment = document.createDocumentFragment();
					list.forEach((post) => {
						fragment.appendChild(buildCard(post));
					});
					postsGrid.appendChild(fragment);
				}

				function updateLoadMoreVisibility() {
					const hasMore = totalCount > 0 && renderedCount < totalCount;
					const shouldShow = hasMore && !isFiltering;
					if (loadMoreButton) loadMoreButton.classList.toggle('hidden', !shouldShow);
				}

				async function loadMore() {
					if (isFiltering || !loadMoreButton) return;
					if (totalCount && renderedCount >= totalCount) {
						updateLoadMoreVisibility();
						return;
					}

					loadMoreButton.disabled = true;
					const originalLabel = loadMoreButton.textContent;
					loadMoreButton.textContent = 'Loading...';

					try {
						const response = await fetch(\`/api/posts.json?start=\${renderedCount}&limit=\${postsPerLoad}\`);
						if (!response.ok) throw new Error('Failed to load more posts');
						const payload = await response.json();
						const newPosts = Array.isArray(payload.posts) ? payload.posts : [];

						if (newPosts.length > 0) {
							appendList(newPosts);
							loadedPosts = loadedPosts.concat(newPosts);
							renderedCount = loadedPosts.length;
						}

						if (typeof payload.total === 'number') {
							totalCount = payload.total;
						}
					} catch (error) {
						console.error('Failed to load more posts', error);
					} finally {
						loadMoreButton.disabled = false;
						loadMoreButton.textContent = originalLabel;
						updateLoadMoreVisibility();
					}
				}

				function setFiltering(active) {
					isFiltering = active;
					updateLoadMoreVisibility();
				}

				async function ensureSearchData() {
					if (allPosts) return allPosts;
					try {
						const response = await fetch('/api/posts.json?all=1');
						if (response.ok) {
							const payload = await response.json();
							if (Array.isArray(payload.posts)) {
								allPosts = payload.posts;
								populateCategories(allPosts);
								return allPosts;
							}
						}
					} catch (error) {
						console.error('Failed to load search data', error);
					}
					return loadedPosts;
				}

				function ensureFuse(source) {
					if (fuse && fuseSource === source) return Promise.resolve(fuse);
					if (fuseReady && fuseSource === source) return fuseReady;
					fuseSource = source;
					fuseReady = import('fuse.js')
						.then((mod) => {
							fuse = new mod.default(source, fuseOptions);
							return fuse;
						})
						.catch((error) => {
							console.error('Search disabled: Fuse failed to load', error);
							return null;
						});
					return fuseReady;
				}

				async function performSearch() {
					const searchTerm = searchInput ? searchInput.value.trim() : '';
					const category = categorySelect ? categorySelect.value : '';
					const filtering = Boolean(searchTerm || category);
					setFiltering(filtering);

					if (filtering) {
						const source = await ensureSearchData();
						const fuseInstance = await ensureFuse(source);
						const results = searchTerm && fuseInstance ? new Set(fuseInstance.search(searchTerm).map((r) => r.item.slug)) : null;
						const filtered = source.filter((post) => (!results || results.has(post.slug)) && (!category || post.categories.includes(category)));
						renderList(filtered);
						if (resultsNumber) resultsNumber.textContent = \`\${filtered.length}\`;
						if (resultsCount) resultsCount.classList.remove('hidden');
						if (clearButton) clearButton.classList.remove('hidden');
						if (noResults) noResults.classList.toggle('hidden', filtered.length !== 0);
						return;
					}

					renderList(loadedPosts);
					if (resultsCount) resultsCount.classList.add('hidden');
					if (clearButton) clearButton.classList.add('hidden');
					if (noResults) noResults.classList.add('hidden');
				}

				function clearSearch() {
					if (!searchInput || !categorySelect) return;
					searchInput.value = '';
					categorySelect.value = '';
					void performSearch();
					searchInput.focus();
				}

				let debounceTimer;
				if (searchInput) {
					searchInput.addEventListener('input', () => {
						clearTimeout(debounceTimer);
						debounceTimer = setTimeout(() => { void performSearch(); }, 200);
					});
				}

				if (categorySelect) categorySelect.addEventListener('change', () => { void performSearch(); });
				if (clearButton) clearButton.addEventListener('click', clearSearch);
				if (loadMoreButton) loadMoreButton.addEventListener('click', (event) => {
					event.preventDefault();
					void loadMore();
				});

				updateLoadMoreVisibility();
			<\/script> </main> </div> `, " </body></html>"], ['<html lang="en"> <head>', "", '</head> <body class="flex flex-col min-h-screen"> ', ' <div class="flex-1"> <!-- Hero Section --> <section class="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(1200px_500px_at_10%_-10%,#E7F0FF_0%,transparent_60%),radial-gradient(900px_400px_at_90%_-20%,#F5F7FF_0%,transparent_55%)] pt-36 sm:pt-36 lg:pt-40"> <div class="max-w-[1200px] mx-auto px-6 pb-16"> <div class="text-center"> <p class="text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">Zoftware Blog</p> <h1 class="text-4xl md:text-5xl font-semibold text-slate-900 tracking-[-0.02em] mb-4">\nClarity for modern software decisions\n</h1> <p class="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10">\nDeep dives on SaaS, growth, and product strategy. Short reads, real takeaways.\n</p> ', ' </div> </div> </section> <!-- Main Content --> <main class="max-w-[1200px] mx-auto px-6 pt-14 pb-16"> <div class="mb-8"> <p class="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Latest</p> <h2 class="text-2xl md:text-3xl font-semibold text-slate-900">Recent articles</h2> </div> <!-- Posts Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-posts-grid> ', ' </div> <div id="no-results-message" class="hidden text-center py-16"> <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <p class="text-lg font-semibold text-slate-900 mb-1">No results found</p> <p class="text-sm text-slate-500">Try adjusting your search or filters to find what you need.</p> </div> <div class="mt-10 flex flex-col items-center gap-3"> <button id="load-more" class="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-700 transition hover:border-slate-300 hover:text-slate-900 sm:w-auto sm:max-w-none">\nLoad more\n</button> </div> <noscript> ', ' </noscript> <script type="application/json" id="initial-posts"', "", ">", `<\/script> <script type="module">
				const dataNode = document.getElementById('initial-posts');
				let loadedPosts = [];
				let totalCount = 0;
				let postsPerLoad = 6;

				if (dataNode) {
					try {
						loadedPosts = JSON.parse(dataNode.textContent || '[]');
					} catch (error) {
						console.error('Failed to parse initial posts data', error);
						loadedPosts = [];
					}
					postsPerLoad = Number(dataNode.dataset.postsPerPage || '6');
					totalCount = Number(dataNode.dataset.total || '0');
				}

				const postsGrid = document.querySelector('[data-posts-grid]');
				const loadMoreButton = document.getElementById('load-more');
				const noResults = document.getElementById('no-results-message');

				const searchInput = document.getElementById('search-input');
				const categorySelect = document.getElementById('category-filter');
				const clearButton = document.getElementById('clear-search');
				const resultsCount = document.getElementById('search-results-count');
				const resultsNumber = document.getElementById('results-number');

				if (!postsGrid) {
					console.warn('Posts grid not found');
				}

				const fuseOptions = {
					keys: [
						{ name: 'title', weight: 0.5 },
						{ name: 'description', weight: 0.3 },
						{ name: 'tags', weight: 0.15 },
						{ name: 'categories', weight: 0.05 },
					],
					threshold: 0.4,
					ignoreLocation: true,
					minMatchCharLength: 2,
				};

				let renderedCount = loadedPosts.length;
				let isFiltering = false;
				let allPosts = null;
				let fuse = null;
				let fuseReady = null;
				let fuseSource = null;

				function populateCategories(source) {
					if (!categorySelect) return;
					const allCategories = [...new Set(source.flatMap((post) => post.categories))].filter(Boolean).sort();
					categorySelect.innerHTML = '<option value="">All Categories</option>';
					allCategories.forEach((cat) => {
						const option = document.createElement('option');
						option.value = cat;
						option.textContent = cat;
						categorySelect.appendChild(option);
					});
				}

				populateCategories(loadedPosts);

				function formatDate(value) {
					if (!value) return '';
					const date = new Date(value);
					if (Number.isNaN(date.valueOf())) return '';
					const day = date.getDate();
					const month = date.toLocaleString('en-us', { month: 'short' });
					const year = date.getFullYear();
					const ordinal = (n) => {
						const s = ["th", "st", "nd", "rd"];
						const v = n % 100;
						return n + (s[(v - 20) % 10] || s[v] || s[0]);
					};
					return \\\`\\\${ordinal(day)} \\\${month} \\\${year}\\\`;
				}

				function buildCard(post) {
					const article = document.createElement('a');
					article.href = \\\`/\\\${post.slug}/\\\`;
					article.className = 'flex-1 bg-white border min-w-[310px] border-[#737373] lg:hover:scale-105 p-[15px] flex flex-col transition-transform duration-300';
					article.dataset.postId = post.slug;

					const humanizeLabel = (value) =>
						value
							.replace(/[-_]+/g, ' ')
							.split(' ')
							.filter(Boolean)
							.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' ');

					const imageMarkup = post.coverImageUrl
						? \\\`<img width="800" height="400" src="\\\${post.coverImageUrl}" alt="\\\${post.coverImageAlt || post.title}" loading="lazy" class="w-full h-full object-cover rounded-[10px]" />\\\`
						: '';

					article.innerHTML = \\\`
						<div class="relative w-full bg-slate-100 rounded-[10px] overflow-hidden flex-1 min-h-[160px]">
							\\\${imageMarkup}
							<div class="w-full h-full items-center justify-center \\\${post.coverImageUrl ? 'hidden' : 'flex'}" data-fallback>
								<svg class="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							</div>
						</div>
						
						<div class="flex items-center justify-between mt-5 text-sm leading-[135%] antialiased">
							<p class="text-[#2C4E9B] font-semibold capitalize line-clamp-1 mr-2" data-category></p>
							<p class="text-[#696871] font-normal whitespace-nowrap ml-auto" data-date></p>
						</div>
						
						<p class="line-clamp-2 mt-0 mb-3 text-base text-[#282828] antialiased font-medium leading-[150%]" data-title></p>
						<p class="line-clamp-2 mt-0 mb-1 text-sm font-normal leading-[135%] text-[#696871] antialiased" data-description></p>
					\\\`;

					const dateEl = article.querySelector('[data-date]');
					if (dateEl) dateEl.textContent = formatDate(post.publishedAt);

					const titleEl = article.querySelector('[data-title]');
					if (titleEl) titleEl.textContent = post.title;

					const descEl = article.querySelector('[data-description]');
					if (descEl) descEl.textContent = (post.description || '').slice(0, 180);

					const categoryEl = article.querySelector('[data-category]');
					if (categoryEl && post.categories && post.categories[0]) {
						categoryEl.textContent = humanizeLabel(post.categories[0]);
					}

					const img = article.querySelector('img');
					if (img) {
						img.onerror = () => {
							img.style.display = 'none';
							const fallback = article.querySelector('[data-fallback]');
							if (fallback) {
								fallback.classList.remove('hidden');
								fallback.classList.add('flex');
							}
						};
					}

					return article;
				}

				function renderList(list) {
					if (!postsGrid) return;
					const fragment = document.createDocumentFragment();
					list.forEach((post) => {
						fragment.appendChild(buildCard(post));
					});
					postsGrid.innerHTML = '';
					postsGrid.appendChild(fragment);
				}

				function appendList(list) {
					if (!postsGrid) return;
					const fragment = document.createDocumentFragment();
					list.forEach((post) => {
						fragment.appendChild(buildCard(post));
					});
					postsGrid.appendChild(fragment);
				}

				function updateLoadMoreVisibility() {
					const hasMore = totalCount > 0 && renderedCount < totalCount;
					const shouldShow = hasMore && !isFiltering;
					if (loadMoreButton) loadMoreButton.classList.toggle('hidden', !shouldShow);
				}

				async function loadMore() {
					if (isFiltering || !loadMoreButton) return;
					if (totalCount && renderedCount >= totalCount) {
						updateLoadMoreVisibility();
						return;
					}

					loadMoreButton.disabled = true;
					const originalLabel = loadMoreButton.textContent;
					loadMoreButton.textContent = 'Loading...';

					try {
						const response = await fetch(\\\`/api/posts.json?start=\\\${renderedCount}&limit=\\\${postsPerLoad}\\\`);
						if (!response.ok) throw new Error('Failed to load more posts');
						const payload = await response.json();
						const newPosts = Array.isArray(payload.posts) ? payload.posts : [];

						if (newPosts.length > 0) {
							appendList(newPosts);
							loadedPosts = loadedPosts.concat(newPosts);
							renderedCount = loadedPosts.length;
						}

						if (typeof payload.total === 'number') {
							totalCount = payload.total;
						}
					} catch (error) {
						console.error('Failed to load more posts', error);
					} finally {
						loadMoreButton.disabled = false;
						loadMoreButton.textContent = originalLabel;
						updateLoadMoreVisibility();
					}
				}

				function setFiltering(active) {
					isFiltering = active;
					updateLoadMoreVisibility();
				}

				async function ensureSearchData() {
					if (allPosts) return allPosts;
					try {
						const response = await fetch('/api/posts.json?all=1');
						if (response.ok) {
							const payload = await response.json();
							if (Array.isArray(payload.posts)) {
								allPosts = payload.posts;
								populateCategories(allPosts);
								return allPosts;
							}
						}
					} catch (error) {
						console.error('Failed to load search data', error);
					}
					return loadedPosts;
				}

				function ensureFuse(source) {
					if (fuse && fuseSource === source) return Promise.resolve(fuse);
					if (fuseReady && fuseSource === source) return fuseReady;
					fuseSource = source;
					fuseReady = import('fuse.js')
						.then((mod) => {
							fuse = new mod.default(source, fuseOptions);
							return fuse;
						})
						.catch((error) => {
							console.error('Search disabled: Fuse failed to load', error);
							return null;
						});
					return fuseReady;
				}

				async function performSearch() {
					const searchTerm = searchInput ? searchInput.value.trim() : '';
					const category = categorySelect ? categorySelect.value : '';
					const filtering = Boolean(searchTerm || category);
					setFiltering(filtering);

					if (filtering) {
						const source = await ensureSearchData();
						const fuseInstance = await ensureFuse(source);
						const results = searchTerm && fuseInstance ? new Set(fuseInstance.search(searchTerm).map((r) => r.item.slug)) : null;
						const filtered = source.filter((post) => (!results || results.has(post.slug)) && (!category || post.categories.includes(category)));
						renderList(filtered);
						if (resultsNumber) resultsNumber.textContent = \\\`\\\${filtered.length}\\\`;
						if (resultsCount) resultsCount.classList.remove('hidden');
						if (clearButton) clearButton.classList.remove('hidden');
						if (noResults) noResults.classList.toggle('hidden', filtered.length !== 0);
						return;
					}

					renderList(loadedPosts);
					if (resultsCount) resultsCount.classList.add('hidden');
					if (clearButton) clearButton.classList.add('hidden');
					if (noResults) noResults.classList.add('hidden');
				}

				function clearSearch() {
					if (!searchInput || !categorySelect) return;
					searchInput.value = '';
					categorySelect.value = '';
					void performSearch();
					searchInput.focus();
				}

				let debounceTimer;
				if (searchInput) {
					searchInput.addEventListener('input', () => {
						clearTimeout(debounceTimer);
						debounceTimer = setTimeout(() => { void performSearch(); }, 200);
					});
				}

				if (categorySelect) categorySelect.addEventListener('change', () => { void performSearch(); });
				if (clearButton) clearButton.addEventListener('click', clearSearch);
				if (loadMoreButton) loadMoreButton.addEventListener('click', (event) => {
					event.preventDefault();
					void loadMore();
				});

				updateLoadMoreVisibility();
			<\/script> </main> </div> `, " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "BlogSearch", $$BlogSearch, {}), displayPostsData.map((post) => renderTemplate`<a${addAttribute(`/${post.slug}/`, "href")} class="flex-1 bg-white border min-w-[310px] border-[#737373] lg:hover:scale-105 p-[15px] flex flex-col transition-transform duration-300"${addAttribute(post.slug, "data-post-id")}> <!-- Image --> <div class="relative w-full bg-slate-100 rounded-[10px] overflow-hidden flex-1 min-h-[160px]"> ${post.coverImageUrl ? renderTemplate`<img${addAttribute(800, "width")}${addAttribute(400, "height")}${addAttribute(post.coverImageUrl, "src")}${addAttribute(post.coverImageAlt, "alt")} loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover rounded-[10px]">` : null} <div${addAttribute(`w-full h-full items-center justify-center ${post.coverImageUrl ? "hidden" : "flex"}`, "class")} data-fallback> <svg class="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> </div> <!-- Content --> <div class="flex items-center justify-between mt-5 text-sm leading-[135%] antialiased"> <p class="text-[#2C4E9B] font-semibold capitalize line-clamp-1 mr-2"> ${post.categories && post.categories[0] ? humanizeLabel(post.categories[0]) : ""} </p> <p class="text-[#696871] font-normal whitespace-nowrap ml-auto"> ${post.publishedAt ? renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.publishedAt })}` : ""} </p> </div> <p class="line-clamp-2 mt-0 mb-3 text-base text-[#282828] antialiased font-medium leading-[150%]"> ${post.title} </p> <p class="line-clamp-2 mt-0 mb-1 text-sm font-normal leading-[135%] text-[#696871] antialiased"> ${post.description.slice(0, 180)} </p> </a>`), totalPages > 1 && renderTemplate`<nav class="flex items-center justify-center gap-2 mt-12" aria-label="Pagination"> <button disabled class="px-4 py-2 rounded-full border border-slate-200 text-slate-400 cursor-not-allowed">
Previous
</button> ${pageWindow(1, totalPages, 5).map((page) => renderTemplate`<a${addAttribute(page === 1 ? "/" : `/page/${page}/`, "href")}${addAttribute(`px-4 py-2 rounded-full transition ${page === 1 ? "bg-brand-blue-v2 text-white" : "border border-slate-200 text-slate-700 hover:border-slate-300"}`, "class")}${addAttribute(page === 1 ? "page" : void 0, "aria-current")}> ${page} </a>`)} ${totalPages > 1 && renderTemplate`<a href="/page/2/" class="px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 transition">
Next
</a>`} </nav>`, addAttribute(POSTS_PER_PAGE, "data-posts-per-page"), addAttribute(total, "data-total"), unescapeHTML(initialPostsJson), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/work/dev/zoftware-blogs/astro-blog/src/pages/index.astro", void 0);

const $$file = "/Users/work/dev/zoftware-blogs/astro-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
