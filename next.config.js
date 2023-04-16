/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'standalone',
  // experimental: {
  //   appDir: true,
  // },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8088/api/:path*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
