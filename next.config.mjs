/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.deprem.wiki",
        port: "",
        pathname: "/assets/img/**",
      },
      {
        protocol: "https",
        hostname: "api.deprem.wiki",
        port: "",
        pathname: "/images/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
