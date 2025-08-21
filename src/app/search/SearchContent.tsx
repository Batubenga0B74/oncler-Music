"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/header";
import AlbumCard from "../components/albumcard";
import { DeezerAlbum } from "../types/deezer";

export default function SearchContent() {
  const [albums, setAlbums] = useState<DeezerAlbum[]>([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  async function handleSearch(query: string) {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setAlbums(data.data || []);
    } catch (err) {
      console.error("Erro ao buscar álbuns:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  return (
    <div className="p-6 bg-[#121212] min-h-screen">
      <Header onSearch={handleSearch} />

      {loading && <p className="text-center text-gray-400">Carregando...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            id={album.id}
            title={album.title}
            cover={album.cover}
            artist={album.artist}
          />
        ))}
      </div>

      {!loading && albums.length === 0 && query && (
        <p className="text-center text-gray-500 mt-6">
          Nenhum álbum encontrado para{" "}
          <span className="text-white">{query}</span>.
        </p>
      )}
    </div>
  );
}
