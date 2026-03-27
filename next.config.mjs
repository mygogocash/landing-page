import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  /** Lets Playwright / tooling on 127.0.0.1 load Next dev HMR without cross-origin blocks. */
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  /** Tree-shake heavy client libs during compile (smaller + often faster). */
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  turbopack: {
    root: projectRoot,
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.involve.asia",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
