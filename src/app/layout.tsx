import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'GressPro - Progress Tracking and Body Composition Insights',
  description: 'Track your lifts, body composition, and how your physique changes over time with side-by-side visuals, scans, and progress logs.',
  keywords: 'fitness, progress tracking, body composition, workout logs, iOS app',
  authors: [{ name: 'GressPro' }],
  openGraph: {
    title: 'GressPro - Progress Tracking and Body Composition Insights',
    description: 'Track your lifts, body composition, and how your physique changes over time.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
