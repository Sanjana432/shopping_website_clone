import Link from 'next/link'

export function PortfolioHero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Navigation and intro */}
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <div className="text-accent font-mono text-sm">// Welcome to my portfolio</div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Sanjana
            </h1>
            <p className="text-xl text-muted-foreground">
              Developer & AI Researcher
            </p>
          </div>

          <div className="flex gap-4 pt-4 border-t border-border">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.229-1.663-2.229-1.002 0-1.673.671-1.947 1.335-.1.243-.125.581-.125.92v5.543h-3.554s.047-8.981 0-9.921h3.554v1.404c.44-.68 1.227-1.646 2.99-1.646 2.186 0 3.829 1.428 3.829 4.502v5.661zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.968.771-1.71 1.867-1.71.098 0 .196.007.291.019 1.144 0 1.916.759 1.916 1.71 0 .948-.772 1.706-1.867 1.706zm1.649 11.597h-3.298V8.532h3.298v11.92zM24 0H0v24h24V0zm-5.553 20.452h-3.554v-5.569c0-1.328-.474-2.229-1.663-2.229-1.002 0-1.673.671-1.947 1.335-.1.243-.125.581-.125.92v5.543h-3.554s.047-8.981 0-9.921h3.554v1.404c.44-.68 1.227-1.646 2.99-1.646 2.186 0 3.829 1.428 3.829 4.502v5.661z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right side - Content grid */}
        <div className="space-y-6">
          <div className="p-6 border border-border rounded-lg hover:border-accent transition-colors">
            <h3 className="font-serif text-lg font-bold mb-2 text-accent">About</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pursuing my B.Tech in Computer Science at Vellore Institute of Technology with a focus on AI and deep learning. Passionate about building innovative solutions that bridge the gap between research and real-world applications.
            </p>
          </div>

          <div className="p-6 border border-border rounded-lg hover:border-accent transition-colors">
            <h3 className="font-serif text-lg font-bold mb-2 text-accent">Location</h3>
            <p className="text-muted-foreground">Vellore, Tamil Nadu, India</p>
          </div>

          <div className="p-6 border border-border rounded-lg hover:border-accent transition-colors">
            <h3 className="font-serif text-lg font-bold mb-2 text-accent">Get in Touch</h3>
            <p className="text-muted-foreground mb-3">email@example.com</p>
            <Link href="#contact" className="text-accent hover:text-accent/80 transition-colors font-mono text-sm">
              → Send message
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
