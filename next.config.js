/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  trailingSlash: true,
  assetPrefix: '/',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
