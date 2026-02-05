"use client"

import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">
            Stay in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            Join Our Community
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Receive 10% off your first order, exclusive updates, inspiration, and more.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-card border border-border text-foreground text-sm rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
