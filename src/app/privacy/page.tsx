'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Mail, Calendar } from 'lucide-react'
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

export default function PrivacyPage() {
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
                <Shield className="w-8 h-8 text-brand" />
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
                  Privacy Policy
                </h1>
              </motion.div>

              <motion.p
                className="text-lg text-slate-300 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Your privacy matters to us. Here's how we protect and handle your data.
              </motion.p>
            </motion.div>

            <motion.div
              className="card max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="policy">
                {/* At-a-glance summary */}
                <motion.div 
                  className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
                  variants={itemVariants}
                >
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">We collect</div>
                    <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                      <li>Email (account only)</li>
                      <li>Workout logs</li>
                      <li>Body photos & scans</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">We use it to</div>
                    <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                      <li>Provide core app features</li>
                      <li>Show your progress visuals</li>
                      <li>Improve your experience</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">We don't</div>
                    <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                      <li>Sell your data</li>
                      <li>Use targeted ads</li>
                      <li>Store payment details</li>
                    </ul>
                  </div>
                </motion.div>

                

                {/* Collapsible sections */}
                <motion.div className="space-y-4" variants={itemVariants}>
                  <details id="collect" className="group rounded-xl border border-white/10 bg-white/5">
                    <summary className="cursor-pointer select-none px-4 py-3 text-slate-200 font-semibold flex items-center justify-between">
                      Information We Collect
                      <span className="text-slate-400 text-xs group-open:hidden">Tap to expand</span>
                      <span className="text-slate-400 text-xs hidden group-open:inline">Tap to collapse</span>
                    </summary>
                    <div className="px-5 pb-5 text-slate-300 space-y-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Email address</strong>: Used for login and account management.</li>
                        <li><strong>Workout logs & fitness data</strong>: Exercises, sets, reps, and progress notes.</li>
                        <li><strong>Body photos & scans</strong>: To track visual progress and AI composition estimates.</li>
                        <li><strong>App usage data</strong>: Basic usage to maintain functionality.</li>
                        <li><strong>Purchase history</strong>: Not applicable (no purchases or subscriptions).</li>
                      </ul>
                    </div>
                  </details>

                  <details id="use" className="group rounded-xl border border-white/10 bg-white/5">
                    <summary className="cursor-pointer select-none px-4 py-3 text-slate-200 font-semibold">How We Use Information</summary>
                    <div className="px-5 pb-5 text-slate-300">
                      We use your data strictly to provide core app functionality: tracking progress, generating metrics, and storing scans securely. We do not use your data for advertising.
                    </div>
                  </details>

                  <details id="payments" className="group rounded-xl border border-white/10 bg-white/5">
                    <summary className="cursor-pointer select-none px-4 py-3 text-slate-200 font-semibold">Payments</summary>
                    <div className="px-5 pb-5 text-slate-300">
                      We do not currently process payments or offer subscriptions. If payments are introduced in the future, they will be processed securely by Apple via the App Store. We will not collect or store payment details. See Apple’s{' '}
                      <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Privacy Policy</a> for details.
                    </div>
                  </details>

                  <details id="sharing" className="group rounded-xl border border-white/10 bg-white/5">
                    <summary className="cursor-pointer select-none px-4 py-3 text-slate-200 font-semibold">Data Sharing</summary>
                    <div className="px-5 pb-5 text-slate-300">
                      We do not sell, rent, or share your data with third parties. Data remains tied to your account and is only accessible to you when signed in.
                    </div>
                  </details>

                  <details id="security" className="group rounded-xl border border-white/10 bg-white/5">
                    <summary className="cursor-pointer select-none px-4 py-3 text-slate-200 font-semibold">Data Security</summary>
                    <div className="px-5 pb-5 text-slate-300">
                      User content (including photos and scans) is stored securely. Data is encrypted in transit and stored only to display progress to the logged‑in user.
                    </div>
                  </details>

                  <details id="contact" className="group rounded-xl border border-white/10 bg-white/5">
                    <summary className="cursor-pointer select-none px-4 py-3 text-slate-200 font-semibold">Contact & Support</summary>
                    <div className="px-5 pb-5 text-slate-300">
                      For questions, support, or privacy concerns, contact us at{' '}
                      <a href="mailto:support@gresspro.org" className="text-brand hover:underline">support@gresspro.org</a>.
                    </div>
                  </details>
                </motion.div>

                <motion.p
                  className="text-sm text-muted mt-8 italic text-center"
                  variants={itemVariants}
                >
                  <Calendar className="w-4 h-4 inline-block mr-2" />
                  Effective Date: September 2025
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
                  variants={itemVariants}
                >
                  <Link href="/support" className="cta group">
                    <Mail className="w-4 h-4 mr-2" />
                    Get Support
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
