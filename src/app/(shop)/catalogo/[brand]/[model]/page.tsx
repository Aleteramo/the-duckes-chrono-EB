// src/app/shop/catalogo/[brand]/[model]/page.tsx
import WatchDetail from '@/components/sections/watch-detail'

export default async function Page({ 
  params 
}: { 
  params: Promise<{ brand: string; model: string }> 
}) {
  // Await the params
  const { brand, model } = await params;

  const watch = {
    name: `${brand} ${model}`,
    brand,
    status: 'PRIVATE COLLECTION',
    images: [
      '/api/placeholder/400/400',
      '/api/placeholder/400/400',
      '/api/placeholder/400/400',
      '/api/placeholder/400/400'
    ],
    description: {
      it: "Questo magnifico esemplare non è in vendita, ma resta una pietra miliare per chi ama gli orologi intramontabili. Perfetto per ogni occasione, grazie alle sue dimensioni e al design unisex, incarna eleganza e precisione.",
      en: "This stunning piece is not for sale, but it remains a milestone for those who appreciate timeless watches. Perfect for any occasion, with its unisex design and versatile size, it embodies elegance and precision."
    },
    specs: {
      ref: '116000',
      size: '36mm',
      sku: 'V18526',
      movement: 'Automatico',
      model,
      gender: 'Unisex'
    }
  }

  return <WatchDetail watch={watch} />
}