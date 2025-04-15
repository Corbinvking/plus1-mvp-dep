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
  // Remove custom webpack config and asset prefix settings
  // Remove basePath and assetPrefix
  // Remove outputFileTracing as it's not needed
  // Keep rewrites for auth
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