// src/services/authService.ts
const API_URL = "http://127.0.0.1:8000/api";

export const registerUser = async (name: string, email: string, password: string) => {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw data.message || "Error al registrar usuario";
    }

    return data; // devuelve user y token
};


export const loginUser = async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw data.message || "Error al iniciar sesión";
    }

    return data; // devuelve user y token
};