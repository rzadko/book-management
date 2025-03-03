import { Book } from "@/types";
import { useState } from "react";
import { SubmitButton } from "./SubmitButton";

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
    const [touched, setTouched] = useState({
        title: false,
        author: false,
    });

    const handleBlur = (field: string) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col justify-start">
                <label
                    className="after:ml-0.5 after:text-red-500 after:content-['*']"
                    htmlFor="title"
                >
                    {"Title"}
                </label>
                <input
                    aria-label="title"
                    value={book.title}
                    onChange={(e) =>
                        setBook({ ...book, title: e.target.value })
                    }
                    onBlur={() => handleBlur("title")}
                    placeholder="Title"
                    required
                />
                {touched.title && !book.title && (
                    <p className="mt-1 text-sm font-medium text-red-500">
                        Please include a title for the book
                    </p>
                )}
            </div>
            <div className="flex flex-col justify-start">
                <label
                    className="after:ml-0.5 after:text-red-500 after:content-['*']"
                    htmlFor="author"
                >
                    {"Author"}
                </label>
                <input
                    aria-label="author"
                    value={book.author}
                    onChange={(e) =>
                        setBook({ ...book, author: e.target.value })
                    }
                    onBlur={() => handleBlur("author")}
                    placeholder="Author"
                    required
                />
                {touched.author && !book.author && (
                    <p className="mt-1 text-sm font-medium text-red-500">
                        Please include an author of the book
                    </p>
                )}
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
            <SubmitButton submitText={submitText}></SubmitButton>
        </form>
    );
};
