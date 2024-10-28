// src/app/layout.tsx
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import CustomCursor from '@/components/ui/cursor'
import Header from '@/components/ui/header'
import "./globals.css"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://the-duckes-chrono-eb.vercel.app'),
  title: "The Dukes Chrono | Orologi di Prestigio",
  description: "Collezione esclusiva di orologi vintage di prestigio",
  keywords: ["orologi", "vintage", "lusso", "Rolex", "Omega", "Longines"],
  authors: [{ name: "The Dukes Chrono" }],
  openGraph: {
    title: "The Dukes Chrono | Orologi di Prestigio",
    description: "Collezione esclusiva di orologi vintage di prestigio",
    type: "website",
    locale: "it_IT",
    siteName: "The Dukes Chrono",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Dukes Chrono',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Dukes Chrono | Orologi di Prestigio",
    description: "Collezione esclusiva di orologi vintage di prestigio",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body 
        className={`${inter.variable} font-sans antialiased bg-black text-white relative min-h-screen`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}