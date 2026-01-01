import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: "/repo-name", // Uncomment and set if deploying to username.github.io/repo-name
};
export default nextConfig;