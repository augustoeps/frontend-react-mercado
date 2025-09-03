import { useForm } from "react-hook-form";
import TextInput from "./textImput.tsx"
import CategoryDropdown from "./categoryProduct.tsx";
import SaveButton from "./submitButton.tsx";
import { createProduct } from "../../services/productServices.ts";
import {useNavigate } from "react-router-dom";

interface ProductFormInputs {
    name: string;
    price: number;
    stock: number;
    image: string;
    description: string;
    category: string;
}

const ProductForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormInputs>();

    const navigate = useNavigate(); // 👈 inicializamos

    const onSubmit = async (data: ProductFormInputs) => {

            console.log("Datos del formulario:", data);

            try {
                const response = await createProduct(data); // 👈 manda al backend
                console.log("Respuesta del backend:", response);

                navigate("/");

            } catch (error) {
                console.error("Error al enviar producto:", error);
            }


    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-200 bg-white shadow-md rounded-lg p-6 space-y-3 mt-5"
        >
            <h2 className="text-xl font-semibold text-gray-800 flex justify-center">
                Añadir nuevo producto
            </h2>

            {/* Nombre */}
            <TextInput
                title="Nombre del producto"
                type="text"
                {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            {/* Precio */}
            <TextInput
                title="Precio"
                type="number"
                step="0.01"
                {...register("price", { required: "El precio es obligatorio" })}
            />
            {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}

            {/* Stock */}
            <TextInput
                title="Cantidad en stock"
                type="number"
                {...register("stock", { required: "El stock es obligatorio" })}
            />
            {errors.stock && (
                <p className="text-red-500 text-sm">{errors.stock.message}</p>
            )}

            <TextInput
                title="Url de la imagen del producto"
                type="text"
                {...register("image", { required: "La imagen es obligatorio" })}
            />
            {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}

            {/* Descripción */}
            <TextInput
                title="Descripción"
                type="text"
                {...register("description",)}
            />


            {/* Categoría */}
            <CategoryDropdown
                {...register("category",)}
            />

            {/* Botón Guardar */}
            <div className={"flex justify-center"}>
            <SaveButton title="Guardar Producto" />
            </div>
        </form>

    );
};

export default ProductForm;
