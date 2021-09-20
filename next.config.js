const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = require('next-transpile-modules')(
  [
    'bootstrap-styled',
    '@bootstrap-styled/provider',
  ]
)(withPWA({
  reactStrictMode: false,
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
    runtimeCaching,
    fallbacks: {
      image: 'https://via.placeholder.com/100x100?text=victorenogwe.com',
    },
  },
  experimental: { optimizeCss: true, optimizeImages: true },
}));
