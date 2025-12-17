/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Optimize for static generation
  trailingSlash: false,
  // Enable static optimization
  swcMinify: true,
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig


