"use client";
import Image from "next/image";

interface AlbumCardProps {
  id: number;
  title: string;
  cover: string;
  artist: {
    id: number;
    name: string;
  };
}

export default function AlbumCard({ id, title, cover, artist }: AlbumCardProps) {
  return (
    <div
      key={id}
      className="rounded-2xl shadow-md bg-[#1E1E1E] hover:shadow-lg transition p-3 text-white"
    >
      <Image
        src={cover}
        alt={title}
        width={200}
        height={200}
        className="rounded-xl"
      />
      <h2 className="mt-2 font-bold text-lg truncate">{title}</h2>
      <p className="text-gray-400 text-sm truncate">{artist.name}</p>
    </div>
  );
}
