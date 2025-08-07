'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Transformation',
    description: 'Increased conversion rates by 45% with AI-powered product recommendations and chatbot support.',
    status: 'COMING SOON'
  },
  {
    title: 'Intelligent CRM System',
    description: 'Automated 70% of customer service interactions with agentic AI assistants.',
    status: 'COMING SOON'
  },
  {
    title: 'Database Optimization',
    description: 'Reduced query times by 60% using AI-driven database restructuring and caching strategies.',
    status: 'COMING SOON'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">
            See some of my <span className="gradient-text">projects.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Coming Soon Badge */}
              <motion.div
                className="mb-6 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold text-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                  <span>{project.status}</span>
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                </div>
              </motion.div>

              {/* Project Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <motion.button
                  className="bg-primary hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg">
            More projects coming soon! Each project showcases different aspects of AI integration and web development.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 