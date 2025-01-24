/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: false,
      },
      env: {
        NEXT_DB_URL: process.env.NEXT_DB_URL,
      },
};

export default nextConfig;
