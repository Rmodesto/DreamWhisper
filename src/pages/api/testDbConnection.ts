import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/connectToDatabase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();
    res.status(200).json({ message: "Successfully connected to MongoDB." });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ message: "Error connecting to MongoDB." });
  }
};
