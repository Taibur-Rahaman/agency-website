'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Rocket({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const groupRef = useRef<any>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Rocket Body */}
      <mesh>
        <cylinderGeometry args={[0.2, 0.3, 1.2, 16]} />
        <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.4} />
      </mesh>
      
      {/* Rocket Nose */}
      <mesh position={[0, 0.7, 0]}>
        <coneGeometry args={[0.2, 0.4, 16]} />
        <meshStandardMaterial color="#9333ea" emissive="#9333ea" emissiveIntensity={0.4} />
      </mesh>
      
      {/* Fins */}
      {[0, Math.PI / 2, Math.PI, -Math.PI / 2].map((angle, i) => (
        <mesh key={i} position={[Math.cos(angle) * 0.25, -0.3, Math.sin(angle) * 0.25]} rotation={[0, angle, 0]}>
          <boxGeometry args={[0.1, 0.4, 0.3]} />
          <meshStandardMaterial color="#d946ef" emissive="#d946ef" emissiveIntensity={0.3} />
        </mesh>
      ))}
      
      {/* Flame */}
      <mesh position={[0, -0.8, 0]}>
        <coneGeometry args={[0.15, 0.3, 8]} />
        <meshStandardMaterial color="#00d9ff" transparent opacity={0.6} emissive="#00d9ff" emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

