/** @type {import('next').NextConfig} */
const withTwin = require("./withTwin.js");

const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
};

module.exports = withTwin(nextConfig);
