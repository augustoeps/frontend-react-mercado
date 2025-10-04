import type {Product} from "../Models/Product.ts"

//Esta funcion llama al backend para mostrar todos los productos

export const fetchProducts = async(): Promise<Product[]> =>{

    try {

        const response = await fetch("http://127.0.0.1:8000/api/products");
        if(!response.ok){
            throw new Error("Error al obtener productos")
        }
        const data : Product[] = await response.json();
        localStorage.setItem("last_activity", new Date().toISOString()); // actualizar
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

// esta funcion crea un nuevo producto en el mercado
export const createProduct = async (data: ProductInput) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        localStorage.setItem("last_activity", new Date().toISOString()); // actualizar
        if (!response.ok) {
            throw new Error("Error al crear producto");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en createProduct:", error);
        throw error;
    }
};


//esta funcion actualiza el valor del stock

export const updateProductStock = async (id: number, newStock: number) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
            method: "PATCH", // o PUT según tu API
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ stock: newStock }),
        });
        localStorage.setItem("last_activity", new Date().toISOString()); // actualizar
        if (!response.ok) {
            throw new Error("Error al actualizar stock");
        }

        const data = await response.json();
        console.log("Stock actualizado:", data);
        return data;
    } catch (error) {
        console.error("Error en updateProductStock:", error);
        throw error;
    }

};

export const deleteProduct = async (id: number) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        localStorage.setItem("last_activity", new Date().toISOString()); // actualizar
        if (!response.ok) {
            throw new Error("Error al eliminar el producto");
        }

        return await response.json(); // opcional, depende de si tu backend devuelve algo
    } catch (error) {
        console.error("Error en deleteProduct:", error);
        throw error;
    }
};

