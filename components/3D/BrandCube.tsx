'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function BrandCube({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial 
          color="#9333ea" 
          emissive="#9333ea" 
          emissiveIntensity={0.3}
          wireframe={false}
        />
      </mesh>
      
      {/* Inner Glow */}
      <mesh>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial 
          color="#00d9ff" 
          transparent 
          opacity={0.3}
          emissive="#00d9ff" 
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  )
}

