/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  /** Tree-shake heavy client libs during compile (smaller + often faster). */
  experimental: {
    optimizePackageImports: ["framer-motion"],
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
