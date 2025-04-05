/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        domains: ['furniturezone.pk', 'example.com', 'res.cloudinary.com', "unsplash.com", "lh3.googleusercontent.com"]},
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
            statusCode: 301
          },
           {
            source: '/:path((?!.*\\.).*)', // Match all paths except those containing a dot (e.g., file extensions)
            has: [
                {
                    type: 'header',
                    key: 'x-forwarded-proto',
                    value: 'https',
                },
            ],
            missing: [
                {
                    type: 'query',
                    key: '_next',
                },
            ],
            destination: '/:path*/',
            permanent: true,
            statusCode: 301
        },
        ];
      },
  compiler:{    removeConsole: process.env.NODE_ENV === 'production'  ? true : false },
  experimental: {
    optimizePackageImports: ['react-icons/*', "antd"],
  },
};


export default nextConfig;
