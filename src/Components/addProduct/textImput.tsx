import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    title: string;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
    ({ title, type, ...rest }, ref) => {
        return (
            <div className="flex flex-col gap-1 w-full">
                <label className="text-sm font-medium text-gray-700">{title}</label>
                <input
                    ref={ref}
                    type={type}
                    {...rest}
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        );
    }
);

// 🔹 Soluciona el warning de ESLint
TextInput.displayName = "TextInput";

export default TextInput;
