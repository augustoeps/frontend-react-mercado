import type {Product} from "../../../Models/Product.ts";
import {useState} from "react";
import ConfirmModal from "../../modals/confirmModal.tsx";
import {useUser} from "../../../Context/UserContext.tsx";

interface ProductProps {

    product: Product
    onUpdateStock: (id: number, newStock: number) => void;
    onDeleteStock: (id: number) => void;
}

const ProductCard = ({ product, onUpdateStock, onDeleteStock }: ProductProps) => {
    const [stockInput, setStockInput] = useState<string>(String(product.stock));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, setUser } = useUser();

    // obtener rol del usuario
    //const role = localStorage.getItem("role"); // "admin" o "cliente"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStockInput(e.target.value);
    };

    const handleDeleteButton = () => setIsModalOpen(true);

    const handleConfirmDelete = () => {
        onDeleteStock(product.id);
        setIsModalOpen(false);
    };

    const handleCancelDelete = () => setIsModalOpen(false);

    const handleBlur = async () => {
        const newStock = isNaN(parseInt(stockInput, 10)) ? 0 : parseInt(stockInput, 10);
        await onUpdateStock(product.id, newStock);
    };

    return (
        <div className="bg-transparent shadow-md rounded-xl p-4 w-64 flex flex-col gap-2">

            {/* Mostrar botón X solo si es admin */}
            {user?.role === "admin" && (
                <button
                    onClick={handleDeleteButton}
                    className="flex justify-end text-red-500 hover:text-red-700 font-bold text-lg"
                >
                    X
                </button>
            )}

            <ConfirmModal
                isOpen={isModalOpen}
                message="¿Estás seguro que deseas borrar el producto?"
                onConfirm={handleConfirmDelete}
                onClose={handleCancelDelete}
            />

            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-md font-bold text-green-600">${product.price}</p>

            {/* Condicional: Stock editable para admin, botón añadir al carrito para cliente */}
            {user?.role === "admin" ? (
                <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Stock:</label>
                    <input
                        type="number"
                        className={`text-sm border rounded px-2 py-1 w-20 ${
                            Number(stockInput) > 0 ? "text-gray-600" : "text-red-500"
                        }`}
                        value={stockInput}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            ) : (
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Añadir al carrito
                </button>
            )}
        </div>
    );
};
 export default ProductCard;