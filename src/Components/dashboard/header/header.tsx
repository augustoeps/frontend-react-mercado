

interface HeaderProps{

    titulo?:string,
    boton?:string,
    boton2?:string
}

const Header: React.FC<HeaderProps> = ({ boton, boton2, titulo }) => {
    return (
        <header className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
            <h1 className="text-xl font-bold text-gray-800">Soap Market</h1>
            {titulo && <h2 className={"font-bold"}>{titulo}</h2>}
            <div className="flex gap-2">
                {boton &&<button  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    {boton}
                </button>}
                {boton2 && <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                    {boton2}
                </button>}
            </div>
        </header>
    );
};


export default Header