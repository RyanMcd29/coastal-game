// coast-game/next.config.mjs
const isProd = process.env.NODE_ENV === 'production'
const repo = 'coastal-game'             // your repo name
const basePath = isProd ? `/${repo}` : ''

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',                     // static export
  images: { unoptimized: true },        // GH Pages: no image optimizer
  basePath,                             // serve under /coastal-game
  assetPrefix: basePath + '/',          // asset URLs under /coastal-game
}

export default config
