"use client";

import Image from "next/image";
import { DeezerTrack } from "../types/deezer";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface CardProps {
  tracks?: DeezerTrack[];
}

export default function Card({ tracks = [] }: CardProps) {
  // guarda o id da música que está tocando
  const [playingId, setPlayingId] = useState<number | null>(null);

  if (!tracks || tracks.length === 0) {
    return <p className="text-white">Nenhuma música encontrada.</p>;
  }

  return (
    <ul className="flex gap-5 overflow-x-auto hide-scrollbar p-4">
      {tracks.map((track) => (
        <TrackItem
          key={track.id}
          track={track}
          isPlaying={playingId === track.id}
          onPlay={(id) => setPlayingId(id)}
          onPause={() => setPlayingId(null)}
        />
      ))}
    </ul>
  );
}

function TrackItem({
  track,
  isPlaying,
  onPlay,
  onPause,
}: {
  track: DeezerTrack;
  isPlaying: boolean;
  onPlay: (id: number) => void;
  onPause: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      onPause();
    } else {
      audioRef.current.play();
      onPlay(track.id);
    }
  };

  return (
    <li className="min-w-[187px] flex flex-col items-center">
      <div className="relative group">
        <Image
          src={track.album.cover} // capa do álbum
          alt={track.title}
          width={187}
          height={187}
          className="rounded-md"
        />

        {/* botão play/pause */}
        {track.preview && (
          <button
            onClick={handlePlayPause}
            className="absolute bottom-2 right-2 flex items-center justify-center bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
          >
            {isPlaying ? (
              <Pause className="text-white w-6 h-6" />
            ) : (
              <Play className="text-white w-6 h-6" />
            )}
          </button>
        )}
      </div>

      {/* título e artista */}
      <h3 className="text-white font-semibold mt-2 text-center truncate w-full">
        {track.title}
      </h3>
      <p className="text-gray-400 text-sm">{track.artist.name}</p>

      {/* player escondido */}
      {track.preview && (
        <audio
          ref={audioRef}
          src={track.preview}
          onEnded={() => onPause()}
        />
      )}
    </li>
  );
}
