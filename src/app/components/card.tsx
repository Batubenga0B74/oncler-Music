"use client"; 
// Indica que esse arquivo é um componente Client-side do Next.js.
// Necessário para usar hooks como useState, useRef, useEffect.

import Image from "next/image"; 
// Componente otimizado do Next.js para imagens.

import { DeezerTrack } from "../lib/deezer"; 
// Tipo TypeScript que define a estrutura de uma track vinda da API Deezer.

import { useRef, useState } from "react"; 
// useRef: cria referências a elementos DOM ou valores persistentes.
// useState: cria estados reativos no componente.

import WaveSurfer from "wavesurfer.js"; 
// Biblioteca para criar e controlar waveforms de áudio.

import { Play, Pause } from "lucide-react"; 
// Ícones de play e pause para o botão de controle.

interface CardProps {
  tracks?: DeezerTrack[]; 
  // Recebe um array de músicas da Deezer, opcional.
}

// Componente principal que recebe uma lista de tracks e exibe os cards.
export default function Card({ tracks = [] }: CardProps) {
  // Se não houver músicas, exibe mensagem
  if (!tracks || tracks.length === 0) {
    return <p className="text-white">Nenhuma música encontrada.</p>;
  }

  return (
    // Lista horizontal de tracks com overflow scroll
    <ul className="flex gap-5 overflow-x-auto hide-scrollbar">
      {tracks.map((track) => (
        // Para cada track, renderiza o componente TrackItem
        <TrackItem key={track.id} track={track} />
      ))}
    </ul>
  );
}

// Componente que representa cada track individual
function TrackItem({ track }: { track: DeezerTrack }) {
  const waveformRef = useRef<HTMLDivElement>(null); 
  // Referência para o container onde o waveform do WaveSurfer será renderizado

  const wavesurferRef = useRef<WaveSurfer | null>(null); 
  // Referência para o objeto WaveSurfer, para controlar play/pause

  const [isPlaying, setIsPlaying] = useState(false); 
  // Estado para controlar se a música está tocando ou não

  // Função chamada quando o usuário clica no botão de play/pause
  const handlePlay = () => {
    const ws = wavesurferRef.current;

    // Se WaveSurfer ainda não foi criado, cria no primeiro clique
    if (!ws && waveformRef.current) {
      const newWs = WaveSurfer.create({
        container: waveformRef.current, // onde o waveform será desenhado
        waveColor: "#999",             // cor da onda
        progressColor: "#fff",         // cor da parte já reproduzida
        cursorColor: "#fff",           // cor do cursor de reprodução
        height: 50,                    // altura do waveform
        barWidth: 2,                   // largura das barras
        // responsive removido para TS não reclamar
      });

      // Carrega a música do preview da track
      newWs.load(track.preview);

      // Quando o áudio estiver pronto, toca automaticamente
      newWs.on("ready", () => {
        newWs.play();
        setIsPlaying(true); // atualiza estado para mostrar ícone de pause
      });

      // Quando a música terminar, atualiza estado para mostrar ícone de play
      newWs.on("finish", () => setIsPlaying(false));

      wavesurferRef.current = newWs; // salva referência para controlar depois
    } 
    // Se WaveSurfer já existe, apenas alterna play/pause
    else if (ws) {
      ws.playPause();
      setIsPlaying(ws.isPlaying());
    }
  };

  return (
    <li className="min-w-[187px] flex flex-col items-center">
      <div className="relative group">
        {/* Capa do álbum */}
        <Image
          src={track.album.cover}
          alt={track.title}
          width={187}
          height={187}
          className="rounded-md"
        />

        {/* Botão de play/pause sobreposto na imagem */}
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

      {/* Container do waveform que o WaveSurfer vai desenhar */}
      <div ref={waveformRef} className="w-full mt-2" />

      {/* Nome da música */}
      <h3 className="text-white font-semibold mt-2 text-center truncate w-full">
        {track.title}
      </h3>

      {/* Nome do artista */}
      <p className="text-gray-400 text-sm">{track.artist.name}</p>
    </li>
  );
}
