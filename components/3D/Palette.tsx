'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Palette({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.15
    }
  })

  return (
    <group position={position}>
      {/* Palette Base */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
        <meshStandardMaterial color="#9333ea" emissive="#9333ea" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Color Dots */}
      {[
        { color: '#00d9ff', pos: [0.4, 0.2, 0] },
        { color: '#9333ea', pos: [-0.4, 0.2, 0] },
        { color: '#d946ef', pos: [0, 0.2, 0.4] },
        { color: '#3b82f6', pos: [0, 0.2, -0.4] },
      ].map((dot, i) => (
        <mesh key={i} position={dot.pos as [number, number, number]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color={dot.color} emissive={dot.color} emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

