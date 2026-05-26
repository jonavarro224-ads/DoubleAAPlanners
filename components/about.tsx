import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Eleanor James, Luxury Wedding Planner"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl tracking-[0.1em] text-foreground">
              The Art of Celebration
            </h2>
            <div className="w-16 h-px bg-primary" />
            <p className="text-muted-foreground leading-relaxed">
              For over fifteen years, Eleanor James Co. has been crafting extraordinary 
              celebrations that reflect the unique love stories of our clients. From intimate 
              garden gatherings to grand destination affairs, we believe every detail matters.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach is deeply personal. We listen, we dream alongside you, and we 
              bring your vision to life with meticulous attention to detail and an unwavering 
              commitment to excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Southern California, producing events worldwide.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 text-xs tracking-[0.25em] uppercase text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
