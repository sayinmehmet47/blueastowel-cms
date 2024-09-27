/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'localhost',
      'assets.vercel.com',
      'assets.ubuntu.com',
      'nextjs.org',
    ],
  },
};

module.exports = nextConfig;
