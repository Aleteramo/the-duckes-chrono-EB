// src/components/sections/hero/index.tsx
"use client"
import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PARTICLES_DATA = [
  // Prima riga
  { x: 10, y: 10, size: 6, delay: 0, color: "#D4AF37" },
  { x: 30, y: 15, size: 7, delay: 0.1, color: "#FFD700" },
  { x: 50, y: 12, size: 5, delay: 0.2, color: "#BDB76B" },
  { x: 70, y: 18, size: 6, delay: 0.3, color: "#D4AF37" },
  { x: 90, y: 14, size: 7, delay: 0.4, color: "#FFD700" },
  // ... [stesse particelle di prima]
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const particlesRef = useRef<Array<HTMLDivElement | null>>([])
  const linesRef = useRef<Array<SVGLineElement | null>>([])
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  
  // Stato per gestire l'idratazione
  const [isMounted, setIsMounted] = useState(false)

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  useGSAP(() => {
    if (!containerRef.current || !isMounted) return

    const tl = gsap.timeline()

    if (titleRef.current) {
      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5")
    }

    if (subtitleRef.current) {
      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
      }, "-=0.7")
    }

    // Animazione delle particelle
    particlesRef.current.forEach((particle, index) => {
      if (particle) {
        gsap.from(particle, {
          opacity: 0,
          scale: 0,
          duration: 2,
          delay: index * 0.1,
          ease: "power2.out",
          repeat: -1,
          yoyo: true
        })
      }
    })

    // Mouse parallax effect
    const moveElements = (e: MouseEvent) => {
      if (!isMounted) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPos = (clientX / innerWidth - 0.5) * 2
      const yPos = (clientY / innerHeight - 0.5) * 2

      if (titleRef.current) {
        gsap.to(titleRef.current, {
          x: xPos * 20,
          y: yPos * 20,
          duration: 1
        })
      }

      if (subtitleRef.current) {
        gsap.to(subtitleRef.current, {
          x: xPos * 10,
          y: yPos * 10,
          duration: 1
        })
      }
    }

    window.addEventListener('mousemove', moveElements)

    return () => {
      window.removeEventListener('mousemove', moveElements)
    }
  }, [isMounted])

  const setParticleRef = (el: HTMLDivElement | null, index: number) => {
    particlesRef.current[index] = el
  }

  const setLineRef = (el: SVGLineElement | null, index: number) => {
    linesRef.current[index] = el
  }

  if (!isMounted) {
    return <div className="h-screen bg-black" />
  }

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-zinc-900 opacity-30" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {PARTICLES_DATA.map((p1, i) => 
            PARTICLES_DATA.slice(i + 1).map((p2, j) => {
              const dist = Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y)
              if (dist < 30) {
                const index = i * PARTICLES_DATA.length + j
                return (
                  <line
                    key={`${i}-${j}`}
                    ref={(el) => setLineRef(el, index)}
                    x1={`${p1.x}%`}
                    y1={`${p1.y}%`}
                    x2={`${p2.x}%`}
                    y2={`${p2.y}%`}
                    stroke="rgba(212, 175, 55, 0.1)"
                    strokeWidth="0.5"
                  />
                )
              }
              return null
            })
          )}
        </svg>

        {PARTICLES_DATA.map((particle, i) => (
          <div
            key={i}
            ref={(el) => setParticleRef(el, i)}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              filter: 'blur(0.5px) drop-shadow(0 0 2px rgba(212, 175, 55, 0.5))',
            }}
          />
        ))}

        <div className="absolute inset-0 backdrop-blur-[0.3px] pointer-events-none" />
      </div>

      <div className="relative z-10 text-center space-y-6">
        <h1
          ref={titleRef}
          className="font-serif text-6xl md:text-8xl font-bold text-white"
        >
          The Dukes Chrono
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto"
        >
          Collezione esclusiva di orologi vintage di prestigio
        </p>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="h-16 w-0.5 bg-white/20" />
      </div>
    </div>
  )
}