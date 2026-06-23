import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
      }

    ],
    dangerouslyAllowSVG: true,  // Allow SVG images
    contentDispositionType: 'attachment',  // Required for security when allowing SVGs
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",  // Additional security
  },
  turbopack: {},
};

export default nextConfig;