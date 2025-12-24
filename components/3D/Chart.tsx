'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Chart({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const groupRef = useRef<any>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.1
    }
  })

  const bars = [
    { height: 0.3, x: -0.4 },
    { height: 0.6, x: -0.2 },
    { height: 0.9, x: 0 },
    { height: 1.2, x: 0.2 },
    { height: 1.5, x: 0.4 },
  ]

  return (
    <group ref={groupRef} position={position}>
      {/* Chart Base */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[1.2, 0.1, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Bars */}
      {bars.map((bar, i) => (
        <mesh key={i} position={[bar.x, -0.8 + bar.height / 2, 0]}>
          <boxGeometry args={[0.15, bar.height, 0.15]} />
          <meshStandardMaterial 
            color={i === bars.length - 1 ? '#00d9ff' : '#9333ea'} 
            emissive={i === bars.length - 1 ? '#00d9ff' : '#9333ea'} 
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
      
      {/* Growth Arrow */}
      <mesh position={[0.4, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.1, 0.3, 8]} />
        <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

