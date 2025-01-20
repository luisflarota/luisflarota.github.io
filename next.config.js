/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/luisflarota.github.io",
  assetPrefix: "/luisflarota.github.io/",
  trailingSlash: true,
}

module.exports = nextConfig

