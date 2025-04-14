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
  basePath: process.env.NODE_ENV === 'production' ? '/plus1-mvp-dep2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/plus1-mvp-dep2' : '',
  images: {
    unoptimized: true,
    path: process.env.NODE_ENV === 'production' ? '/plus1-mvp-dep2/_next/image' : '/_next/image'
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  }
}

module.exports = nextConfig 