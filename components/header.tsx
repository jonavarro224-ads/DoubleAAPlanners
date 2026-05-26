"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Instagram } from "lucide-react"

const navLinks = [
  { href: "#portfolio", label: "portfolio" },
  { href: "#about", label: "about" },
  { href: "#press", label: "press" },
  { href: "#contact", label: "inquiries" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Left Nav - Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-center">
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-foreground">
              ELEANOR
            </h1>
            <p className="font-serif text-xl md:text-2xl tracking-[0.3em] text-foreground -mt-1">
              JAMES
            </p>
            <p className="font-serif text-sm tracking-[0.4em] text-muted-foreground mt-0.5">
              CO
            </p>
          </Link>

          {/* Right Nav - Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </li>
          </ul>

          {/* Social - Mobile */}
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-border pt-6">
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
