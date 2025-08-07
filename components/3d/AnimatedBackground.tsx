'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import FloatingCube from './FloatingCube'
import FloatingSphere from './FloatingSphere'
import ParticleSystem from './ParticleSystem'

function SimpleStars() {
  const starsRef = useRef<THREE.Points>(null)

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.001
    }
  })

  const starsGeometry = new THREE.BufferGeometry()
  const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.1 })

  const starsVertices = []
  for (let i = 0; i < 1000; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = (Math.random() - 0.5) * 2000
    starsVertices.push(x, y, z)
  }

  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3))

  return <points ref={starsRef} geometry={starsGeometry} material={starsMaterial} />
}

function SimpleOrbitControls() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  return <group ref={groupRef} />
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FF1493" />
        
        <SimpleStars />
        <SimpleOrbitControls />
        <ParticleSystem count={500} />
        
        {/* Floating cubes */}
        <FloatingCube position={[-3, 2, -2]} size={0.5} color="#FF1493" speed={1.2} />
        <FloatingCube position={[3, -1, -3]} size={0.8} color="#E91E63" speed={0.8} />
        <FloatingCube position={[0, 3, -1]} size={0.6} color="#FF1493" speed={1.5} />
        <FloatingCube position={[-2, -2, -4]} size={0.4} color="#8A2BE2" speed={1.0} />
        <FloatingCube position={[4, 1, -2]} size={0.7} color="#E91E63" speed={0.9} />
        
        {/* Floating spheres */}
        <FloatingSphere position={[2, 2, -3]} size={0.3} color="#8A2BE2" speed={1.1} />
        <FloatingSphere position={[-1, -1, -2]} size={0.5} color="#FF1493" speed={0.7} />
        <FloatingSphere position={[1, 3, -4]} size={0.4} color="#E91E63" speed={1.3} />
        <FloatingSphere position={[-3, 0, -1]} size={0.6} color="#8A2BE2" speed={0.6} />
      </Canvas>
    </div>
  )
} 