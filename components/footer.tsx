import Link from "next/link"

const footerLinks = {
  Shop: [
    { label: "All Products", href: "#" },
    { label: "Home", href: "#" },
    { label: "Accessories", href: "#" },
    { label: "Self Care", href: "#" },
    { label: "Gift Cards", href: "#" },
  ],
  About: [
    { label: "Our Story", href: "#" },
    { label: "Artisans", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Support: [
    { label: "Contact", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
    { label: "FAQ", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:w-1/3">
            <Link href="/" className="font-serif text-2xl text-foreground">
              Maison
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs text-pretty">
              Thoughtfully curated home goods and lifestyle essentials designed to elevate your everyday.
            </p>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-xs font-medium uppercase tracking-widest text-foreground mb-4">
                  {category}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            2026 Maison. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
