'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, MessageCircle, Clock, Send } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false,
})

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-24 pb-20">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="flex items-center justify-center gap-3 mb-6"
                variants={itemVariants}
              >
                <MessageCircle className="w-8 h-8 text-brand" />
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
                  Support
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-lg text-slate-300 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                We're here to help. Get in touch with our support team for any questions or issues.
              </motion.p>
            </motion.div>

            <motion.div
              className="card max-w-2xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="policy text-center">
                <motion.h2 
                  className="text-2xl font-bold mb-6"
                  variants={itemVariants}
                >
                  Contact Us
                </motion.h2>
                
                <motion.p 
                  className="text-slate-300 mb-8"
                  variants={itemVariants}
                >
                  For any questions, issues, or account problems, email us directly:
                </motion.p>
                
                <motion.div 
                  className="mb-8"
                  variants={itemVariants}
                >
                  <a 
                    href="mailto:support@gresspro.org"
                    className="cta inline-flex items-center group"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    support@gresspro.org
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-center gap-2 text-sm text-muted mb-8"
                  variants={itemVariants}
                >
                  <Clock className="w-4 h-4" />
                  <span>We aim to respond within 1–2 business days</span>
                </motion.div>
                
                <motion.div 
                  className="pt-6 border-t border-white/10"
                  variants={itemVariants}
                >
                  <Link href="/" className="cta-outline group">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  )
}
