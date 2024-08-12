/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // Adds trailing slash to routes
  images: {
    unoptimized: true, // Disable image optimization (not supported on GitHub Pages)
  },
};

export default nextConfig;
