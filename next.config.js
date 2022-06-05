const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-plugin-svgr');
const { svgrOptions, fileLoaderOptions } = require('./.svgrrc');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withPlugins(
  [
    withSvgr({
      fileLoader: fileLoaderOptions,
      svgrOptions,
    }),
  ],
  nextConfig
);
