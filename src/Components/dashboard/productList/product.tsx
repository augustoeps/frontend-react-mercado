import type {Product} from "../../../Models/Product.ts";

interface ProductProps{

    product:Product
}


const ProductCard = ({ product }: ProductProps) => {
    return (
        <div className="bg-transparent shadow-md rounded-xl p-4 w-64 flex flex-col gap-2">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-md font-bold text-green-600">${product.price}</p>
            <p className={`text-sm ${product.stock > 0 ? "text-gray-600" : "text-red-500"}`}>
                {product.stock > 0 ? `Stock: ${product.stock}` : "Agotado"}
            </p>

        </div>
    );
};

export default ProductCard;