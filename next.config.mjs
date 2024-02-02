/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "gcroquette.oceanwp.org",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
