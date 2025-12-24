'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Laptop({ position = [0, 0, 0], rotation = [0, 0, 0] }: { position?: [number, number, number], rotation?: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group position={position} rotation={rotation}>
      {/* Laptop Base */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.2, 1.5]} />
        <meshStandardMaterial color="#1a1a1a" emissive="#00d9ff" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Laptop Screen */}
      <mesh position={[0, 1.1, -0.3]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#0a0a0a" emissive="#00d9ff" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Screen Glow */}
      <mesh position={[0, 1.1, -0.25]} rotation={[-0.3, 0, 0]}>
        <planeGeometry args={[1.8, 1]} />
        <meshStandardMaterial color="#00d9ff" transparent opacity={0.2} />
      </mesh>
    </group>
  )
}

