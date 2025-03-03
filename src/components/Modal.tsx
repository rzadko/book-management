interface ModalProps {
    title: string;
    children: React.ReactNode;
    toggle: boolean;
    setToggle: (isOpen: boolean) => void;
}

export const Modal = ({ title, children, toggle, setToggle }: ModalProps) => {
    return (
        <div
            role="dialog"
            aria-modal="true"
            className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center"
        >
            <div className="relative rounded-lg bg-white w-11/12 max-w-[500px] p-6 shadow-lg animate-fadeIn z-[100000]">
                <div className="flex flex-row justify-between items-baseline mb-8">
                    <h2 className="font-extrabold text-xl">{title}</h2>
                    <button
                        tabIndex={0}
                        className="w-10 h-10 flex items-center justify-center bg-white text-primary border-2 border-primary transition-colors duration-200 ease-in-out text-xs hover:bg-primary hover:text-white"
                        aria-label="close-modal"
                        onClick={() => setToggle(!toggle)}
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};
