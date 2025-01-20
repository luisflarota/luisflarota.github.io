const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Remove these two if you're hosting at root
  // assetPrefix: process.env.NODE_ENV === "production" ? "/luisflarota.github.io" : "",
  // basePath: process.env.NODE_ENV === "production" ? "/luisflarota.github.io" : "",
}

module.exports = nextConfig
