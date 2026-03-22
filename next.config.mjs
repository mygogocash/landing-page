/**
 * Next.js 16 uses Turbopack by default for `next dev` and `next build`.
 * Use `npm run dev:webpack` if you need the webpack dev server.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /** Static HTML/CSS/JS in `out/` for Firebase Hosting (`firebase deploy`). */
  output: "export",
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
