import nextConnect from 'next-connect';
import { connectToDatabase } from '../../lib/mongodb';

const handler = nextConnect();

handler.get(async (req, res) => {
  const db = await connectToDatabase();
  const users = await db.collection('users').find({}).toArray();
  res.json(users);
});

export default handler;
