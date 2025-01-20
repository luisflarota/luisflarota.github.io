/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/luisflarota.github.io" : "",
  basePath: process.env.NODE_ENV === "production" ? "/luisflarota.github.io" : "",
}

module.exports = nextConfig

