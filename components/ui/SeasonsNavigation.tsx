"use client";
import { motion } from "framer-motion";
import SeasonCard from "./SeasonCard";
import { seasonsData } from "@/data/seasons";

export default function SeasonsNavigation() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-white font-serif text-4xl md:text-6xl tracking-tighter">
          Select Your <span className="text-peaky-red">Chapter</span>
        </h2>
        <p className="text-gray-500 uppercase tracking-widest text-xs mt-4">
          By Order of the Peaky Blinders
        </p>
      </motion.div>

      {/* Container dos Cards - Flex centralizado */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-8 w-full max-w-[90vw] overflow-x-auto no-scrollbar py-10 px-4 perspective-1000">
        {seasonsData.map((season:any) => (
          <SeasonCard
            key={season.id}
            data={season}
            onClick={handleScrollToSection}
          />
        ))}
      </div>

      <div className="mt-10 animate-bounce text-peaky-red">
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
