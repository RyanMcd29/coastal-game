/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/coastal-game' : '',
  assetPrefix: isProd ? '/coastal-game/' : '',
};

export default nextConfig;
