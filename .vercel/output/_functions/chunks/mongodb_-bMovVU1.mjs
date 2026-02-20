import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://scraper-admin:FWVzS755sBgI5SUf@scraperdb.lvubbz1.mongodb.net/?appName=scraperDB";
const dbName = "blogs-production-cache";
let clientPromise = null;
function getClientPromise() {
  if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  return clientPromise;
}
async function getDb() {
  const client = await getClientPromise();
  return client.db(dbName);
}
async function postsCollection() {
  const db = await getDb();
  return db.collection("posts");
}

const NOT_DRAFT = { draft: { $ne: true } };
async function getPostBySlug(slug) {
  const col = await postsCollection();
  const doc = await col.findOne({ slug, ...NOT_DRAFT });
  return doc;
}
async function getTotalPostCount() {
  const col = await postsCollection();
  return col.countDocuments(NOT_DRAFT);
}
async function getPostsPage(page, pageSize) {
  const col = await postsCollection();
  const skip = Math.max(0, (page - 1) * pageSize);
  const [posts, total] = await Promise.all([
    col.find(NOT_DRAFT).sort({ publishedAt: -1 }).skip(skip).limit(pageSize).toArray(),
    col.countDocuments(NOT_DRAFT)
  ]);
  return { posts, total };
}
async function getPostsRange(startIndex, limit) {
  const col = await postsCollection();
  const skip = Math.max(0, startIndex);
  const safeLimit = Math.max(1, limit);
  const [posts, total] = await Promise.all([
    col.find(NOT_DRAFT).sort({ publishedAt: -1 }).skip(skip).limit(safeLimit).toArray(),
    col.countDocuments(NOT_DRAFT)
  ]);
  return { posts, total };
}
async function getAllPostsForRss() {
  const col = await postsCollection();
  const docs = await col.find(NOT_DRAFT).sort({ publishedAt: -1 }).toArray();
  return docs;
}
function plainTextFromBlocks(blocks, maxLength = 160) {
  if (!blocks || blocks.length === 0) return "";
  const text = blocks.filter(
    (block) => block && block._type === "block" && Array.isArray(block.children)
  ).map((block) => block.children.map((child) => child.text).join("")).join(" ").replace(/\s+/g, " ").trim();
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

export { plainTextFromBlocks as a, getPostsRange as b, getPostsPage as c, getTotalPostCount as d, getPostBySlug as e, getAllPostsForRss as g, postsCollection as p };
