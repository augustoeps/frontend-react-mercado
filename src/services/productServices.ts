import type {Product} from "../Models/Product.ts"

//Esta funcion llama al backend para mostrar todos los productos

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

// esta funcion envia los productos nuevos agregados en  el front al back

const API_URL = "http://127.0.0.1:8000/api/products";

export interface ProductInput {
    name: string;
    price: number;
    stock: number;
    image: string;
    description?: string;
    category?: string;
}

export const createProduct = async (data: ProductInput) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Error al crear producto");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en createProduct:", error);
        throw error;
    }
};
