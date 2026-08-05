import type { NextConfig } from "next";

// GITHUB_PAGES=true is set by the deploy workflow: the site is exported
// statically and served from https://<user>.github.io/<repo>/
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "tgpod";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : undefined,
};

export default nextConfig;
