'use client'

import { useState } from 'react'
import Link from 'next/link'

export function PortfolioNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-sm bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-serif font-bold text-accent">Sanjana</div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
