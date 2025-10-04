import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Producto from "./Pages/product";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivateRoutes from "../src/Components/Routes/PrivateRoutes.tsx";

function App() {
    return (
        <Router>
            <Routes>
                {/* Rutas públicas */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Ruta privada */}
                <Route
                    path="/"
                    element={
                        <PrivateRoutes>
                            <Dashboard />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/products"
                    element={
                        <PrivateRoutes>
                            <Producto />
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
