/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// If deploying to https://<user>.github.io/<repo>, set basePath to "/<repo>"
const repo = 'coastal-game' // <-- your repo name
const basePath = isProd ? `/${repo}` : ''

const nextConfig = {
  output: 'export',            // enables static export with `next build`
  images: { unoptimized: true }, // disable next/image optimization (not available on GH Pages)
  basePath,                      // ensure links route under /<repo>
  assetPrefix: basePath + '/',   // ensure CSS/JS/image paths work under /<repo>
  // Optional:
  // trailingSlash: true
}

module.exports = nextConfig
