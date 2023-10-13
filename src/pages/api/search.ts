// pages/api/search.ts

import Chroma from "chromadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  // Initialize Chroma
  const chroma = new Chroma("http://your-chroma-server-url");

  // Perform your search here. This is just a simple example.
  const results = await chroma.search(query as string);

  res.json(results);
};
