interface SubmitButtonProps {
    submitText: string;
    isDelete?: boolean;
}

export const SubmitButton = ({ submitText, isDelete }: SubmitButtonProps) => {
    return (
        <button
            tabIndex={0}
            type="submit"
            className={`text-white font-semibold p-4 mt-4 rounded-md transition self-end
                ${
                    isDelete
                        ? "bg-delete hover:red-500"
                        : "bg-primary hover:bg-accent"
                } `}
        >
            {submitText}
        </button>
    );
};
