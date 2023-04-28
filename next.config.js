/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  // 선택한 url로 끌고 온다.
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false,
      },
    ];
  },
  // 기존의 복잡한 url을 덮어 씌운다
  // 보안상으로 민감한 key가 있을 경우 rewrites을 사용할 수 있음.
  async rewrites() {
    return [
      {
        source: '/item/:slug',
        destination: '/products/:slug',
      },
    ];
  },
}

module.exports = nextConfig
