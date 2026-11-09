/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 only allows quality 75 by default; the hero image uses 95.
    qualities: [75, 95],
  },
};

export default nextConfig;
