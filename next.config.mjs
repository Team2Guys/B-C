/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  images: {
      domains: ['furniturezone.pk', 'example.com', 'res.cloudinary.com', 'unsplash.com', 'lh3.googleusercontent.com'],
  }, 
  compiler: {
      removeConsole: process.env.NODE_ENV === 'production' ? true : false,
  },
  experimental: {
      optimizePackageImports: ['react-icons/*', 'antd'],
  },
};

export default nextConfig;