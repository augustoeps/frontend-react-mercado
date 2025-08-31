import type {Product} from "../Models/Product.ts"

export const fetchProducts = async(): Promise<Product[]> =>{

    try {

        const response = await fetch("http://127.0.0.1:8000/api/products");
        if(!response.ok){
            throw new Error("Error al obtener productos")
        }
        const data : Product[] = await response.json();

        return data

    }catch(error){
        console.log(error)
        return []
    }



}