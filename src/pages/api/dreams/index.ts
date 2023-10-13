// pages/api/dreams/index.ts
import { InsertOneResult } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/connectToDatabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectToDatabase();

  if (req.method === "POST") {
    const { dream } = req.body;
    const result = (await db
      .collection("dreams")
      .insertOne({ dream })) as InsertOneResult<any>;
    res
      .status(201)
      .json({
        message: "Dream created",
        data: { _id: result.insertedId, dream },
      });
  } else if (req.method === "GET") {
    const dreams = await db.collection("dreams").find().toArray();
    res.status(200).json({ message: "Dreams retrieved", data: dreams });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
