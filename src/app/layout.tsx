// src/app/layout.tsx
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import type { Metadata } from 'next'
import Header from '@/components/ui/header'
import CustomCursor from '@/components/ui/cursor'
import SmoothScroll from '@/components/providers/smooth-scroll'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'The Dukes Chrono | Orologi Vintage',
  description: 'Collezione esclusiva di orologi vintage selezionati con cura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white antialiased`}>
        <CustomCursor />
        <Header />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}