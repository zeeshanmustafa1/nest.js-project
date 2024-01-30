/* eslint-disable import/no-extraneous-dependencies */

const NEXT_PUBLIC_WP_URL =
  process.env.NEXT_PUBLIC_WP_URL ||
  'https://wordpress-639004-2079849.cloudwaysapps.com/';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const redirects = require('./redirects.json');

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  images: {
    domains: [
      'traded.co',
      'traded-media.s3.us-west-1.amazonaws.com',
      'https://traded-media.s3.us-west-1.amazonaws.com',
      'www.traded-media.s3.us-west-1.amazonaws.com',
      'www.priveluxre.com',
      'www.portacompany.com',
      'localhost',
      'https://wordpress-639004-2079849.cloudwaysapps.com',
      'wordpress-639004-2079849.cloudwaysapps.com',
      'cdn.myportfolio.com',
      '*',
      NEXT_PUBLIC_WP_URL,
    ],
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,

  async redirects() {
    return redirects.map(({ source, destination, statusCode }) => ({
      source,
      destination,
      statusCode,
    }));
  },

  async rewrites() {
    return [
      {
        source: '/wp-content/uploads/:path*',
        destination: `${NEXT_PUBLIC_WP_URL}/wp-content/uploads/:path*`,
      },
    ];
  },
});
