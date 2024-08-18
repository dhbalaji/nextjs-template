import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  if (!client.isConnected()) await client.connect();
  return client.db('mydatabase');
}

export { connectToDatabase };
