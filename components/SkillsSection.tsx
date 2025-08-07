'use client'

import { motion } from 'framer-motion'
import { Code, Cpu, Palette, Database, Users, Lightbulb, Heart as HeartIcon, MessageCircle } from 'lucide-react'

const technicalSkills = [
  { name: 'Shopify Store Development', icon: Code, percentage: 95 },
  { name: 'Facebook Ads Optimization', icon: Cpu, percentage: 90 },
  { name: 'E-commerce Operations', icon: Cpu, percentage: 88 },
  { name: 'Adobe Photoshop & Design', icon: Palette, percentage: 85 },
  { name: 'Product Research & Analysis', icon: Database, percentage: 87 },
]

const softSkills = [
  { name: 'Digital Marketing', icon: Users, percentage: 92 },
  { name: 'Business Strategy', icon: Lightbulb, percentage: 90 },
  { name: 'Customer Focus', icon: HeartIcon, percentage: 88 },
  { name: 'Analytical Thinking', icon: MessageCircle, percentage: 85 },
]

const technologies = [
  'Shopify', 'Facebook Ads', 'E-commerce', 'Adobe Photoshop', 'Digital Marketing', 'Product Research', 'Campaign Optimization', 'Store Design'
]

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A blend of technical expertise and essential soft skills for modern AI-powered web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-primary font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-8">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-primary font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technology Tags */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-4 whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* First set of tags */}
              {technologies.map((tech, index) => (
                <motion.span
                  key={`first-${tech}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    index % 3 === 0 
                      ? 'bg-white text-dark' 
                      : 'bg-primary text-white'
                  }`}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {tech}
                </motion.span>
              ))}
              {/* Second set of tags for seamless loop */}
              {technologies.map((tech, index) => (
                <motion.span
                  key={`second-${tech}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    index % 3 === 0 
                      ? 'bg-white text-dark' 
                      : 'bg-primary text-white'
                  }`}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>


      </div>
    </section>
  )
} 