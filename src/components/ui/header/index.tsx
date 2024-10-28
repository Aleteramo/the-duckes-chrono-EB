// src/components/ui/header/index.tsx
"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-serif text-xl text-white hover:opacity-80 transition-opacity"
          >
            TDC
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/catalogo" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Catalogo
            </Link>
            <Link 
              href="/chi-sono" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Chi Sono
            </Link>
            <Link 
              href="/servizi" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Servizi
            </Link>
            <Link 
              href="/contatti" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contatti
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:opacity-80 transition-opacity"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </motion.header>
  )
}