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
  swcMinify: true,
  compress: true,
  basePath: '/plus1-mvp-dep2',
  assetPrefix: '/plus1-mvp-dep2',
  images: {
    unoptimized: true,
    path: '/plus1-mvp-dep2/_next/image'
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig 