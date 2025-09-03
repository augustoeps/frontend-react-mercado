import ItemList from "../Components/dashboard/sidebar/itemList.tsx"
import Header from "../Components/dashboard/header/header.tsx"

import ProductForm from "../Components/addProduct/productForm.tsx";




const Producto = () => {


    return (
        <div className="h-screen flex flex-col">
            <Header titulo={"Añade tus productos en esta sección"}/>

            <div className="flex items-start">
                <aside>
                    <ItemList />
                </aside>

                <main className="flex-1 flex justify-center">
                    <ProductForm />
                </main>
            </div>





        </div>

    )
}


export default Producto;