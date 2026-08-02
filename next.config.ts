import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repoName = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repoName = `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || repoName;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
