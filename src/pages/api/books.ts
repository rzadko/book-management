import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const client = await connectToDatabase();
    const db = client.db();

    const sanitize = (input: string) => {
        return input
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    if (req.method === "GET") {
        const books = await db.collection("books").find().toArray();
        return res.status(200).json(books);
    }

    if (req.method === "POST") {
        const { title, author, publishedDate } = req.body;

        if (!title || !author) {
            return res
                .status(400)
                .json({ error: "Title and author are required" });
        }

        const result = await db.collection("books").insertOne({
            title: sanitize(title),
            author: sanitize(author),
            publishedDate: sanitize(publishedDate),
        });
        return res
            .status(201)
            .json({ message: "Book added", id: result.insertedId });
    }

    if (req.method === "PUT") {
        const { _id, title, author, publishedDate } = req.body;

        if (!ObjectId.isValid(_id)) {
            return res.status(400).json({ error: "Invalid id" });
        }

        if (!title || !author) {
            return res
                .status(400)
                .json({ error: "Title and author are required" });
        }

        const updatedBook = await db.collection("books").updateOne(
            { _id: new ObjectId(_id) },
            {
                $set: {
                    title: sanitize(title),
                    author: sanitize(author),
                    publishedDate: sanitize(publishedDate),
                },
            }
        );

        if (updatedBook.matchedCount === 0) {
            return res.status(404).json({ error: "Book not found" });
        }

        return res.status(200).json({ message: "Book updated" });
    }

    if (req.method === "DELETE") {
        const { _id } = req.body;

        if (!ObjectId.isValid(_id)) {
            return res.status(400).json({ error: "Invalid id" });
        }

        await db
            .collection("books")
            .findOneAndDelete({ _id: new ObjectId(_id) });
        return res.status(200).json({ message: "Book deleted" });
    }
}
