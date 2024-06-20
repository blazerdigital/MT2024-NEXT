/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  output: 'export',
  distDir: 'build', // Customize the output directory name if needed
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // Return your custom paths here if needed
    return defaultPathMap;
  },
};

module.exports = nextConfig;
