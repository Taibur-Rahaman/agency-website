'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function CodeBlock({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const groupRef = useRef<any>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Code Block Base */}
      <mesh>
        <boxGeometry args={[1.2, 0.8, 0.3]} />
        <meshStandardMaterial color="#1a1a1a" emissive="#00d9ff" emissiveIntensity={0.1} />
      </mesh>
      
      {/* Code Lines */}
      {[
        { width: 0.8, y: 0.2 },
        { width: 0.6, y: 0 },
        { width: 0.9, y: -0.2 },
      ].map((line, i) => (
        <mesh key={i} position={[-0.4, line.y, 0.16]}>
          <boxGeometry args={[line.width, 0.05, 0.02]} />
          <meshStandardMaterial 
            color={i === 0 ? '#00d9ff' : i === 1 ? '#9333ea' : '#d946ef'} 
            emissive={i === 0 ? '#00d9ff' : i === 1 ? '#9333ea' : '#d946ef'} 
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

