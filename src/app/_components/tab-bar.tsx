'use client'

import { cn } from '@/lib/utils'
import { CodeXml } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TabBar() {
  return (
    <nav className="header h-10 bg-card max-w-full overflow-x-hidden">
      <ul className="flex items-center h-full divide-x-[1px] divide-border w-full">
        <TabItem href="/">index.html</TabItem>
        <TabItem href="/about-me">about-me.html</TabItem>
        <TabItem href="/projects">projects.html</TabItem>
        <TabItem href="/contact">contact.html</TabItem>
      </ul>
    </nav>
  )
}

function TabItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isSelected = pathname === href

  return (
    <Link href={href} className="h-full">
      <li
        className={cn(
          'px-4 text-xs md:text-sm bg-card h-full content-center flex gap-2 items-center font-semibold text-muted-foreground hover:text-foreground hover:underline hover:cursor-pointer overflow-hidden',
          isSelected &&
            'text-primary border-t-2 border-primary hover:text-primary'
        )}
      >
        <CodeXml className="size-3 md:size-4 text-[#f35e2a] shrink-0" />
        <h2 className="text-ellipsis overflow-hidden text-nowrap">
          {children}
        </h2>
      </li>
    </Link>
  )
}
