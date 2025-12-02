/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'], // Add your image domains here
  },
  // Enable static exports for static site generation
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Configure base path if your site is served from a subdirectory
  // basePath: '/your-base-path',
  // Optional: Configure asset prefix for CDN
  // assetPrefix: 'https://your-cdn-url.com',
}

module.exports = nextConfig
