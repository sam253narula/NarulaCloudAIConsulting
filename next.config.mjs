/** @type {import('next').NextConfig} */
const repoName = 'NarulaCloudAIConsulting';
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? `/${repoName}` : '';

const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
