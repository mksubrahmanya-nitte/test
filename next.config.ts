import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "jguni.in",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/admission-open.html',
        destination: '/admission-open',
      },
      {
        source: '/:slug.html',
        destination: '/:slug',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/mca-ai-full-stack-development',
        destination: '/mca',
        permanent: true,
      },
      {
        source: '/programmes/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
