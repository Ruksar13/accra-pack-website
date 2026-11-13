/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/manufacturing',
        destination: '/capabilities',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/contract-manufacturing',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

