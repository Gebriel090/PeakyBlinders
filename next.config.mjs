/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ignora erros de tipagem no build (Salva vidas em deploy de emergência)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Ignora erros de linting no build
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
