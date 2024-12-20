/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", 'www.kinesismed.it', "i.ytimg.com", "lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
