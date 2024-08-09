/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'media.discordapp.net', // Discord Images
      'api.microlink.io', // Microlink Image Preview
      'images.unsplash.com', // Unsplash Images
      'assets.aceternity.com', // Aeternity Images
    ],
  },
};

export default nextConfig;
