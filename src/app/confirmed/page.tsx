'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowLeft } from 'lucide-react'
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

const checkVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
}

export default function ConfirmedPage() {
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
                variants={checkVariants}
              >
                <CheckCircle className="w-16 h-16 text-green-500" />
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
                  Email Confirmed
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-lg text-slate-300 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Thanks! Your email has been verified. You're all set to receive updates about GressPro.
              </motion.p>
            </motion.div>

            <motion.div
              className="card max-w-md mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="policy text-center">
                <motion.div 
                  className="mt-8"
                  variants={itemVariants}
                >
                  <Link href="/" className="cta group">
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
