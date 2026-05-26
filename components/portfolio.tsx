import Image from "next/image"

const galleries = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Luxurious barn wedding reception with chandeliers",
    publication: "VOGUE",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Elegant table setting with floral arrangements",
    publication: "BAZAAR",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Garden wedding ceremony with greenery arch",
    publication: "Martha Stewart Weddings",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-primary-foreground text-center mb-4">
          PRESS & FEATURES
        </h2>
        <p className="text-center text-primary-foreground/70 text-sm tracking-[0.1em] mb-16">
          Our work as seen in
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {galleries.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <span className="text-xs tracking-[0.2em] text-primary-foreground/80 border border-primary-foreground/30 px-4 py-2">
                  {item.publication}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
