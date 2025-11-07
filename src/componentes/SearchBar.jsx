import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const term = value.trim();
        if (term) {
            onSearch(term);
            setValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Buscar (ej. gatos, autos, iglesias)..."
                className="flex-1 p-2 border rounded-md shadow-sm focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Buscar</button>
        </form>
    );
}
