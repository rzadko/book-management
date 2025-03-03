"use client";

import { Book } from "@/types";
import { useEffect, useState } from "react";

const NewBook = {
    _id: "",
    title: "",
    author: "",
    publishedDate: new Date().toISOString().split("T")[0],
};

export const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [newBook, setNewBook] = useState<Book>(NewBook);
    const [bookToUpdate, setBookToUpdate] = useState<Book | null>(null);
    const [bookToDelete, setBookToDelete] = useState<Book | null>(null);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = () => {
        fetch("/api/books")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    };

    const handleDeleteBook = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!bookToDelete) return;

        await fetch("/api/books", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookToDelete),
        });

        setBooks(books.filter((book: Book) => book._id !== bookToDelete._id));
    };

    const handleAddNewBook = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch("/api/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: newBook.title,
                author: newBook.author,
                publishedDate: newBook.publishedDate,
            }),
        });

        setNewBook(NewBook);
        getBooks();
    };

    const handleChangeBook = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!bookToUpdate) return;

        await fetch("/api/books", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookToUpdate),
        });

        getBooks();
    };

    return {
        books,
        newBook,
        setNewBook,
        bookToUpdate,
        setBookToUpdate,
        bookToDelete,
        setBookToDelete,
        handleDeleteBook,
        handleAddNewBook,
        handleChangeBook,
    };
};
