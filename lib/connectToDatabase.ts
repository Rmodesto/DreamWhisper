import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI ?? ""; // Replace with your MongoDB connection string
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("MONGODB_URI is not defined");
}

let cachedDb: Db | null = null;

export async function connectToDatabase() {
  console.log("Using cached database instance."); // Log when using cached connection
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  } as any);
  const db = client.db(dbName);
  cachedDb = db;

  console.log("Successfully connected to MongoDB."); // Log after a successful connection

  return db; // Add this line to return the connected database
}
