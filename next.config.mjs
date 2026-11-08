/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 only allows quality 75 by default; the hero image uses 95.
    qualities: [75, 95],
  },
  // Lets other devices on the LAN (e.g. testing on a phone) load dev-server
  // scripts and HMR. Next 16 blocks this by default, which leaves the page
  // un-hydrated: no menu, no client navigation. Dev only.
  allowedDevOrigins: ["192.168.0.78"],
};

export default nextConfig;
