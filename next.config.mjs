/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: false,
      },
      env: {
        NEXT_DB_URL: process.env.NEXT_DB_URL,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      },
};

export default nextConfig;
