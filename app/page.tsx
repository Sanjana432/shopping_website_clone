import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { Products } from "@/components/products"
import { PromoBanner } from "@/components/promo-banner"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <PromoBanner />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
