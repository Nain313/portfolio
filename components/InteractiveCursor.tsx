'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function InteractiveCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Hide default cursor on the entire page
    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      // Restore default cursor when component unmounts
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 1000, 
        damping: 40,
        mass: 0.3
      }}
    >
      <div className="w-4 h-4 bg-white rounded-full opacity-80 border border-gray-300" />
    </motion.div>
  )
} 