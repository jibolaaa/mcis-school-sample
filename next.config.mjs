/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh5.googleusercontent.com' },
      { protocol: 'https', hostname: 'edusko-dev-bucket.s3.eu-north-1.amazonaws.com' },
      { protocol: 'https', hostname: 'static.wixstatic.com' }
    ]
  }
};

export default nextConfig;
