const testimonials = [
  {
    quote: "The quality is unmatched. Every item I've purchased has become a staple in my home.",
    author: "Sarah M.",
    location: "Portland, OR",
  },
  {
    quote: "I love that each product has a story behind it. You can feel the craftsmanship.",
    author: "James K.",
    location: "Brooklyn, NY",
  },
  {
    quote: "Maison has completely changed how I think about everyday objects. Truly special.",
    author: "Elena R.",
    location: "Austin, TX",
  },
]

function StarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">
            Recognition
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-accent" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-foreground italic text-pretty">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="mt-4">
                <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
