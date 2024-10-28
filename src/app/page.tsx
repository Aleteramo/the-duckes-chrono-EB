// src/app/page.tsx
import Hero from '@/components/sections/hero'
import WatchGallery from '@/components/sections/featured-watches'
import InstagramFeed from '@/components/sections/instagram-feed'
import ContactCTA from '@/components/sections/contact-cta'
import Footer from '@/components/ui/footer'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="relative z-10">
        <Hero />
        <div className="container mx-auto px-4 space-y-20">
          <WatchGallery />
          <InstagramFeed />
          <ContactCTA />
          <Footer />
        </div>
      </div>
    </main>
  )
}