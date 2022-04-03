const withPWA = require('next-pwa');
const withTM = require('next-transpile-modules');
const runtimeCaching = require('next-pwa/cache');

module.exports = withTM(['bootstrap-styled', '@bootstrap-styled/provider'])(
  withPWA({
    trailingSlash: true,
    reactStrictMode: true,
    compress: true,
    swcMinify: true,
    poweredByHeader: false,
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
        image: '/100x100.png',
      },
      publicExcludes: ['!robots.txt', '!sitemap.xml'],
    },
    experimental: { optimizeCss: true, optimizeImages: true },
    compiler: {
      styledComponents: true,
      removeConsole: true,
    },
  }),
);
