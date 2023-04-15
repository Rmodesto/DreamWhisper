// pages/api/dreams/index.ts
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../connectToDatabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectToDatabase();

  if (req.method === "POST") {
    const { dream } = req.body;
    const result = await db.collection("dreams").insertOne({ dream });
    const insertedDream = await db
      .collection("dreams")
      .findOne({ _id: new ObjectId(result.insertedId) });
    res.status(201).json({ message: "Dream created", data: insertedDream });
  } else if (req.method === "GET") {
    const dreams = await db.collection("dreams").find().toArray();
    res.status(200).json({ message: "Dreams retrieved", data: dreams });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
