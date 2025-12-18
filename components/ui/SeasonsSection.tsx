"use client";
import { motion } from "framer-motion";

const episodes = [
  {
    id: 1,
    title: "Episode 1",
    desc: "Thomas Shelby prepares to fix a horse race.",
    img: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkWc7Wx.jpg",
  },
  {
    id: 2,
    title: "Episode 2",
    desc: "Peaky Blinders start a war with the Lees.",
    img: "https://image.tmdb.org/t/p/w500/2jX1414vD2R8f8Xy60z6484.jpg",
  },
  {
    id: 3,
    title: "Episode 3",
    desc: "Thomas travels to Cheltenham races.",
    img: "https://image.tmdb.org/t/p/w500/9G1R4x7067888.jpg",
  }, // Url ficticia para exemplo
  {
    id: 4,
    title: "Episode 4",
    desc: "The war with the Lees escalates.",
    img: "https://image.tmdb.org/t/p/w500/e90.jpg",
  },
];

export default function SeasonsSection() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center px-4 md:px-20 py-20">
      {/* Header da Seção */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 border-l-4 border-peaky-red pl-6"
      >
        <h3 className="text-peaky-red uppercase tracking-widest text-sm font-bold mb-2">
          The Story Continues
        </h3>
        <h2 className="text-4xl md:text-6xl font-serif text-white">Season 1</h2>
        <div className="flex gap-4 mt-4 text-gray-400 text-sm font-sans uppercase tracking-wider">
          <span>2013</span>
          <span>•</span>
          <span>6 Episodes</span>
          <span>•</span>
          <span className="border border-gray-600 px-2 rounded text-xs py-0.5">
            18+
          </span>
        </div>
      </motion.div>

      {/* Carrossel de Episódios */}
      <div className="relative w-full overflow-x-auto no-scrollbar pb-10">
        <div className="flex gap-6 w-max">
          {episodes.map((ep, index) => (
            <motion.div
              key={ep.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative w-[300px] group cursor-pointer"
            >
              {/* Thumbnail Placeholder (Fundo cinza se a img falhar) */}
              <div className="aspect-video w-full bg-gray-800 rounded-sm overflow-hidden border border-gray-800 group-hover:border-peaky-red transition-colors relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-peaky-red rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <h4 className="text-white font-serif text-lg group-hover:text-peaky-red transition-colors">
                  {ep.id}. {ep.title}
                </h4>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                  {ep.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
