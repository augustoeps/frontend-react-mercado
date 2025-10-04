// src/Components/Routes/PrivateRoutes.tsx
import {useEffect, useState } from "react";
import type {ReactNode} from "react";
import { Navigate } from "react-router-dom";

interface PrivateRoutesProps {
    children: ReactNode;
    inactivityMinutes?: number; // tiempo máximo de inactividad
}

const PrivateRoutes = ({ children, inactivityMinutes = 1 }: PrivateRoutesProps) => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    const checkAuth = () => {
        const token = localStorage.getItem("auth_token");
        if (!token) {
            setIsAuth(false);
            return;
        }

        const lastActivityStr = localStorage.getItem("last_activity");
        if (lastActivityStr) {
            const lastActivity = new Date(lastActivityStr);
            const now = new Date();
            const diff = (now.getTime() - lastActivity.getTime()) / 1000 / 60; // minutos

            if (diff > inactivityMinutes) {
                // sesión expirada
                localStorage.removeItem("auth_token");
                localStorage.removeItem("last_activity");
                setIsAuth(false);
                return;
            }
        }

        // actualizar última actividad
        localStorage.setItem("last_activity", new Date().toISOString());
        setIsAuth(true);
    };

    useEffect(() => {
        checkAuth();

        // actualizar última actividad al interactuar
        const updateActivity = () => localStorage.setItem("last_activity", new Date().toISOString());
        window.addEventListener("click", updateActivity);
        window.addEventListener("keydown", updateActivity);

        return () => {
            window.removeEventListener("click", updateActivity);
            window.removeEventListener("keydown", updateActivity);
        };
    }, []);

    if (isAuth === null) return null; // opcional: mostrar loading

    if (!isAuth) return <Navigate to="/login" replace />;

    return <>{children}</>;
};

export default PrivateRoutes;
