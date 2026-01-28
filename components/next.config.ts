import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Configure Turbopack to exclude Strapi folder
  turbopack: {
    resolveAlias: {
      // This helps exclude the folder from processing
    },
  },
  // Set output file tracing root to silence lockfile warning
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // For production Strapi instance - allow both HTTP and HTTPS
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '**',
        pathname: '/uploads/**',
      },
    ],
    // Disable image optimization in development to avoid private IP issues with localhost
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
