import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToDatabase() {
  if (!client.topology.isConnected()) {
    await client.connect();
  }
  const db = client.db('my-chatbot');
  return { db, client };
}
