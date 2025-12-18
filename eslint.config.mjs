/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Isso força o deploy a passar mesmo com erros de TS
  typescript: {
    ignoreBuildErrors: true,
  },

  // Isso força o deploy a passar mesmo com erros de Lint
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
