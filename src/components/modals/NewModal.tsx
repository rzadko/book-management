import { Book } from "@/types";
import { BookForm } from "../BookForm";
import { Modal } from "../Modal";
import React from "react";

interface NewModalProps {
    toggle: boolean;
    setToggle: (toggle: boolean) => void;
    newBook: Book;
    setNewBook: (book: Book) => void;
    handleAddNewBook: (e: React.FormEvent) => void;
}

export const NewModal = ({
    toggle,
    setToggle,
    newBook,
    setNewBook,
    handleAddNewBook,
}: NewModalProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        handleAddNewBook(e);
        setToggle(!toggle);
    };

    return (
        <Modal title="Add a new book" toggle={toggle} setToggle={setToggle}>
            <BookForm
                book={newBook}
                setBook={setNewBook}
                handleSubmit={handleSubmit}
                submitText="Add book"
            />
        </Modal>
    );
};
