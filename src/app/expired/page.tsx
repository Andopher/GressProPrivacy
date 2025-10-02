'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, ArrowLeft } from 'lucide-react'
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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ExpiredLinkPage() {
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
              <motion.div className="flex items-center justify-center gap-3 mb-6" variants={itemVariants}>
                <AlertTriangle className="w-10 h-10 text-yellow-400" />
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
                  Email Link Expired
                </h1>
              </motion.div>

              <motion.p className="text-lg text-slate-300 max-w-2xl mx-auto" variants={itemVariants}>
                The confirmation link you used is invalid or has expired. Please request a new email and try again.
              </motion.p>
            </motion.div>

            <motion.div className="card max-w-md mx-auto" variants={containerVariants} initial="hidden" animate="visible">
              <div className="policy text-center">
                <motion.div className="flex flex-col gap-4 mt-2" variants={itemVariants}>
                  <Link href="/" className="cta group">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Send New Confirmation (Return Home)
                  </Link>
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


