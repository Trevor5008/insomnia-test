/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  env: {
    API_KEY: process.env.API_KEY
  }
}
