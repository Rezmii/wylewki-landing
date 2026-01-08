/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // To obsługiwało stary link
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
