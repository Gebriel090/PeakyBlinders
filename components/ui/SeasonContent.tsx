"use client";
import { seasonsData } from "@/data/seasons";
import Image from "next/image";

export default function SeasonContent() {
  return (
    <div className="w-full bg-black relative z-20">
      {seasonsData.map((item:any, index:any) => (
        <section
          key={item.id}
          id={item.id}
          className="min-h-screen w-full flex flex-col md:flex-row items-center relative border-b border-white/5 py-20"
        >
          {/* Background blurred para ambiente */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src={item.image}
              alt="bg"
              fill
              className="object-cover opacity-10 blur-[100px] scale-150"
            />
          </div>

          {/* Imagem Grande (Esquerda ou Direita alternando) */}
          <div
            className={`w-full md:w-1/2 h-[50vh] md:h-screen relative flex items-center justify-center p-10 ${
              index % 2 === 1 ? "md:order-2" : ""
            }`}
          >
            <div className="relative w-full h-full max-h-[800px] max-w-[600px] overflow-hidden rounded-sm shadow-[0_0_50px_rgba(185,28,28,0.2)]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 p-10 md:p-20 z-10 flex flex-col justify-center">
            <span className="text-peaky-red tracking-[0.5em] text-sm uppercase mb-4 font-bold">
              {item.id === "movie" ? "Cinema Event" : "Netflix Series"}
            </span>
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-[0.9]">
              {item.title}
            </h2>
            <h3 className="text-2xl text-gray-400 font-serif italic mb-8">
              "{item.subtitle}"
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md border-l-2 border-peaky-red pl-6">
              {item.desc}
            </p>

            <button className="mt-10 px-8 py-3 bg-transparent border border-gray-600 text-white uppercase tracking-widest hover:bg-peaky-red hover:border-peaky-red transition-all w-max">
              Watch Trailer
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
