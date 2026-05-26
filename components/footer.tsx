import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
            </svg>
          </Link>
        </div>
        <p className="text-xs tracking-[0.15em] uppercase text-primary mb-2">
          Southern CA Studio
        </p>
        <p className="text-xs tracking-[0.1em] text-muted-foreground mb-2">
          Producing Events Worldwide
        </p>
        <p className="text-xs tracking-[0.05em] text-muted-foreground mb-8">
          mailing address: ELEANOR JAMES CO, 1521 MARTINGALE PL, COWAN HEIGHTS, CA 92705 USA
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; 2013 - 2026 Eleanor James Co
        </p>
      </div>
    </footer>
  )
}
