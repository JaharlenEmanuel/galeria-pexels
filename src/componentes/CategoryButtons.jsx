import React from "react";

export default function CategoryButtons({ categories = [], onSelect }) {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelect(cat)}
                    className="px-3 py-1 rounded-full border bg-white hover:bg-blue-50 text-sm"
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
