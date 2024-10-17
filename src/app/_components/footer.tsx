import GitHubCopilot from '@/components/icons/github-copilot'
import Github from '@/components/icons/github'
import LinkedIn from '@/components/icons/linkedin'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer h-[30px] flex items-center text-xs border-t divide-x">
      <Link
        href="/contact"
        className="bg-primary h-full content-center px-2 font-bold text-card text-xs "
      >
        2024 © David Llanes
      </Link>

      <Link
        href="https://www.linkedin.com/in/david-llanes"
        target="_blank"
        className="flex items-center gap-2 px-3 hover:bg-accent h-full text-muted-foreground hover:text-foreground"
      >
        <LinkedIn className="size-4" />
        <span className="hidden sm:flex items-center gap-1 font-bold">
          LinkedIn <ExternalLink size={12} />
        </span>
      </Link>

      <Link
        href="https://github.com/David-Llanes"
        target="_blank"
        className="flex items-center gap-2 px-3 hover:bg-accent h-full text-muted-foreground hover:text-foreground"
      >
        <Github className="size-4" />
        <span className="hidden sm:flex items-center gap-1 font-bold">
          GitHub <ExternalLink size={12} />
        </span>
      </Link>

      <button
        aria-label="Virtual Assistant"
        className="ml-auto px-1 h-full flex items-center hover:bg-accent text-destructive dark:text-function group"
      >
        <GitHubCopilot className="size-5 animate-bounce group-hover:paused" />
      </button>
    </footer>
  )
}

export function FooterError() {
  return (
    <footer className="footer h-[40px] flex items-center text-xs border-t divide-x">
      <Link
        href="/contact"
        className="bg-destructive h-full content-center px-2 font-bold text-primary-foreground text-xs "
      >
        2024 © David Llanes
      </Link>

      <Link
        href="https://www.linkedin.com/in/david-llanes"
        target="_blank"
        className="flex items-center gap-2 px-3 hover:bg-accent h-full text-muted-foreground hover:text-foreground"
      >
        <LinkedIn className="size-5" />
        <span className="hidden sm:flex items-center gap-1 font-bold">
          LinkedIn <ExternalLink size={14} />
        </span>
      </Link>

      <Link
        href="https://github.com/David-Llanes"
        target="_blank"
        className="flex items-center gap-2 px-3 hover:bg-accent h-full text-muted-foreground hover:text-foreground"
      >
        <Github className="size-5" />
        <span className="hidden sm:flex items-center gap-1 font-bold">
          GitHub <ExternalLink size={14} />
        </span>
      </Link>
    </footer>
  )
}
