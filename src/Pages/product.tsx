import ItemList from "../Components/dashboard/sidebar/itemList.tsx"
import Header from "../Components/dashboard/header/header.tsx"




const Producto = () => {


    return (
        <div className="h-screen flex flex-col">
            <Header titulo={"Añadir nuevo Producto"}/>

            <div className={"flex items-start "}>

                <aside>
                    <ItemList/>
                </aside>


            </div>





        </div>

    )
}


export default Producto;