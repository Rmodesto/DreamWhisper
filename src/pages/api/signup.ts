import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/mongodb';
import User from '../../../lib/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const { username, password, email } = body;

  switch (method) {
    case 'POST':
      try {
        const { db } = await connectToDatabase();

        const existingUser = await db.collection('users').findOne({ username });

        if (existingUser) {
          res.status(400).json({ success: false, message: 'Username already exists' });
          return;
        }

        // Create a new User instance
        const newUser = new User(undefined, username, password, email);

        const result = await db.collection('users').insertOne(newUser);
        newUser.id = result.insertedId.toString();

        res.status(201).json({ success: true, message: 'User created successfully', user: newUser });
      } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
