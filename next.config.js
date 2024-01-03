/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'akamai',
        path: '',
        unoptimized: true
    },
    assetPrefix: '/',
};

module.exports = nextConfig;
