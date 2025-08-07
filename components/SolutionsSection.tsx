'use client'

import { motion } from 'framer-motion'
import { Code, Bot, Database, Globe } from 'lucide-react'

const solutions = [
  {
    icon: Code,
    title: 'Shopify Store Development',
    description: 'Create and manage high-converting Shopify stores with custom themes and optimized user experience',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Bot,
    title: 'Facebook Ads Optimization',
    description: 'Drive targeted traffic and boost sales with optimized Facebook advertising campaigns.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Database,
    title: 'E-commerce Operations',
    description: 'Scale your online business with comprehensive e-commerce management and optimization',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Globe,
    title: 'Digital Marketing Strategy',
    description: 'Develop comprehensive digital marketing strategies for business growth and customer acquisition.',
    color: 'from-green-500 to-green-600'
  }
]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Me?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive e-commerce solutions tailored to your digital business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Solutions */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-center mb-12">
            Tailored <span className="gradient-text">E-commerce Solutions</span>
          </h3>
          <p className="text-xl text-gray-300 text-center mb-12">
            Powering online businesses with strategic digital solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shopify Store Management */}
            <motion.div
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Shopify Store Management</h4>
                <p className="text-gray-300 mb-6">
                  Complete Shopify store setup, customization, and ongoing management for optimal performance.
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Custom theme development</li>
                  <li>• Product catalog optimization</li>
                  <li>• Payment gateway integration</li>
                  <li>• Performance monitoring</li>
                </ul>
                <button className="mt-6 text-primary hover:text-pink-400 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </motion.div>

            {/* Facebook Ads Management */}
            <motion.div
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Facebook Ads Management</h4>
                <p className="text-gray-300 mb-6">
                  Strategic Facebook advertising campaigns to drive targeted traffic and maximize ROI.
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Audience targeting & segmentation</li>
                  <li>• Campaign optimization</li>
                  <li>• Ad creative development</li>
                  <li>• Performance analytics</li>
                </ul>
                <button className="mt-6 text-secondary hover:text-purple-400 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </motion.div>

            {/* Digital Marketing Strategy */}
            <motion.div
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Digital Marketing Strategy</h4>
                <p className="text-gray-300 mb-6">
                  Comprehensive digital marketing strategies for business growth and customer acquisition.
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Brand strategy development</li>
                  <li>• Multi-channel marketing</li>
                  <li>• Customer acquisition</li>
                  <li>• Growth optimization</li>
                </ul>
                <button className="mt-6 text-primary hover:text-pink-400 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 