export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-foreground mb-6">
          Begin Your Story
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-12">
          We would be honored to learn about your celebration. Please share a few 
          details and we will be in touch to schedule a consultation.
        </p>
        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-transparent border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-transparent border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Event Date
            </label>
            <input
              type="text"
              placeholder="MM/DD/YYYY or TBD"
              className="w-full px-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
              Tell us about your vision
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-transparent border border-border text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-12 py-4 bg-foreground text-background text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
