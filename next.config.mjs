/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GitHub Pages uses a subdirectory format, so if you're deploying to username.github.io/repo-name
  // you'll need to specify the basePath
  // basePath: '/your-repo-name', // Uncomment and replace with your repo name
}

export default nextConfig
