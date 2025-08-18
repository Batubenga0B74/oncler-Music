// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Header from "../components/header";

// interface DeezerAlbum {
//   id: number;
//   title: string;
//   cover: string;
//   artist: {
//     id: number;
//     name: string;
//   };
// }

// export default function AlbumsPage() {
//   const [query, setQuery] = useState("");
//   const [albums, setAlbums] = useState<DeezerAlbum[]>([]);
//   const [loading, setLoading] = useState(false);

//   async function handleSearch(e: React.FormEvent) {
//     e.preventDefault();
//     if (!query.trim()) return;

//     setLoading(true);
//     try {
//       const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
//       const data = await res.json();
//       setAlbums(data.data || []);
//     } catch (err) {
//       console.error("Erro ao buscar álbuns:", err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="bg-[#121212] min-h-screen">
//       {/* Header */}
//       <Header />

//       {/* Hero Section */}
//       <section className="flex flex-col lg:flex-row justify-center items-center gap-14 py-5 px-4">
//         <div className="flex flex-col lg:flex-row justify-center gap-5 bg-[#1E1E1E] w-full lg:w-auto rounded-2xl overflow-hidden">
//           <section className="bg-[url('/music.png')] bg-cover w-full sm:w-[500px] lg:w-[800px] h-[200px] sm:h-[250px] lg:h-[322px]"></section>

//           <span className="flex text-white text-center justify-center flex-col gap-3 px-6 sm:px-12 lg:px-28">
//             <h1 className="w-full lg:w-[470px] font-semibold tracking-normal leading-[100%] text-lg sm:text-xl lg:text-2xl">
//               The music platform{" "}
//               <span className="text-[#53AA00]">empowering artists</span>
//             </h1>

//             <section className="text-center justify-center flex">
//               <p className="max-w-[352px] font-semibold leading-[23px] text-center tracking-normal text-[#A49797]">
//                 monic is an Artist-first music platform that helps{" "}
//                 <span className="text-white">artists grow</span>
//               </p>
//             </section>

//             <div className="py-2">
//               <button className="w-full sm:w-[213px] h-[44px] font-semibold text-[14px] rounded-3xl p-[10px] bg-[#53AA00]">
//                 Upload your music for free
//               </button>
//             </div>
//           </span>
//         </div>
//       </section>

//       {/* Input de pesquisa */}
//       <form
//         onSubmit={handleSearch}
//         className="flex gap-2 mb-6 max-w-xl mx-auto px-4"
//       >
//         <input
//           type="text"
//           placeholder="Pesquisar artista..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="border px-3 py-2 rounded-lg flex-1 bg-[#1E1E1E] text-white placeholder-gray-400"
//         />
//         <button
//           type="submit"
//           className="bg-[#53AA00] text-white px-4 py-2 rounded-lg"
//         >
//           Buscar
//         </button>
//       </form>

//       {/* Loading */}
//       {loading && <p className="text-center text-gray-400">Carregando...</p>}

//       {/* Lista de álbuns */}
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">
//         {albums.map((album) => (
//           <div
//             key={album.id}
//             className="rounded-2xl shadow-md bg-[#1E1E1E] hover:shadow-lg transition p-3 text-white"
//           >
//             <Image
//               src={album.cover}
//               alt={album.title}
//               width={300}
//               height={300}
//               className="rounded-xl"
//             />
//             <h2 className="mt-2 font-bold text-lg truncate">{album.title}</h2>
//             <p className="text-gray-400 text-sm truncate">{album.artist.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* Nenhum resultado */}
//       {!loading && albums.length === 0 && (
//         <p className="text-center text-gray-500 mt-6">
//           Nenhum álbum encontrado.
//         </p>
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Header from "../components/header";
import AlbumCard from "../components/albumcard";

interface DeezerAlbum {
  id: number;
  title: string;
  cover: string;
  artist: {
    id: number;
    name: string;
  };
}

export default function SearchPage() {
  const [albums, setAlbums] = useState<DeezerAlbum[]>([]);
  const [loading, setLoading] = useState(false);

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

      {!loading && albums.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          Nenhum álbum encontrado.
        </p>
      )}
    </div>
  );
}

