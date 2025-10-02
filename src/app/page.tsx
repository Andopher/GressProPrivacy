import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import FeaturesSection from '@/components/FeaturesSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

// Lazy load heavy components
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false,
})

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
