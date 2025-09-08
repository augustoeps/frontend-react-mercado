import { useState, useEffect } from "react";
import ProductCard from "./product.tsx";
import type { Product } from "../../../Models/Product";
import {deleteProduct, fetchProducts, updateProductStock} from "../../../services/productServices.ts";




const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then(setProducts)
    }, []);


    const handleUpdateStock = async (id: number, newStock: number) => {
        // Actualiza el estado local
        setProducts((prev) =>
            prev.map((p) => (p.id === id ? { ...p, stock: newStock } : p))
        );

        try {
            await updateProductStock(id, newStock);
        } catch (err) {
            console.error(err);
        }


    };

    const handleDeleteButton = async (id:number) => {

        console.log(id);

        try {
            await deleteProduct(id)
            setProducts(products.filter(p => p.id !== id));
        }catch (err){
            console.error(err);
        }


    }




    return(
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onUpdateStock={handleUpdateStock}
                    onDeleteStock={handleDeleteButton}
                />
            ))}


        </div>
    )

}
export default ProductList
