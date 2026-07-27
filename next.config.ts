import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder galerija/staff slike su lokalni SVG-ovi dok ne stignu prave fotografije.
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
