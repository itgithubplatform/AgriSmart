import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // ✅ This will ignore ESLint errors during build on Vercel
    ignoreDuringBuilds: true,
  },
  images: {
    // ✅ Allow external images from Unsplash
    domains: ['source.unsplash.com'],
  },
};

export default nextConfig;
