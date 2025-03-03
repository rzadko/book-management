"use client";
import { BookTable } from "@/components/BookTable";
import { Header } from "@/components/Header";
import { ChangeModal } from "@/components/modals/ChangeModal";
import { DeleteModal } from "@/components/modals/DeleteModal";
import { NewModal } from "@/components/modals/NewModal";
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
        bookToDelete,
        setBookToDelete,
        handleAddNewBook,
        handleDeleteBook,
        handleChangeBook,
    } = useBooks();

    const [toggleNewModal, setToggleNewModal] = useState<boolean>(false);
    const [toggleChangeModal, setToggleChangeModal] = useState<boolean>(false);
    const [toggleDeleteModal, setToggleDeleteModal] = useState<boolean>(false);

    const handleChangeModal = (book: Book) => {
        setBookToUpdate(book);
        setToggleChangeModal(!toggleChangeModal);
    };

    const handleDeleteModal = (book: Book) => {
        setBookToDelete(book);
        setToggleDeleteModal(!toggleDeleteModal);
    };

    return (
        <>
            {toggleNewModal && (
                <NewModal
                    toggle={toggleNewModal}
                    setToggle={setToggleNewModal}
                    newBook={newBook}
                    setNewBook={setNewBook}
                    handleAddNewBook={handleAddNewBook}
                />
            )}
            {toggleChangeModal && (
                <ChangeModal
                    toggle={toggleChangeModal}
                    setToggle={setToggleChangeModal}
                    bookToUpdate={bookToUpdate!}
                    setBookToUpdate={setBookToUpdate}
                    handleChangeBook={handleChangeBook}
                />
            )}
            {toggleDeleteModal && (
                <DeleteModal
                    bookToDelete={bookToDelete!}
                    toggle={toggleDeleteModal}
                    setToggle={setToggleDeleteModal}
                    handleDeleteBook={handleDeleteBook}
                />
            )}
            <div>
                <Header
                    toggle={toggleNewModal}
                    setToggle={setToggleNewModal}
                ></Header>

                <BookTable
                    books={books}
                    handleDeleteModal={handleDeleteModal}
                    handleChangeModal={handleChangeModal}
                    isChangeModalOpen={toggleChangeModal}
                    isDeleteModalOpen={toggleDeleteModal}
                ></BookTable>
            </div>
        </>
    );
};
