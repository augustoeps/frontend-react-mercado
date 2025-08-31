import { useState, useEffect } from "react";
import ProductCard from "./product.tsx";
import type { Product } from "../../../Models/Product";
import {fetchProducts} from "../../../services/productServices.ts";




const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then(setProducts)
    }, []);



    return(
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}


        </div>
    )

}
export default ProductList
