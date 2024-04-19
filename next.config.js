/** @type {import('next').NextConfig} */


const nextConfig = {
    // added to load remote img
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'bit.ly',
          },
        ],
      },
    }

module.exports = nextConfig
