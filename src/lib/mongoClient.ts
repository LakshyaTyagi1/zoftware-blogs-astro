import { MongoClient, type Db, type Collection } from "mongodb";

const uri =
  import.meta.env.MONGODB_URI ||
  "mongodb://localhost:27017/?directConnection=true";
const dbName = import.meta.env.MONGODB_DB || "zoftware-blog";

// Singleton pattern for serverless environments (avoids reconnecting on every invocation)
let clientPromise: Promise<MongoClient> | null = null;

function getClientPromise(): Promise<MongoClient> {
  if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  return clientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}

export async function postsCollection(): Promise<Collection> {
  const db = await getDb();
  return db.collection("posts");
}

export async function categoriesCollection(): Promise<Collection> {
  const db = await getDb();
  return db.collection("categories");
}

export async function tagsCollection(): Promise<Collection> {
  const db = await getDb();
  return db.collection("tags");
}
