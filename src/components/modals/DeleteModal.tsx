import { Book } from "@/types";
import { Modal } from "../Modal";
import { SubmitButton } from "../SubmitButton";

interface DeleteModalProps {
    bookToDelete: Book;
    toggle: boolean;
    setToggle: (toggle: boolean) => void;
    handleDeleteBook: (e: React.FormEvent) => void;
}

export const DeleteModal = ({
    bookToDelete,
    toggle,
    setToggle,
    handleDeleteBook,
}: DeleteModalProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        handleDeleteBook(e);
        setToggle(!toggle);
    };

    return (
        <Modal
            title={`Are you sure you want to delete ${bookToDelete.title}?`}
            toggle={toggle}
            setToggle={setToggle}
        >
            <form
                onSubmit={(e: React.FormEvent) => handleSubmit(e)}
                className="flex flex-col"
            >
                <SubmitButton isDelete submitText={"Delete"}></SubmitButton>
            </form>
        </Modal>
    );
};
