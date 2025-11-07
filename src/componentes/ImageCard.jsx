import React from "react";

export default function ImageCard({ photo, onOpen }) {
    return (
        <button
            onClick={onOpen}
            className="block rounded overflow-hidden shadow-sm hover:shadow-md transition"
        >
            <img
                src={photo.src.medium}
                alt={photo.alt || "Foto de Pexels"}
                className="w-full h-48 object-cover"
                loading="lazy"
            />
        </button>
    );
}
