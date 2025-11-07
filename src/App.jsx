import React, { useEffect, useState } from "react";
import SearchBar from "./componentes/SearchBar";
import CategoryButtons from "./componentes/CategoryButtons";
import Galeria from "./componentes/Galeria";
import Modal from "./componentes/Modal";

const CATEGORIES = ["Mountain", "Beaches", "Birds", "Food"];

export default function App() {
  const [query, setQuery] = useState("Mountain");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchPhotos(query);
  }, [query]);

  async function fetchPhotos(searchTerm) {
    setLoading(true);
    const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

    try {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchTerm)}&per_page=24`,
        { headers: { Authorization: API_KEY } }
      );

      const data = await res.json();
      setPhotos(data.photos || []);
    } catch (err) {
      console.error("Error al obtener imágenes:", err);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex flex-col items-center justify-center py-4">
      <header className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-2">Galería de Fotos</h1>

        <SearchBar onSearch={(q) => setQuery(q)} />
        <CategoryButtons categories={CATEGORIES} onSelect={(c) => setQuery(c)} />
      </header>

      <main className="max-w-6xl mx-auto mt-6">
        {loading ? (
          <div className="flex justify-center items-center py-20 text-gray-500">
            Cargando imágenes...
          </div>
        ) : (
          <Galeria photos={photos} onOpen={(p) => setSelected(p)} />
        )}
      </main>

      {selected && <Modal photo={selected} onClose={() => setSelected(null)} />}

      <footer className="text-center text-sm text-gray-500 mt-8">
        Práctica React · Pexels API
      </footer>
    </div>
  );
}
