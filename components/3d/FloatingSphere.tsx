'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface FloatingSphereProps {
  position: [number, number, number]
  size?: number
  color?: string
  speed?: number
}

export default function FloatingSphere({ 
  position, 
  size = 1, 
  color = '#8A2BE2',
  speed = 1 
}: FloatingSphereProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed
      meshRef.current.rotation.z += 0.005 * speed
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed * 0.3) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.2}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  )
} 