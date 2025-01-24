/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        domains: ['furniturezone.pk', 'example.com', 'res.cloudinary.com', "unsplash.com", "googleusercontent.com"]},
    async redirects() {
        return [
          {
            source: '/(.*)',
            has: [
              {
                type: 'host',
                value: 'http://',
              },
            ],
            destination: 'https://', // Redirect HTTP to HTTPS
            permanent: true,
          },
        ];
      },
      removeConsole: process.env.NODE_ENV === 'production' 

};


export default nextConfig;
