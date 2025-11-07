import React from "react";
import ImageCard from "./ImageCard.jsx";

export default function Galeria({ photos = [], onOpen }) {
    if (photos.length === 0)
        return <div className="text-center text-gray-500 py-10">No se encontraron resultados.</div>;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {photos.map((p) => (
                <ImageCard key={p.id} photo={p} onOpen={() => onOpen(p)} />
            ))}
        </div>
    );
}
