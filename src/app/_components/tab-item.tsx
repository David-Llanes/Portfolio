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
    <Link href={href} className="h-full overflow-hidden">
      <li
        className={cn(
          'px-4 text-sm bg-card h-full content-center flex gap-1.5 items-center font-semibold text-muted-foreground hover:text-foreground hover:underline hover:cursor-pointer',
          isSelected &&
            'text-primary border-t-2 border-primary hover:text-primary bg-background'
        )}
      >
        <CodeXml className="size-3 md:size-4 text-orange-600 shrink-0 hidden sm:block" />
        <h2 className="text-ellipsis overflow-hidden text-nowrap hidden sm:block">
          {fileName}
        </h2>
        <h2 className="text-ellipsis overflow-hidden text-nowrap block sm:hidden">
          {name}
        </h2>
      </li>
    </Link>
  )
}
