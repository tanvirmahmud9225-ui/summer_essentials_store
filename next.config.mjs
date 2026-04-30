/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
      port: '',
    },
  ],
};

export default nextConfig;
