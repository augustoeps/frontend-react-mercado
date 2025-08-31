import ItemList from "../Components/dashboard/sidebar/itemList.tsx"
import Header from "../Components/dashboard/header/header.tsx"
import ProductList from "../Components/dashboard/productList/productList.tsx";

const Dashboard = () => {


    return (
        <div className="h-screen flex flex-col">
         <Header boton={"Crear compra"} boton2={"Ver Compras"}/>

            <div className={"flex items-start "}>

                <aside>
                    <ItemList/>
                </aside>
                <main>
                    <ProductList />
                </main>

            </div>





         </div>

    )
}

export  default Dashboard