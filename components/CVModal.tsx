'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Upload, Download, Eye } from 'lucide-react'

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [cvImage, setCvImage] = useState<string | null>('/cv.png') // Pre-loaded CV
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file (PNG, JPG, etc.)')
        setIsUploading(false)
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        setCvImage(e.target?.result as string)
        setIsUploading(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleDownload = () => {
    if (cvImage) {
      const link = document.createElement('a')
      link.href = cvImage
      link.download = 'Muhammad_Hasnain_CV.png'
      link.click()
    }
  }

  const handleViewOriginal = () => {
    if (cvImage) {
      window.open(cvImage, '_blank')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="relative bg-dark-gray rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto glass"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold gradient-text">My CV</h2>
              <motion.button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

                         {/* Content */}
             <div className="space-y-6">
               {/* Actions Section - Only show buttons */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="space-y-6"
               >
                 {/* Title */}
                 <div className="text-center">
                                     <h3 className="text-2xl font-semibold text-white mb-2">
                    Muhammad Hasnain CV
                  </h3>
                   <p className="text-gray-300">
                     Choose an option to view or download my CV
                   </p>
                 </div>
                 
                 {/* Action Buttons */}
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                   <motion.button
                     onClick={handleDownload}
                     className="bg-primary hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     <Download className="w-5 h-5" />
                     <span>Download CV</span>
                   </motion.button>
                   
                   <motion.button
                     onClick={handleViewOriginal}
                     className="bg-secondary hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     <Eye className="w-5 h-5" />
                     <span>View Original</span>
                   </motion.button>
                 </div>
                 
                 {/* Back Button */}
                 <div className="flex justify-center pt-4">
                   <motion.button
                     onClick={onClose}
                     className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     <X className="w-4 h-4" />
                     <span>Back</span>
                   </motion.button>
                 </div>
               </motion.div>

                             {/* Upload Section - Only show if CV fails to load */}
               {!cvImage && (
                 <motion.div
                   className="text-center py-12"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                 >
                   <div className="mb-6">
                     <Upload className="w-16 h-16 text-primary mx-auto mb-4" />
                     <h3 className="text-xl font-semibold text-white mb-2">
                       CV Not Found
                     </h3>
                     <p className="text-gray-300">
                       Please add your CV as 'cv.png' in the public directory
                     </p>
                   </div>
                   
                   <input
                     ref={fileInputRef}
                     type="file"
                     accept="image/*,.pdf"
                     onChange={handleFileUpload}
                     className="hidden"
                   />
                   
                   <motion.button
                     onClick={handleUploadClick}
                     className="bg-primary hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 mx-auto"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     disabled={isUploading}
                   >
                     <Upload className="w-5 h-5" />
                     <span>{isUploading ? 'Uploading...' : 'Choose File'}</span>
                   </motion.button>
                 </motion.div>
               )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
