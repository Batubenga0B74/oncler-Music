"use client";

import Image from "next/image";
import { DeezerTrack } from "../types/deezer";
import { useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause } from "lucide-react";

// props para o componente Card
interface CardProps {
  tracks?: DeezerTrack[];
}

export default function Card({ tracks = [] }: CardProps) {
  if (!tracks || tracks.length === 0) {
    return <p className="text-white">Nenhuma música encontrada.</p>;
  }

  return (
    <ul className="flex gap-5 overflow-x-auto hide-scrollbar">
      {tracks.map((track) => (
        <TrackItem key={track.id} track={track} />
      ))}
    </ul>
  );
}

// componente de cada música
function TrackItem({ track }: { track: DeezerTrack }) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const ws = wavesurferRef.current;

    if (!ws && waveformRef.current) {
      const newWs = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#999",
        progressColor: "#fff",
        cursorColor: "#fff",
        height: 50,
        barWidth: 2,
        backend: "MediaElement", // usa HTMLAudioElement por baixo
      });

      // carrega a URL do preview direto
      newWs.load(track.preview);

      newWs.on("ready", () => {
        newWs.play();
        setIsPlaying(true);
      });

      newWs.on("finish", () => setIsPlaying(false));

      wavesurferRef.current = newWs;
    } else if (ws) {
      ws.playPause();
      setIsPlaying(ws.isPlaying());
    }
  };

  return (
    <li className="min-w-[187px] flex flex-col items-center">
      <div className="relative group">
        <Image
          src={track.album.cover}
          alt={track.title}
          width={187}
          height={187}
          className="rounded-md"
        />

        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40 rounded-md"
        >
          {isPlaying ? (
            <Pause className="text-white w-10 h-10" />
          ) : (
            <Play className="text-white w-10 h-10" />
          )}
        </button>
      </div>

      <div ref={waveformRef} className="w-full mt-2" />

      <h3 className="text-white font-semibold mt-2 text-center truncate w-full">
        {track.title}
      </h3>
      <p className="text-gray-400 text-sm">{track.artist.name}</p>
    </li>
  );
}
