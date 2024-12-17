import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/dashboard",
  //       permanent: true
  //     }
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        search: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        search: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
