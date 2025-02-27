interface HeaderProps {
    openModal: boolean;
    setOpenModal: (isOpen: boolean) => void;
}

export const Header = ({ openModal, setOpenModal }: HeaderProps) => {
    return (
        <div className="flex flex-row justify-between items-baseline">
            <h2 className="font-extrabold text-3xl">All books</h2>
            <button
                tabIndex={0}
                aria-label="add-new-book"
                aria-expanded={openModal}
                aria-controls="add-book-form"
                className="bg-primary text-white font-semibold px-4 py-2 rounded-md transition hover:bg-accent"
                onClick={() => setOpenModal(!openModal)}
            >
                New book
            </button>
        </div>
    );
};
