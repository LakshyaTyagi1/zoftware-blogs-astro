import { postsCollection } from "./mongoClient";

// ── Types (same as sanity.ts – drop-in compatible) ──

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

// ── Helpers ──

const NOT_DRAFT = { draft: { $ne: true } };

// ── Query functions (same signatures as sanity.ts) ──

export async function getAllPostSlugs(): Promise<string[]> {
  const col = await postsCollection();
  const docs = await col.find(NOT_DRAFT, { projection: { slug: 1 } }).toArray();
  return docs.map((d) => d.slug as string).filter(Boolean);
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const col = await postsCollection();
  const doc = await col.findOne({ slug, ...NOT_DRAFT });
  return doc as SanityPost | null;
}

export async function getTotalPostCount(): Promise<number> {
  const col = await postsCollection();
  return col.countDocuments(NOT_DRAFT);
}

export async function getPostsPage(
  page: number,
  pageSize: number,
): Promise<{ posts: SanityPost[]; total: number }> {
  const col = await postsCollection();
  const skip = Math.max(0, (page - 1) * pageSize);

  const [posts, total] = await Promise.all([
    col
      .find(NOT_DRAFT)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(pageSize)
      .toArray(),
    col.countDocuments(NOT_DRAFT),
  ]);

  return { posts: posts as unknown as SanityPost[], total };
}

export async function getPostsRange(
  startIndex: number,
  limit: number,
): Promise<{ posts: SanityPost[]; total: number }> {
  const col = await postsCollection();
  const skip = Math.max(0, startIndex);
  const safeLimit = Math.max(1, limit);

  const [posts, total] = await Promise.all([
    col
      .find(NOT_DRAFT)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(safeLimit)
      .toArray(),
    col.countDocuments(NOT_DRAFT),
  ]);

  return { posts: posts as unknown as SanityPost[], total };
}

export async function getAllPostsForSearch(): Promise<
  Array<{
    slug: string;
    title: string;
    description?: string | null;
    categories: string[];
    tags: string[];
  }>
> {
  const col = await postsCollection();
  const rows = await col
    .find(NOT_DRAFT, {
      projection: { slug: 1, title: 1, description: 1, categories: 1, tags: 1 },
    })
    .sort({ publishedAt: -1 })
    .toArray();

  return rows.map((row) => ({
    slug: row.slug as string,
    title: row.title as string,
    description: (row.description as string) ?? "",
    categories:
      (row.categories as SanityCategory[] | undefined)
        ?.map((c) => c.title)
        .filter(Boolean) ?? [],
    tags:
      (row.tags as SanityTag[] | undefined)
        ?.map((t) => t.title)
        .filter(Boolean) ?? [],
  }));
}

export async function getAllPostsForRss(): Promise<SanityPost[]> {
  const col = await postsCollection();
  const docs = await col.find(NOT_DRAFT).sort({ publishedAt: -1 }).toArray();
  return docs as unknown as SanityPost[];
}

// ── Portable Text → plain text util (local, no DB) ──

export function plainTextFromBlocks(
  blocks: any[] | undefined,
  maxLength = 160,
): string {
  if (!blocks || blocks.length === 0) return "";
  const text = blocks
    .filter(
      (block) =>
        block && block._type === "block" && Array.isArray(block.children),
    )
    .map((block) => block.children.map((child: any) => child.text).join(""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}
