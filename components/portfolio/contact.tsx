'use client'

import { useState } from 'react'

export function PortfolioContact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Reset form
    setEmail('')
    setMessage('')
    // Reset message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to discuss ideas? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-serif text-lg font-bold text-accent mb-2">Email</h3>
              <a 
                href="mailto:sanjana@example.com"
                className="text-muted-foreground hover:text-accent transition-colors break-all"
              >
                sanjana@example.com
              </a>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-serif text-lg font-bold text-accent mb-2">GitHub</h3>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                github.com/sanjana
              </a>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-serif text-lg font-bold text-accent mb-2">Location</h3>
              <p className="text-muted-foreground">
                Vellore, Tamil Nadu<br />
                India
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="font-serif text-lg font-bold text-accent mb-3">Follow</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.229-1.663-2.229-1.002 0-1.673.671-1.947 1.335-.1.243-.125.581-.125.92v5.543h-3.554s.047-8.981 0-9.921h3.554v1.404c.44-.68 1.227-1.646 2.99-1.646 2.186 0 3.829 1.428 3.829 4.502v5.661zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.968.771-1.71 1.867-1.71.098 0 .196.007.291.019 1.144 0 1.916.759 1.916 1.71 0 .948-.772 1.706-1.867 1.706zm1.649 11.597h-3.298V8.532h3.298v11.92zM24 0H0v24h24V0zm-5.553 20.452h-3.554v-5.569c0-1.328-.474-2.229-1.663-2.229-1.002 0-1.673.671-1.947 1.335-.1.243-.125.581-.125.92v5.543h-3.554s.047-8.981 0-9.921h3.554v1.404c.44-.68 1.227-1.646 2.99-1.646 2.186 0 3.829 1.428 3.829 4.502v5.661z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Tell me about your project or idea..."
                rows={5}
                className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200"
            >
              {isSubmitted ? 'Message sent!' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
          <p>Built with React & Next.js • Designed for simplicity & clarity</p>
        </div>
      </div>
    </section>
  )
}
