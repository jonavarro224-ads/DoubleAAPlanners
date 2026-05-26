import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="relative aspect-[4/5] md:aspect-[3/2] w-full overflow-hidden">
          <Image
            src="/images/hero-wedding.jpg"
            alt="Elegant bride walking through garden with flower girls attending her veil"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="mt-6 text-right">
          <p className="text-xs tracking-[0.15em] text-muted-foreground italic">
            photo | Jose Villa
          </p>
        </div>
      </div>
    </section>
  )
}
