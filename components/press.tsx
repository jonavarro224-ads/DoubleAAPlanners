const pressFeatures = [
  {
    source: "Vogue",
    title: "The Best Wedding Planners in the U.S., Canada and Overseas",
  },
  {
    source: "Harper&apos;s Bazaar",
    title: "Little Black Book: The Top Wedding Planners in the World",
  },
  {
    source: "Brides",
    title: "Best in Class: The Top Wedding Planners and Event Designers",
  },
]

export function Press() {
  return (
    <section id="press" className="py-20 md:py-32 bg-secondary px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-foreground text-center mb-16">
          In the Press
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-background border border-border hover:shadow-lg transition-shadow"
            >
              <p className="text-xs tracking-[0.25em] uppercase text-primary mb-4">
                {feature.source}
              </p>
              <h3 className="font-serif text-lg text-foreground leading-relaxed">
                {feature.title}
              </h3>
              <a
                href="#"
                className="inline-block mt-6 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {"Read More >"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
