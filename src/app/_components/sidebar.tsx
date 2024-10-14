'use client'

import { cn } from '@/lib/utils'
import { CopyMinus, Ellipsis, Menu, Settings } from 'lucide-react'
import { useState } from 'react'

export default function Aside() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <header className="explorer grid grid-cols-[50px_1fr] w-fit whitespace-nowrap overflow-hidden bg-popover">
      <div className="flex flex-col items-center py-3 w[50px] text-muted-foreground">
        <Menu
          className="size-7  hover:cursor-pointer hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Settings className="mt-auto size-7 hover:rotate-12 hover:cursor-pointer hover:text-foreground" />
      </div>
      <nav
        className={cn(
          'w-[230px] transition-all border-r bg-card',
          !isOpen && 'w-0'
        )}
      >
        <div className="text-xs p-4 flex justify-between items-center">
          <p>EXPLORER</p>
          <Ellipsis className="size-4 hover:cursor-pointer" />
        </div>
        <div className="text-xs px-4 flex items-center justify-between">
          <p>DAVID LLANES PORTFOLIO</p>
          <CopyMinus className="size-4 rotate-180 hover:cursor-pointer opacity-50 hover:opacity-100" />
        </div>
      </nav>
    </header>
  )
}
