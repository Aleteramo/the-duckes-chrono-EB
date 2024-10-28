// src/app/shop/catalogo/[brand]/page.tsx
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Watches = {
  [key: string]: {
    id: string;
    name: string;
    status: string;
    images: string[];
    specs: {
      ref?: string;
      size: string;
      movement: string;
      period?: string;
    }
  }[]
}

// Questo sarà sostituito con dati reali dal database
const watches: Watches = {
  rolex: [
    {
      id: 'oyster-perpetual-36',
      name: 'Oyster Perpetual 36',
      status: 'PRIVATE COLLECTION',
      images: ['/images/watches/rolex/oyster-perpetual/1.jpg'],
      specs: {
        ref: '116000',
        size: '36mm',
        movement: 'Automatico'
      }
    }
  ],
  omega: [
    {
      id: 'deville-60',
      name: 'De Ville anni 60',
      status: 'AVAILABLE',
      images: ['/images/watches/omega/deville/1.jpg'],
      specs: {
        period: '1960-1969',
        size: '30mm',
        movement: 'Carica manuale'
      }
    }
  ]
}

export default async function BrandPage({ 
  params 
}: { 
  params: Promise<{ brand: string }> 
}) {
  // Await the params
  const { brand } = await params;
  const brandWatches = watches[brand] || [];

  return (
    <div className="py-20 px-4">
      <motion.h1 
        className="text-4xl md:text-5xl font-serif text-center mb-12 capitalize"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {brand}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {brandWatches.map((watch) => (
          <Link href={`/catalogo/${brand}/${watch.id}`} key={watch.id}>
            <motion.div 
              className="group relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={watch.images[0]}
                  alt={watch.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded text-sm">
                  {watch.status}
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-serif">{watch.name}</h2>
                <p className="text-sm text-gray-400">
                  {Object.entries(watch.specs).map(([key, value]) => (
                    <span key={key} className="block capitalize">
                      {key}: {value}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}