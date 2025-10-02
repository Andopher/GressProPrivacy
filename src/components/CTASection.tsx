'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Mail } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function CTASection() {
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
          <div className="policy text-center">
            <motion.h2 
              className="text-2xl font-bold mb-6"
              variants={itemVariants}
            >
              Ready to Transform Your Fitness Journey?
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Join thousands of fitness enthusiasts who are already tracking their progress 
              with GressPro. Get early access and be the first to experience the future of 
              fitness tracking.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
              variants={itemVariants}
            >
              <Link href="/privacy" className="cta group">
                <Shield className="w-4 h-4 mr-2" />
                Read Our Privacy Policy
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/support" className="cta-outline group">
                <Mail className="w-4 h-4 mr-2" />
                Get Support
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="text-sm text-muted"
              variants={itemVariants}
            >
              <p>Questions? Contact us at{' '}
                <a 
                  href="mailto:support@gresspro.org" 
                  className="text-brand hover:underline"
                >
                  support@gresspro.org
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
