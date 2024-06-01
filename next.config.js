/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gzbovfvenzwffnzltshb.supabase.co",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
