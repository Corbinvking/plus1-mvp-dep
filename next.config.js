/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has TypeScript errors.
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  distDir: '.next',
  generateEtags: true,
  images: {
    unoptimized: true,
    domains: ['plusone-app-t7ezx.ondigitalocean.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plusone-app-t7ezx.ondigitalocean.app',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/_next' : '',
  basePath: '',
  webpack: (config, { dev, isServer }) => {
    if (!dev && isServer) {
      // Copy all static files to the correct location
      config.output.publicPath = '/_next/';
    }
    return config;
  },
}

module.exports = nextConfig 