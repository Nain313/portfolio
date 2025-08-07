'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MousePointer, X } from 'lucide-react'

export default function CursorToggle() {
  const [isCustomCursorEnabled, setIsCustomCursorEnabled] = useState(true)

  useEffect(() => {
    if (isCustomCursorEnabled) {
      document.body.style.cursor = 'none'
    } else {
      document.body.style.cursor = 'auto'
    }
  }, [isCustomCursorEnabled])

  return (
    <motion.button
      className="fixed top-4 right-20 z-50 w-12 h-12 bg-glass rounded-full flex items-center justify-center backdrop-blur-sm"
      onClick={() => setIsCustomCursorEnabled(!isCustomCursorEnabled)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isCustomCursorEnabled ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isCustomCursorEnabled ? (
          <MousePointer className="w-6 h-6 text-white" />
        ) : (
          <X className="w-6 h-6 text-gray-400" />
        )}
      </motion.div>
    </motion.button>
  )
} 