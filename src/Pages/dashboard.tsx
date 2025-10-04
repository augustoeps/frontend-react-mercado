import ItemList from "../Components/dashboard/sidebar/itemList.tsx"
import Header from "../Components/dashboard/header/header.tsx"
import ProductList from "../Components/dashboard/productList/productList.tsx";
import {useUser} from "../Context/UserContext.tsx";

const Dashboard = () => {
    const { user } = useUser();


    return (
        <div className="h-screen flex flex-col">
         <Header titulo={user?.name} boton2={"Cerrar sesion"}/>

            <div className={"flex items-start"}>

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