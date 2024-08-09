/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.discordapp.com', // Discord Images
      'media.discordapp.net', // Discord Images
      'api.microlink.io', // Microlink Image Preview
      'images.unsplash.com', // Unsplash Images
      'assets.aceternity.com', // Aeternity Images
    ],
  },
};

export default nextConfig;
