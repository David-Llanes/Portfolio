import React from 'react'

export default function Footer() {
  return (
    <footer className="footer h-8 flex gap-2 items-center text-xs">
      <div className="bg-primary h-full content-center px-2 text-sm font-bold text-secondary-foreground">
        contact-me
      </div>
      <div>2021 David Llanes</div>
      <div>
        <a href="www.linkedin.com/in/david-llanes" target="_blank">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
