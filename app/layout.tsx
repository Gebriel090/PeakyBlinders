import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peaky Blinders | By Order of the Peaky Blinders",
  description: "Immersive experience into the world of Thomas Shelby.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full w-full">
      {/* 
        A MUDANÇA CRÍTICA ESTÁ AQUI:
        - `h-full w-full`: Garante que o body preencha 100% do html.
        - `overflow-hidden`: Proíbe QUALQUER barra de rolagem, vertical ou horizontal.
      */}
      <body
        className={`${playfair.variable} ${lato.variable} h-full w-full bg-black text-white antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
