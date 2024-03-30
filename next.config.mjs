/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jeaaqdbbemfbrdhjirns.supabase.co",
      },
    ],
  },
};

export default nextConfig;
