'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function VideoCamera({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group position={position}>
      {/* Camera Body */}
      <mesh ref={meshRef}>
        <boxGeometry args={[0.8, 0.6, 1]} />
        <meshStandardMaterial color="#1a1a1a" emissive="#d946ef" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Lens */}
      <mesh position={[0, 0, 0.6]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>
      
      {/* Lens Glass */}
      <mesh position={[0, 0, 0.7]}>
        <cylinderGeometry args={[0.25, 0.25, 0.05, 32]} />
        <meshStandardMaterial color="#d946ef" transparent opacity={0.6} emissive="#d946ef" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Viewfinder */}
      <mesh position={[0, 0.3, 0.3]}>
        <boxGeometry args={[0.3, 0.15, 0.1]} />
        <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.3} />
      </mesh>
    </group>
  )
}

