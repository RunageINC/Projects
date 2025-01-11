import type { NextConfig } from "next";

//https://images.ygoprodeck.com/images/cards_cropped/72302403.jpg

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ygoprodeck.com',
        port: '',
        pathname: '/images/**',
        search: ''
      }
    ]
  }
};

export default nextConfig;
