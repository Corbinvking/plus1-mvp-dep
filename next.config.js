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
    unoptimized: false,
    domains: [
      'plusone-app-t7ezx.ondigitalocean.app',
      'images.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plusone-app-t7ezx.ondigitalocean.app',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.publicPath = '/';
    }
    return config;
  },
  // Add dynamic route handling
  async rewrites() {
    return [
      {
        source: '/auth/logout',
        destination: '/api/auth/logout',
      },
    ]
  },
}

module.exports = nextConfig 