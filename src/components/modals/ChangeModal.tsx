import { Book } from "@/types";
import { BookForm } from "../BookForm";
import { Modal } from "../Modal";

interface ChangeModalProps {
    toggle: boolean;
    setToggle: (toggle: boolean) => void;
    bookToUpdate: Book;
    setBookToUpdate: (book: Book) => void;
    handleChangeBook: (e: React.FormEvent) => void;
}

export const ChangeModal = ({
    toggle,
    setToggle,
    bookToUpdate,
    setBookToUpdate,
    handleChangeBook,
}: ChangeModalProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        handleChangeBook(e);
        setToggle(!toggle);
    };

    return (
        <Modal title="Edit book" toggle={toggle} setToggle={setToggle}>
            <BookForm
                book={bookToUpdate!}
                setBook={setBookToUpdate}
                handleSubmit={handleSubmit}
                submitText="Update book"
            />
        </Modal>
    );
};
