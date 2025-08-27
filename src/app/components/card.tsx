"use client";

import Image from "next/image";
import { DeezerTrack } from "../types/deezer";
import { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause } from "lucide-react";

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

function TrackItem({ track }: { track: DeezerTrack }) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (waveformRef.current && !wavesurferRef.current) {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#999",
        progressColor: "#fff",
        cursorColor: "#fff",
        height: 50,
        barWidth: 2,
      });

      ws.load(track.preview); // carrega o preview de 30s do Deezer

      ws.on("ready", () => {
        console.log(`Waveform pronto para: ${track.title}`);
      });

      ws.on("play", () => setIsPlaying(true));
      ws.on("pause", () => setIsPlaying(false));
      ws.on("finish", () => setIsPlaying(false));

      wavesurferRef.current = ws;
    }

    return () => {
      wavesurferRef.current?.destroy();
      wavesurferRef.current = null;
    };
  }, [track.preview, track.title]);

  const handlePlay = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
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

      {/* ondas do áudio */}
      <div ref={waveformRef} className="w-full mt-2" />

      <h3 className="text-white font-semibold mt-2 text-center truncate w-full">
        {track.title}
      </h3>
      <p className="text-gray-400 text-sm">{track.artist.name}</p>
    </li>
  );
}
