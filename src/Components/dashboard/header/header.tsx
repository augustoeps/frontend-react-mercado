import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useUser} from "../../../Context/UserContext.tsx";

interface HeaderProps {
    titulo?: string;
    boton?: string;
    boton2?: string;
}

const Header: React.FC<HeaderProps> = ({ boton, boton2, titulo }) => {
    const navigate = useNavigate();

    // opcional si quieres controlar estado interno
    const [logout, setLogout] = useState(false);
    const { user } = useUser();

    function logoutEvent() {
        // borrar token y última actividad+

        localStorage.removeItem("auth_token");
        localStorage.removeItem("last_activity");

        setLogout(true); // si quieres usarlo para algo visual

        // redirigir al login
        navigate("/login", { replace: true });
    }

    return (
        <header className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
            <h1 className="text-xl font-bold text-gray-800">Soap Market</h1>
            {user && (
                <h2 className="font-bold">
                    Bienvenido, {titulo}
                </h2>
            )}
            <div className="flex gap-2">
                {boton && (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        {boton}
                    </button>
                )}
                {boton2 && (
                    <button
                        onClick={logoutEvent}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        {boton2}
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
