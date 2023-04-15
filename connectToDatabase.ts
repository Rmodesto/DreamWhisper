import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ?? ""; // Replace with your MongoDB connection string
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("MONGODB_URI is not defined");
}

let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  } as any);
  const db = client.db(dbName);
  cachedDb = db;

  return db; // Add this line to return the connected database
}
