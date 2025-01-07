/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['furniturezone.pk', 'example.com', 'res.cloudinary.com', "unsplash.com", "googleusercontent.com"],
        unoptimized: true,
    },

};

export default nextConfig;
