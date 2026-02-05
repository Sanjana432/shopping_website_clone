import Link from "next/link"

export function PromoBanner() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-primary text-primary-foreground rounded-sm px-8 py-16 md:px-16 md:py-20 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70 mb-4">
            Our Promise
          </p>
          <h2 className="font-serif text-3xl md:text-5xl max-w-2xl mx-auto leading-tight text-balance">
            Every piece is chosen with care, crafted with purpose
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/80 max-w-lg mx-auto text-pretty">
            We partner with independent artisans and sustainable makers to bring you objects that are built to last and designed to be cherished.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center mt-8 px-8 py-3.5 bg-primary-foreground text-primary text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
