// src/app/page.tsx
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Main Content */}
      <main className="flex flex-col">
        <Hero />
        {/* Altri componenti possono essere aggiunti qui */}
      </main>

      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center p-6 bg-black/50 backdrop-blur-sm z-10">
        <a
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          href="#catalogo"
        >
          Catalogo
        </a>
        <a
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          href="#contatti"
        >
          Contatti
        </a>
        <a
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          href="#about"
        >
          Chi Siamo →
        </a>
      </footer>
    </div>
  );
}