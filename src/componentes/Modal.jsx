import React from "react";

export default function Modal({ photo, onClose }) {
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg overflow-hidden max-w-3xl mx-4"
            >
                <div className="flex justify-end p-2">
                    <button onClick={onClose} className="px-3 py-1 text-sm text-gray-600">
                        ✕ Cerrar
                    </button>
                </div>
                <img
                    src={photo.src.large}
                    alt={photo.alt}
                    className="max-h-[80vh] w-full object-contain"
                />
                <p className="p-3 text-sm text-gray-500 text-center">
                    {photo.photographer ? `Autor: ${photo.photographer}` : ""}
                </p>
            </div>
        </div>
    );
}
