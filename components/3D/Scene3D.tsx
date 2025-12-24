'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

interface Scene3DProps {
  children: React.ReactNode
  cameraPosition?: [number, number, number]
  enableControls?: boolean
  className?: string
}

export default function Scene3D({ 
  children, 
  cameraPosition = [0, 0, 5],
  enableControls = false,
  className = ''
}: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={0.8} />
          <pointLight position={[-5, -5, -5]} intensity={0.4} color="#00d9ff" />
          <directionalLight position={[0, 5, 5]} intensity={0.6} />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} />
          {enableControls && <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />}
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}

