interface Props {
    title: string;
}

const SaveButton = ({ title }: Props) => {
    return (
        <button
            type="submit" // ✅ ahora dispara el handleSubmit de react-hook-form
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow transition-colors"
        >
            {title}
        </button>
    );
};

export default SaveButton;
