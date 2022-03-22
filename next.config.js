/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: ".next",
  images: {
    domains: ["cdn.example.com"],
  }
}

module.exports = nextConfig
