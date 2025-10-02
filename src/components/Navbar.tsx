'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X, Calendar, Download } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/support', label: 'Support' },
  ]

  return (
    <div className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-background/80 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/GressPro_transparent.png" 
            alt="GressPro" 
            width={32} 
            height={32} 
            className="rounded-sm transition-transform group-hover:scale-105" 
          />
          <span className="text-slate-100 font-bold text-lg">GressPro</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
          
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Calendar className="w-3 h-3" />
              <span>iOS Sep 2025</span>
            </div>
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand border border-brand/20 rounded-lg hover:bg-brand/20 transition-colors duration-200 text-sm font-medium"
              disabled
            >
              <Download className="w-3 h-3" />
              Coming Soon
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/10">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="block text-slate-300 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                <Calendar className="w-3 h-3" />
                <span>iOS Release: September 2025</span>
              </div>
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand border border-brand/20 rounded-lg w-full justify-center text-sm font-medium"
                disabled
              >
                <Download className="w-3 h-3" />
                Download — Coming Soon
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


