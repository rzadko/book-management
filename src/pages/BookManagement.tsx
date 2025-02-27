"use client";
import { BookForm } from "@/components/BookForm";
import { BookTable } from "@/components/BookTable";
import { Header } from "@/components/Header";
import { Modal } from "@/components/Modal";
import { useBooks } from "@/hooks/useBooks";
import { Book } from "@/types";
import { useState } from "react";

export const BookManagement = () => {
    const {
        books,
        newBook,
        setNewBook,
        bookToUpdate,
        setBookToUpdate,
        handleAddNewBook,
        handleDeleteBook,
        handleEditSubmit,
    } = useBooks();

    const [openNewModal, setOpenNewModal] = useState<boolean>(false);
    const [openChangeModal, setOpenChangeModal] = useState<boolean>(false);

    const handleOpenChangeModal = (book: Book) => {
        setBookToUpdate(book);
        setOpenChangeModal(!openChangeModal);
    };

    const handleSubmitChangeModal = (e: React.FormEvent) => {
        handleEditSubmit(e);
        setOpenChangeModal(!openChangeModal);
    };

    const handleNewModal = (e: React.FormEvent) => {
        handleAddNewBook(e);
        setOpenNewModal(!openNewModal);
    };

    const NewBookModal = () => {
        return (
            <Modal
                title="Add a new book"
                isOpen={openNewModal}
                setIsOpen={setOpenNewModal}
            >
                <BookForm
                    book={newBook}
                    setBook={setNewBook}
                    handleSubmit={handleNewModal}
                    submitText="Add book"
                />
            </Modal>
        );
    };

    const ChangeBookModal = () => {
        return (
            <Modal
                title="Edit book"
                isOpen={openChangeModal}
                setIsOpen={setOpenChangeModal}
            >
                <BookForm
                    book={bookToUpdate!}
                    setBook={setBookToUpdate}
                    handleSubmit={handleSubmitChangeModal}
                    submitText="Update book"
                />
            </Modal>
        );
    };

    return (
        <div>
            <Header
                openModal={openNewModal}
                setOpenModal={setOpenNewModal}
            ></Header>

            {openNewModal && NewBookModal()}
            {openChangeModal && ChangeBookModal()}

            <BookTable
                books={books}
                handleDeleteBook={handleDeleteBook}
                handleChangeModal={handleOpenChangeModal}
                isChangeModalOpen={openChangeModal}
            ></BookTable>
        </div>
    );
};
