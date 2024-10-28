import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
          Eduardo Belletti
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Collezione esclusiva di orologi vintage di prestigio, 
          selezionati con passione e competenza.
        </p>
      </section>

      {/* Featured Watches Grid */}
      <section className="px-4">
        <h2 className="font-serif text-2xl md:text-3xl mb-8">In Evidenza</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Rolex Datejust',
              ref: '1601',
              year: '1970',
              imageUrl: 'https://placehold.co/400x400',
            },
            {
              name: 'Omega Speedmaster',
              ref: '145.022',
              year: '1968',
              imageUrl: 'https://placehold.co/400x400',
            },
            {
              name: 'Patek Philippe Calatrava',
              ref: '3919',
              year: '1985',
              imageUrl: 'https://placehold.co/400x400',
            }
          ].map((watch, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
              <div className="aspect-square relative">
                <Image
                  src={watch.imageUrl}
                  alt={watch.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-xl mb-2">{watch.name}</h3>
                <p className="text-gray-400">Ref. {watch.ref} - Anno {watch.year}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/catalogo"
            className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-200"
          >
            Scopri il Catalogo
          </Link>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="px-4">
        <h2 className="font-serif text-2xl md:text-3xl mb-8">Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="aspect-square relative bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/300x300"
                alt="Instagram post"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>               
        <div className="text-center mt-8">
          <a 
            href="https://instagram.com/eduardobelletti" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-200"
          >
            Seguici su Instagram
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-20">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          Interesse per un orologio?
        </h2>
        <p className="text-gray-400 mb-8">
          Contattami per maggiori informazioni o per fissare un appuntamento.
        </p>
        <Link 
          href="/contatti"
          className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-200"
        >
          Contattaci
        </Link>
      </section>
    </div>
  )
}