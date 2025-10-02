'use client'

import { motion } from 'framer-motion'
import { BarChart3, Camera, Target, TrendingUp } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const features = [
  {
    icon: BarChart3,
    title: 'Strength Metrics',
    description: 'Track your lifts, sets, reps, and progress notes with detailed analytics.',
  },
  {
    icon: Camera,
    title: 'Visual Progress',
    description: 'Side-by-side photo comparisons and AI-powered body composition scans.',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set and monitor your fitness goals with comprehensive progress insights.',
  },
  {
    icon: TrendingUp,
    title: 'Progress Analytics',
    description: 'Visualize your journey with charts, trends, and performance metrics.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          className="card"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="policy">
            <motion.h2 
              className="text-center text-2xl font-bold mb-8"
              variants={itemVariants}
            >
              Built for Complete Progress Tracking
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="space-y-4 text-center"
              variants={itemVariants}
            >
              <p>
                GressPro is the first app focused on your full journey — both physical and
                visual. Track your lifts, body composition, and how your physique changes
                over time with side-by-side visuals, scans, and progress logs.
              </p>
              <p>
                Our goal is to make progress obvious and motivating, combining strength
                metrics, photos, and composition insights in one place.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
