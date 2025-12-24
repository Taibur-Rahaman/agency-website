/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Fix for three-mesh-bvh compatibility
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    
    // Handle three.js modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    
    // Ignore three-mesh-bvh warnings if BatchedMesh is not available
    config.ignoreWarnings = [
      { module: /node_modules\/three-mesh-bvh/ },
    ]
    
    return config
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
}

module.exports = nextConfig
