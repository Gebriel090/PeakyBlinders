"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface SeasonCardProps {
  data: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    isHighlight?: boolean;
  };
  onClick: (id: string) => void;
}

export default function SeasonCard({ data, onClick }: SeasonCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Suavização do movimento do mouse para o efeito tilt
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const xPos = (event.clientX - left) / width - 0.5;
    const yPos = (event.clientY - top) / height - 0.5;
    x.set(xPos);
    y.set(yPos);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  return (
    <motion.div
      style={{
        perspective: 1000,
        zIndex: data.isHighlight ? 20 : 10,
      }}
      className={`relative cursor-pointer group ${
        data.isHighlight ? "w-[300px] md:w-[380px]" : "w-[220px] md:w-[260px]"
      } flex-shrink-0`}
      onClick={() => onClick(data.id)}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        // Se for destaque (Filme), ele é maior. Se não, tem opacidade reduzida até o hover.
        className={`
          relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-out
          ${
            data.isHighlight
              ? "scale-100 shadow-red-900/50"
              : "scale-95 opacity-60 hover:opacity-100 hover:scale-100 grayscale hover:grayscale-0"
          }
        `}
      >
        {/* Imagem de Fundo */}
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Gradiente e Texto Sobreposto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

        <div
          className="absolute bottom-0 left-0 w-full p-6 text-center transform translate-z-20"
          style={{ transform: "translateZ(30px)" }} // Efeito 3D no texto
        >
          <h3
            className={`font-serif text-white uppercase tracking-tighter ${
              data.isHighlight ? "text-3xl text-peaky-red" : "text-xl"
            }`}
          >
            {data.title}
          </h3>
          <p className="text-gray-300 text-xs tracking-[0.2em] uppercase mt-1">
            {data.subtitle}
          </p>
        </div>

        {/* Borda brilhante no hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-peaky-red/50 rounded-xl transition-colors duration-300" />
      </motion.div>
    </motion.div>
  );
}
