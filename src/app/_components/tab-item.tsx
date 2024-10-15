'use client'

import { cn } from '@/lib/utils'
import { CodeXml } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TabItem({
  href,
  name,
  extension,
}: {
  href: string
  name: string
  extension: string
}) {
  const pathname = usePathname()
  const isSelected = pathname === href
  const fileName = `${name}.${extension}`

  return (
    <li className="h-full overflow-hidden">
      <Link
        href={href}
        className={cn(
          'px-4 text-xs sm:text-sm bg-card h-full flex gap-1.5 items-center font-semibold text-muted-foreground border-r-border/70 border-r border-t-2 border-t-card',
          'hover:text-foreground hover:underline hover:cursor-pointer',
          isSelected &&
            'text-primary border-t-2 border-r-border border-t-primary hover:text-primary bg-background'
        )}
      >
        <CodeXml className="size-3 md:size-4 text-orange-600 shrink hidden sm:block" />
        <h2 className="text-ellipsis overflow-hidden text-nowrap">
          {fileName}
        </h2>
        {/* <h2 className="text-ellipsis overflow-hidden text-nowrap block sm:hidden">
          {name}
        </h2> */}
      </Link>
    </li>
  )
}
