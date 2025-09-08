


interface Props{

    isOpen: boolean;
    onConfirm: () => void;
    onClose: () => void;
    message:string;
}


const ConfirmModal = ({isOpen, onConfirm, onClose, message}: Props) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50  backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                {/* Contenido del modal */}
                <p className="text-gray-800 font-medium mb-4">
                    {message}
                </p>
                <div className="flex justify-end gap-3">
                    <button
                        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
                        onClick={onConfirm}
                    >
                        Borrar
                    </button>
                </div>
            </div>
        </div>


    );

}

export default ConfirmModal;