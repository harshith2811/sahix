/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
};

module.exports = nextConfig;
