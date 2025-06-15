import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="relative h-6 w-6 overflow-hidden">
              <div className="absolute inset-0 rounded-full border border-accent/50"></div>
              <div className="absolute inset-1 rounded-full bg-accent/20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-accent font-bold text-xs">V</div>
            </div>
            <span className="font-space-grotesk font-bold text-sm">
              <span className="text-accent">Vansh</span>Gupta
            </span>
          </div>

          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link
              href="https://github.com/vanshgupta4452"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/vansh-gupta-0338422a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} • Built with Next.js & Tailwind
          </div>
        </div>
      </div>
    </footer>
  )
}
