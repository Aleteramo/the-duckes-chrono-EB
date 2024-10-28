// src/app/shop/catalogo/page.tsx
import Link from 'next/link'

interface Brand {
  name: string;
  count: number;
  path: string;
}

const brands: Brand[] = [
  {
    name: 'Rolex',
    count: 5,
    path: '/catalogo/rolex'
  },
  {
    name: 'Omega',
    count: 8,
    path: '/catalogo/omega'
  },
  {
    name: 'Longines',
    count: 3,
    path: '/catalogo/longines'
  }
];

export default async function CatalogoPage() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif">
            The Dukes Chrono
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Collezione esclusiva di orologi vintage selezionati con cura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <Link 
              href={brand.path} 
              key={brand.name}
              className="group relative aspect-square bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-2xl font-serif">{brand.name}</h2>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <p className="text-sm">
                  {brand.count} {brand.count === 1 ? 'orologio' : 'orologi'}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Per informazioni e disponibilità contattaci su 
            <a 
              href="https://instagram.com/thedukes.chrono" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 ml-1 transition-colors"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}