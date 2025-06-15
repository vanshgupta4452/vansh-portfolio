/** @type {import('next').NextConfig} */
const repoName = 'vansh-portfolio'
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
}

export default nextConfig
