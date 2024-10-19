// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.rawg.io',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname:  'api.rawg.io',
        port: '',
        pathname: '/media/games/**',
      },
    ],
  },
}
