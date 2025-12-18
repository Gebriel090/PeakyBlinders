// src/components/BackgroundSound.tsx
"use client";

import React, { useEffect, useState, type ComponentType } from "react";

export default function BackgroundSound() {
  const [playing, setPlaying] = useState(false);
  const [ReactPlayer, setReactPlayer] = useState<ComponentType<any> | null>(
    null
  );

  useEffect(() => {
    let mounted = true;

    // Importa o módulo 'react-player' dinamicamente no client
    import("react-player")
      .then((mod) => {
        if (!mounted) return;
        // O componente normalmente é export default, então usamos mod.default
        // usamos uma factory para preservar o componente como React component
        const Player = (mod.default ?? mod) as ComponentType<any>;
        setReactPlayer(() => Player);
        // começa tocando após o player estar pronto
        setPlaying(true);
      })
      .catch((err) => {
        // Loga o erro para te ajudar a debugar caso algo dê errado
        // (por exemplo: problemas com CSP, bloqueio de rede, etc)
        console.error("Erro ao carregar react-player:", err);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Enquanto o player não estiver carregado, não renderizamos (evita hydration issues)
  if (!ReactPlayer) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 opacity-50 hover:opacity-100 transition-opacity">
      <div className="hidden">
        <ReactPlayer
          url="https://youtu.be/KGD2N5hJ2e0?list=RDKGD2N5hJ2e0"
          playing={playing}
          loop={true}
          volume={1}
          width="0"
          height="0"
          controls={false}
          config={{
            youtube: {
              playerVars: { showinfo: 0, controls: 0, disablekb: 1 },
            },
          }}
        />
      </div>

      <button
        onClick={() => setPlaying((s) => !s)}
        className="w-10 h-10 rounded-full border border-red-900/50 bg-black/80 text-red-600 flex items-center justify-center backdrop-blur-md hover:bg-red-900/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(185,28,28,0.3)]"
        aria-label={playing ? "Pausar som" : "Tocar som"}
        type="button"
      >
        {playing ? (
          <svg
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-4 0h-2.5l-5 5h-5v7.5h5l5 5v-17.5z" />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51c.66-1.24 1.03-2.65 1.03-4.15 0-4.28-2.99-7.86-7-8.76v2.05c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        )}
      </button>
    </div>
  );
}
