"use client"

import Image from "next/image"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Artisan Ceramic Mug",
    price: 38,
    image: "/images/product-1.jpg",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Heritage Leather Tote",
    price: 185,
    image: "/images/product-2.jpg",
    tag: null,
  },
  {
    id: 3,
    name: "Soy Wax Candle",
    price: 42,
    image: "/images/product-3.jpg",
    tag: "New",
  },
  {
    id: 4,
    name: "Merino Wool Socks",
    price: 28,
    image: "/images/product-4.jpg",
    tag: null,
  },
  {
    id: 5,
    name: "Brass Desk Lamp",
    price: 220,
    image: "/images/product-5.jpg",
    tag: "Limited",
  },
  {
    id: 6,
    name: "Linen Throw Blanket",
    price: 95,
    image: "/images/product-6.jpg",
    tag: null,
  },
]

function HeartIcon({ filled, className }: { filled: boolean; className?: string }) {
  return filled ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />

        {product.tag && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
            {product.tag}
          </span>
        )}

        <button
          type="button"
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <HeartIcon filled={liked} className={`h-4 w-4 ${liked ? "text-accent" : "text-foreground"}`} />
        </button>

        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            type="button"
            className="w-full bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wider py-3 hover:opacity-90 transition-opacity"
          >
            Add to Bag
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">${product.price}</p>
      </div>
    </div>
  )
}

export function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">
              Curated Selection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
              Featured Products
            </h2>
          </div>
          <button
            type="button"
            className="text-sm font-medium uppercase tracking-wider text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
