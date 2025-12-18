import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Vamos cobrir todas as possibilidades de estrutura de pastas
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-lato)", "sans-serif"],
      },
      colors: {
        peaky: {
          red: "#b91c1c",
          black: "#050505",
          gray: "#1a1a1a",
          gold: "#d4af37",
        },
      },
    },
  },
  plugins: [],
};
export default config;
