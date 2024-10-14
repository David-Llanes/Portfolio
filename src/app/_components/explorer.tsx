'use client'

import { cn } from '@/lib/utils'
import { CopyMinus, Ellipsis, Menu, Settings } from 'lucide-react'
import { useState } from 'react'

export default function Explorer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={cn(
        'explorer grid whitespace-nowrap overflow-hidden bg-popover text-[clamp(0.75rem,1.2vw,0.875rem)]',
        'md:grid-cols-[auto_auto]'
      )}
    >
      <div
        className={cn(
          'flex md:flex-col items-center justify-between py-3 text-muted-foreground',
          'md:min-w-[clamp(50px,5vw,50px)]',
          'max-md:px-3'
        )}
      >
        <Menu
          className="size-6 hover:cursor-pointer hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Settings className="size-6 hover:cursor-pointer hover:text-foreground" />
      </div>
      <nav
        className={cn(
          'transition-all bg-card',
          'md:border-r md:w-0',
          'max-md:border-b max-md:h-0 ',
          isOpen && 'md:w-[clamp(0px,25vw,250px)] max-md:h-[250px]'
        )}
      >
        <div className="p-4 flex justify-between items-center">
          <p className="font-semibold">EXPLORER</p>
          <Ellipsis className="size-3 hover:cursor-pointer hover:text-foreground text-muted-foreground" />
        </div>
        <div className="px-4 pb-4 flex items-center justify-between">
          <p className="font-bold">MY PORTFOLIO</p>
          <CopyMinus className="size-3 rotate-180 hover:cursor-pointer text-muted-foreground hover:text-foreground" />
        </div>
      </nav>
    </header>
  )
}
