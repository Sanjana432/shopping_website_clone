import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-20 lg:py-28">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              New Season
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground text-balance">
              Thoughtfully curated for modern living
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-lg mx-auto lg:mx-0 text-pretty">
              Discover everyday objects designed with intention. From handcrafted ceramics to premium textiles, each piece tells a story of quality and care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="#products"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm"
              >
                Shop Now
              </Link>
              <Link
                href="#categories"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-foreground text-foreground text-sm font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors rounded-sm"
              >
                Explore Collections
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/hero.jpg"
                alt="Curated collection of premium lifestyle goods"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
