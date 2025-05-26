/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true, // Ensures the app directory is recognized
  },
  async rewrites() {
    return [
      {
        source: "/(.*)",
        destination: "/",
      },
    ];
  },
}

export default nextConfig
