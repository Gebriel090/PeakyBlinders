"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Preload } from "@react-three/drei";
import { Suspense } from "react";
import HeroScene from "./HeroScene";
import PostProcessing from "./PostProcessing";
import HeroOverlay from "../ui/HeroOverlay";
import SeasonsNavigation from "../ui/SeasonsNavigation";
import SeasonContent from "../ui/SeasonContent";
import BackgroundSound from "../ui/BackgroundSound";

export default function Experience() {
  return (
    // TERCEIRA MUDANÇA CRÍTICA:
    // - Trocamos o `style` por `className`.
    // - `h-full` faz este div herdar a altura do <main> (que é h-screen).
    //   Isso é mais robusto que usar 100vh novamente.
    <div className="w-full h-full bg-black">
      <BackgroundSound />

      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ antialias: false }}
      >
        <color attach="background" args={["#000000"]} />

        <ScrollControls pages={7} damping={0.3}>
          <Suspense fallback={null}>
            <HeroScene />
            <Preload all />
          </Suspense>

          <PostProcessing />

          <Scroll html style={{ width: "100%" }}>
            <HeroOverlay />
            <div className="h-[120vh] w-full bg-transparent" />
            <div className="relative z-10 bg-gradient-to-b from-transparent via-black to-black min-h-screen flex items-center">
              <SeasonsNavigation />
            </div>
            <SeasonContent />
            <footer className="w-full py-24 text-center bg-black border-t border-red-900/20">
              <p className="text-red-800 text-[10px] font-serif tracking-[0.5em] uppercase mb-4 opacity-50">
                Por Ordem dos Peaky Blinders
              </p>
            </footer>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
