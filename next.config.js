const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  optimization: {
    minimize: process.env.NEXT_MINIMIZE,
  },
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'],
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    fallbacks: {
      image: 'https://via.placeholder.com/100x100?text=victorenogwe.com',
    },
  },
  experimental: { optimizeCss: true, optimizeImages: true },
});
