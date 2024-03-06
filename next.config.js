/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'iili.io',
          },
          {
            protocol: 'https',
            hostname: 'seeklogo.com',
          },
        ],
      },
}

module.exports = nextConfig
