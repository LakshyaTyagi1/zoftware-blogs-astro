import { sanityClient } from './sanityClient';

export interface SanityCategory {
  title: string;
  slug?: string | null;
}

export interface SanityTag {
  title: string;
  slug?: string | null;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  description?: string | null;
  publishedAt?: string | null;
  updatedAt?: string | null;
  coverImage?: any;
  categories?: SanityCategory[];
  tags?: SanityTag[];
  body?: any[];
}

const BASE_FILTER = `_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))`;

const POST_LIST_FIELDS = `{
  _id,
  title,
  "slug": slug.current,
  description,
  publishedAt,
  updatedAt,
  coverImage,
  categories[]->{title, "slug": slug.current},
  tags[]->{title, "slug": slug.current},
  body
}`;

const POST_FULL_FIELDS = `{
  _id,
  title,
  "slug": slug.current,
  description,
  publishedAt,
  updatedAt,
  coverImage,
  categories[]->{title, "slug": slug.current},
  tags[]->{title, "slug": slug.current},
  body
}`;

export async function getAllPostSlugs(): Promise<string[]> {
  const query = `*[${BASE_FILTER}].slug.current`;
  const slugs = await sanityClient.fetch<string[]>(query);
  return slugs.filter(Boolean);
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const query = `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0]${POST_FULL_FIELDS}`;
  return sanityClient.fetch<SanityPost | null>(query, { slug });
}

export async function getTotalPostCount(): Promise<number> {
  const query = `count(*[${BASE_FILTER}])`;
  return sanityClient.fetch<number>(query);
}

export async function getPostsPage(page: number, pageSize: number): Promise<{ posts: SanityPost[]; total: number }> {
  const start = Math.max(0, (page - 1) * pageSize);
  const end = start + pageSize;
  const postsQuery = `*[${BASE_FILTER}] | order(publishedAt desc) [$start...$end]${POST_LIST_FIELDS}`;
  const countQuery = `count(*[${BASE_FILTER}])`;

  const [posts, total] = await Promise.all([
    sanityClient.fetch<SanityPost[]>(postsQuery, { start, end }),
    sanityClient.fetch<number>(countQuery),
  ]);

  return { posts, total };
}

export async function getPostsRange(startIndex: number, limit: number): Promise<{ posts: SanityPost[]; total: number }> {
  const start = Math.max(0, startIndex);
  const safeLimit = Math.max(1, limit);
  const end = start + safeLimit;
  const postsQuery = `*[${BASE_FILTER}] | order(publishedAt desc) [$start...$end]${POST_LIST_FIELDS}`;
  const countQuery = `count(*[${BASE_FILTER}])`;

  const [posts, total] = await Promise.all([
    sanityClient.fetch<SanityPost[]>(postsQuery, { start, end }),
    sanityClient.fetch<number>(countQuery),
  ]);

  return { posts, total };
}

export async function getAllPostsForSearch(): Promise<Array<{
  slug: string;
  title: string;
  description?: string | null;
  categories: string[];
  tags: string[];
}>> {
  const query = `*[${BASE_FILTER}] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    description,
    categories[]->{title},
    tags[]->{title}
  }`;

  const rows = await sanityClient.fetch<
    Array<{ slug: string; title: string; description?: string | null; categories?: { title: string }[]; tags?: { title: string }[] }>
  >(query);

  return rows.map((row) => ({
    slug: row.slug,
    title: row.title,
    description: row.description ?? '',
    categories: row.categories?.map((c) => c.title).filter(Boolean) ?? [],
    tags: row.tags?.map((t) => t.title).filter(Boolean) ?? [],
  }));
}

export async function getAllPostsForRss(): Promise<SanityPost[]> {
  const query = `*[${BASE_FILTER}] | order(publishedAt desc)${POST_LIST_FIELDS}`;
  return sanityClient.fetch<SanityPost[]>(query);
}

export function plainTextFromBlocks(blocks: any[] | undefined, maxLength = 160): string {
  if (!blocks || blocks.length === 0) return '';
  const text = blocks
    .filter((block) => block && block._type === 'block' && Array.isArray(block.children))
    .map((block) => block.children.map((child) => child.text).join(''))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!text) return '';
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}
