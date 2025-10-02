'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Download } from 'lucide-react'

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

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-24">
      {/* Spotlight gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[540px] w-[800px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl opacity-40" />
        <div className="absolute left-1/3 top-40 h-[320px] w-[320px] rounded-full bg-brand/10 blur-2xl opacity-30" />
      </div>

      <div className="container">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={logoVariants}>
            <Image
              src="/GressPro_transparent.png"
              alt="GressPro logo"
              width={120}
              height={120}
              className="mx-auto mb-4"
              priority
            />
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100"
            variants={itemVariants}
          >
            Make your progress unmistakable
          </motion.h1>

          <motion.p 
            className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Strength metrics, photos, and composition insights—together in one elegant app.
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-2 text-brand mt-4"
            variants={itemVariants}
          >
            <Calendar className="w-5 h-5" />
            <span className="font-medium">iOS Release: September 2025</span>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-3 mt-8"
            variants={itemVariants}
          >
            <Link href="/privacy" className="cta min-w-[200px]">
              Privacy Policy
            </Link>
            <button 
              className="cta-outline min-w-[200px] cursor-not-allowed opacity-60" 
              disabled
            >
              <Download className="w-4 h-4 mr-2" />
              Download — Coming Soon
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
