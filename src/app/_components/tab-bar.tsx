import { CodeXml } from 'lucide-react'
import TabItem from './tab-item'
import { cn } from '@/lib/utils'

const TABS = [
  { href: '/', name: 'index', extension: 'html' },
  { href: '/about-me', name: 'about-me', extension: 'html' },
  { href: '/projects', name: 'projects', extension: 'html' },
  { href: '/contact', name: 'contact', extension: 'html' },
]

export default function TabBar() {
  return (
    <nav className="header h-10 bg-card max-w-full overflow-x-hidden">
      <ul className="flex items-center h-full w-full">
        {TABS.map((tab) => (
          <TabItem
            key={tab.href}
            href={tab.href}
            name={tab.name}
            extension={tab.extension}
          />
        ))}
      </ul>
    </nav>
  )
}

export function TabBarError() {
  return (
    <nav className="header h-10 bg-card max-w-full overflow-x-hidden">
      <ul className="flex items-center h-full w-full">
        <li
          className={cn(
            'px-4 text-xs md:text-sm h-full content-center flex gap-2 items-center font-semibold text-muted-foreground hover:text-foreground hover:underline hover:cursor-pointer overflow-hidden border-r-border/70 border-r',
            'text-destructive border-t-2 border-destructive hover:text-destructive bg-background'
          )}
        >
          <CodeXml className="size-3 md:size-4 text-orange-600 shrink-0" />
          <h2 className="text-ellipsis overflow-hidden text-nowrap">
            error.html
          </h2>
        </li>
      </ul>
    </nav>
  )
}
