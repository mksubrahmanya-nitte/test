import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
