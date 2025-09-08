/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rayrtuqztdc8phcw.public.blob.vercel-storage.com',
                pathname: '/littleItaly/**',
            },
        ],
    },
};

export default nextConfig;
