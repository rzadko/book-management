import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI nor defined");
}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
    if (cachedClient) {
        console.log("Using exisiting connection");
        return cachedClient;
    }

    console.log("Connecting to MongoDB");
    const client = new MongoClient(MONGODB_URI!);
    await client.connect();

    cachedClient = client;
    return client;
}
