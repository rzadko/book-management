import { Book } from "@/types";

interface BookFormProps {
    handleSubmit: (e: React.FormEvent) => void;
    book: Book;
    setBook: (book: Book) => void;
    submitText: string;
}
export const BookForm = ({
    handleSubmit,
    book,
    setBook,
    submitText,
}: BookFormProps) => {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col justify-start">
                <label htmlFor="title">{"Title"}</label>
                <input
                    aria-label="title"
                    value={book.title}
                    onChange={(e) =>
                        setBook({ ...book, title: e.target.value })
                    }
                    placeholder="Title"
                    required
                />
            </div>
            <div className="flex flex-col justify-start">
                <label htmlFor="author">{"Author"}</label>
                <input
                    aria-label="author"
                    value={book.author}
                    onChange={(e) =>
                        setBook({ ...book, author: e.target.value })
                    }
                    placeholder="Author"
                    required
                />
            </div>
            <div className="flex flex-col justify-start">
                <label htmlFor="publishing-date">{"Publishing date"}</label>
                <input
                    aria-label="publishing-date"
                    value={book.publishedDate}
                    onChange={(e) =>
                        setBook({ ...book, publishedDate: e.target.value })
                    }
                    type="date"
                />
            </div>

            <button
                type="submit"
                className="bg-primary text-white font-semibold p-4 mt-4 rounded-md transition hover:bg-accent self-end"
            >
                {submitText}
            </button>
        </form>
    );
};
