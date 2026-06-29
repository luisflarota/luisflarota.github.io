const nextConfig = {
  // Static export only for production builds (CI / `next build`). In `next dev`
  // we leave this undefined so the dev server renders routes on demand and does
  // not require generateStaticParams() for every dynamic route.
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  // Remove these two if you're hosting at root
  // assetPrefix: process.env.NODE_ENV === "production" ? "/luisflarota.github.io" : "",
  // basePath: process.env.NODE_ENV === "production" ? "/luisflarota.github.io" : "",
}

module.exports = nextConfig
