const repoName = "ai-for-everyone"; // replace with your actual repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
