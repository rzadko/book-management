import { Book } from "@/types";

interface BookTableProps {
    books: Book[];
    handleDeleteModal: (book: Book) => void;
    handleChangeModal: (book: Book) => void;
    isChangeModalOpen: boolean;
    isDeleteModalOpen: boolean;
}
export const BookTable = ({
    books,
    handleDeleteModal,
    handleChangeModal,
    isChangeModalOpen,
    isDeleteModalOpen,
}: BookTableProps) => {
    return (
        <div className="w-full mt-5 bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publishing date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id} className="hover:bg-hover">
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.publishedDate}</td>
                            <td className="flex gap-2.5 justify-evenly">
                                <button
                                    tabIndex={0}
                                    aria-label={`Edit ${book.title}`}
                                    aria-expanded={isChangeModalOpen}
                                    aria-controls="edit-book-form"
                                    className="bg-white text-primary border-2 border-primary px-4 py-2 rounded-md transition hover:bg-primary hover:text-white"
                                    onClick={() => handleChangeModal(book)}
                                >
                                    Change
                                </button>
                                <button
                                    tabIndex={0}
                                    aria-label={`Delete ${book.title}`}
                                    aria-expanded={isDeleteModalOpen}
                                    aria-controls="delete-book-form"
                                    className="bg-white text-delete border-2 border-delete px-4 py-2 rounded-md transition hover:bg-delete hover:text-white"
                                    onClick={() => handleDeleteModal(book)}
                                >
                                    <span>Delete</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
