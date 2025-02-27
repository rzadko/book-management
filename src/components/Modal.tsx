interface ModalProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const Modal = ({ title, children, isOpen, setIsOpen }: ModalProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center">
            <div className="relative rounded-lg bg-white w-11/12 max-w-[500px] p-6 shadow-lg animate-fadeIn z-[100000]">
                <div className="flex flex-row justify-between items-baseline mb-8">
                    <h2 className="font-extrabold text-xl">{title}</h2>
                    <button
                        className="w-10 h-10 flex items-center justify-center bg-white text-primary border-2 border-primary transition-colors duration-200 ease-in-out text-xs hover:bg-primary hover:text-white"
                        aria-label="close-modal"
                    >
                        <span
                            onClick={() => setIsOpen(!isOpen)}
                            className="material-symbols-outlined"
                        >
                            close
                        </span>
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};
