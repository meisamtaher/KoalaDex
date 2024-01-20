/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/coming-soon',
            permanent: true,
          }
        ]
      },
}

module.exports = nextConfig
