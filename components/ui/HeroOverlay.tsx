"use client";
import { motion } from "framer-motion";

export default function HeroOverlay() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative z-10 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center mix-blend-overlay" // Faz o texto interagir com a imagem
      >
        <h2 className="text-red-600 text-lg tracking-[0.5em] font-sans uppercase mb-4 drop-shadow-md">
          A Netflix Original
        </h2>
        <h1 className="text-6xl md:text-9xl font-serif text-white uppercase tracking-tighter drop-shadow-2xl opacity-90">
          Peaky <br /> Blinders
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-20 pointer-events-auto cursor-pointer"
      >
        <button className="px-10 py-4 border border-red-700 bg-red-900/20 backdrop-blur-sm text-white font-serif tracking-widest uppercase transition-all duration-300 hover:bg-red-700 hover:text-white shadow-[0_0_20px_rgba(185,28,28,0.5)]">
          Watch The Finale
        </button>
      </motion.div>
    </section>
  );
}
