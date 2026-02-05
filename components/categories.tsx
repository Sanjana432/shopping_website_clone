import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Home",
    description: "Elevate your space",
    image: "/images/category-home.jpg",
    count: "24 products",
  },
  {
    name: "Accessories",
    description: "Refined essentials",
    image: "/images/category-accessories.jpg",
    count: "18 products",
  },
  {
    name: "Self Care",
    description: "Nurture your ritual",
    image: "/images/category-self-care.jpg",
    count: "12 products",
  },
]

export function Categories() {
  return (
    <section id="categories" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">
            Browse by
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            Our Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href="#"
              className="group relative overflow-hidden rounded-sm aspect-[3/4]"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
                <span className="text-xs font-medium uppercase tracking-widest text-background/70 mb-1">
                  {category.count}
                </span>
                <h3 className="font-serif text-3xl text-background mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-background/80">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
