// Este é o seu arquivo 'Home' principal
"use client";

import dynamic from "next/dynamic";
import Loader from "../components/ui/Loader";

// Usando dynamic import para o componente que usa o Canvas
const Experience = dynamic(() => import("../components/canvas/Experience"), {
  ssr: false, // Canvas não deve ser renderizado no servidor
  loading: () => <Loader />,
});

export default function Home() {
  return (
    // AQUI ESTÁ A SEGUNDA MUDANÇA CRÍTICA:
    // - `h-screen`: Garante que o container principal tenha EXATAMENTE a altura da tela.
    //   Não use `min-h-screen`, pois isso permite que ele cresça e cause scroll.
    <main className="w-full h-screen bg-black">
      <Experience />
    </main>
  );
}
