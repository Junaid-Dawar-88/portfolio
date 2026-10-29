import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF first, WebP fallback — far smaller than the source PNG/JPEG.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    // Import only the parts of these libraries each page uses, so page bundles stay small.
    optimizePackageImports: ["motion", "gsap"],
  },
};

export default nextConfig;
