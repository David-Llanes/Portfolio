import { CodeXml } from 'lucide-react'
import TabItem from './tab-item'
import { cn } from '@/lib/utils'

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

export function TabBarError() {
  return (
    <nav className="header h-10 bg-card max-w-full overflow-x-hidden">
      <ul className="flex items-center h-full divide-x-[1px] divide-border w-full">
        <li
          className={cn(
            'px-4 text-xs md:text-sm h-full content-center flex gap-2 items-center font-semibold text-muted-foreground hover:text-foreground hover:underline hover:cursor-pointer overflow-hidden',
            'text-destructive border-t-2 border-destructive hover:text-destructive bg-background'
          )}
        >
          <CodeXml className="size-3 md:size-4 text-[#f35e2a] shrink-0" />
          <h2 className="text-ellipsis overflow-hidden text-nowrap">
            error.html
          </h2>
        </li>
      </ul>
    </nav>
  )
}
