import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Allow Cursor preview / proxy origins to load dev assets (HMR, JS chunks)
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.cursor.com",
    "*.cursor.sh",
    "*.cursor.app",
    "*.anysphere.co",
  ],
};

export default nextConfig;
