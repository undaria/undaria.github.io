/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS,
  trailingSlash: true,
  assetPrefix: '/',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
