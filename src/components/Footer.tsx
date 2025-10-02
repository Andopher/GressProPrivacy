'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Footer() {
  return (
    <motion.footer
      className="py-8 border-t border-white/10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="text-center">
          <p className="text-muted">
            © {new Date().getFullYear()} GressPro. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
