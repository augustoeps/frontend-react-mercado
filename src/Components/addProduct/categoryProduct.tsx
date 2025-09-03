import React, { forwardRef } from "react";

const categories = ["Bebidas", "Comida", "Mascota", "Limpieza", "Higiene"];

const CategoryDropdown = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
    (props, ref) => {
        return (
            <div className="flex flex-col gap-1 w-60">
                <label className="text-sm font-medium text-gray-700">Categoría</label>
                <select
                    ref={ref}
                    {...props} // incluye value y onChange de react-hook-form
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="">Selecciona una categoría</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
);

CategoryDropdown.displayName = "CategoryDropdown";

export default CategoryDropdown;
