/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure proper routing for Vercel
  trailingSlash: false,
  // Optimize for production
  compress: true,
}

export default nextConfig
