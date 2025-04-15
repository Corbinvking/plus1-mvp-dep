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
      },
      {
        protocol: 'https',
        hostname: 'ojhhzwqjngcjpnzwgefn.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Asset handling configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/plus1-mvp-dep2' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/plus1-mvp-dep2' : '',
  // Ensure proper static file serving
  outputFileTracing: true,
  // Remove custom webpack config to use Next.js defaults
  webpack: (config) => {
    return config;
  },
  // Add dynamic route handling
  async rewrites() {
    return [
      {
        source: '/auth/logout',
        destination: '/api/auth/logout',
      }
    ]
  },
}

module.exports = nextConfig 