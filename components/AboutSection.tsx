'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Picture */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Large Profile Picture */}
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <div className="w-72 h-72 bg-dark rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-4xl">MH</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <motion.h2
              className="text-5xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            {/* Introduction */}
            <motion.div
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>
                Hi, I'm Muhammad Hasnain, a digital business specialist with a Bachelor of Science degree in Economics. 
                I've successfully transitioned into the digital business space and currently work remotely, 
                focusing on online e-commerce operations.
              </p>
              <p>
                I specialize in creating, managing, and scaling Shopify-based online stores, leveraging platforms 
                like Facebook Ads to drive traffic and boost sales. My expertise includes product research, 
                audience targeting, campaign optimization, and storefront design.
              </p>
            </motion.div>

            {/* Details */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold gradient-text mb-3">Education</h3>
                <p className="text-gray-300">Bachelor of Science in Economics</p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-2xl font-semibold gradient-text mb-3">Experience</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Remote e-commerce operations specialist</li>
                  <li>• Shopify store creation and management</li>
                  <li>• Facebook Ads optimization and scaling</li>
                  <li>• Product research and audience targeting</li>
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-semibold gradient-text mb-3">Skills</h3>
                <p className="text-gray-300">
                  Proficient in Adobe Photoshop for creating visually appealing content and product visuals. 
                  Strong understanding of both economic principles and digital marketing strategies.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 