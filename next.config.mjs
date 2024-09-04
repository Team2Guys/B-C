/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'unsplash.com',
            pathname: '*',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '*',
          },
          {
            protocol: 'https',
            hostname: 'example.com',
            pathname: '*',
          },
          {
            protocol: 'https',
            hostname: 'furniturezone.pk',
            pathname: '*',
          },
        ],
      },
    // images: {
    //     domains: ['furniturezone.pk', 'example.com', 'res.cloudinary.com', "unsplash.com"],
    // },
};

export default nextConfig;
