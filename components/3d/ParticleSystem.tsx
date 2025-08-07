'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Particle {
  position: THREE.Vector3
  velocity: THREE.Vector3
  color: THREE.Color
}

export default function ParticleSystem({ count = 1000 }) {
  const meshRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const temp: Particle[] = []
    for (let i = 0; i < count; i++) {
      const particle = {
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        color: new THREE.Color().setHSL(Math.random(), 0.8, 0.6)
      }
      temp.push(particle)
    }
    return temp
  }, [count])

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    particles.forEach((particle, i) => {
      pos[i * 3] = particle.position.x
      pos[i * 3 + 1] = particle.position.y
      pos[i * 3 + 2] = particle.position.z
    })
    return pos
  }, [particles, count])

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3)
    particles.forEach((particle, i) => {
      cols[i * 3] = particle.color.r
      cols[i * 3 + 1] = particle.color.g
      cols[i * 3 + 2] = particle.color.b
    })
    return cols
  }, [particles, count])

  useFrame(() => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array
      
      particles.forEach((particle, i) => {
        particle.position.add(particle.velocity)
        
        // Wrap around boundaries
        if (particle.position.x > 10) particle.position.x = -10
        if (particle.position.x < -10) particle.position.x = 10
        if (particle.position.y > 10) particle.position.y = -10
        if (particle.position.y < -10) particle.position.y = 10
        if (particle.position.z > 10) particle.position.z = -10
        if (particle.position.z < -10) particle.position.z = 10
        
        positions[i * 3] = particle.position.x
        positions[i * 3 + 1] = particle.position.y
        positions[i * 3 + 2] = particle.position.z
      })
      
      meshRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
} 