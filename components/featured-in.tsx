import Link from "next/link"

const publications = [
  "Vogue",
  "Harper&apos;s Bazaar",
  "Over the Moon",
  "Martha Stewart Weddings",
  "People",
  "InStyle",
]

export function FeaturedIn() {
  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm tracking-[0.1em] text-muted-foreground italic">
          As featured in{" "}
          {publications.map((pub, i) => (
            <span key={pub}>
              <span className="text-primary/80">{pub}</span>
              {i < publications.length - 1 && ", "}
              {i === publications.length - 2 && "and "}
            </span>
          ))}
          <span className="text-primary/80">and more...</span>
        </p>
        <Link
          href="#portfolio"
          className="inline-block mt-8 px-8 py-3 border border-foreground/30 text-xs tracking-[0.25em] uppercase text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          See Our Events
        </Link>
      </div>
    </section>
  )
}
