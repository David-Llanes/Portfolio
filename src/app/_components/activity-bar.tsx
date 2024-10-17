'use client'

import { useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Menu, Settings } from 'lucide-react'
import Explorer from './explorer'

export default function ActivityBar() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)

  return (
    <header
      className={cn(
        'explorer whitespace-nowrap overflow-hidden bg-popover text-[clamp(0.75rem,1.2vw,0.875rem)] select-none flex',
        'md:w-[50px] md:border-r md:transition-[width]',
        'max-md:w-full max-md:h-[50px] max-md:flex-col max-md:border-b max-md:transition-[height]',
        isOpen && [
          'md:w-[clamp(50px,34vw,320px)]',
          'max-md:h-[clamp(50px,40vh,320px)]',
        ]
      )}
    >
      {/* //! Menu bar */}
      <div
        className={cn(
          'shrink-0 grow-0 flex items-center justify-between text-muted-foreground',
          'md:w-[50px] md:h-full md:flex-col md:py-3',
          'max-md:w-full max-md:h-[50px] max-md:px-3'
        )}
      >
        <button name="menu" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="size-6 hover:cursor-pointer hover:text-foreground" />
        </button>
        <Popover>
          <PopoverTrigger name="settings">
            <Settings className="size-6 hover:cursor-pointer hover:text-foreground active:rotate-45 duration-100" />
          </PopoverTrigger>
          <PopoverContent align="start" alignOffset={100}>
            <p className="font-bold text-sm">SETTINGS</p>
            <Separator className="mb-3 mt-1" />
            <ThemeToggle />
          </PopoverContent>
        </Popover>
      </div>

      {/* //! Collapsable */}
      {/* overflow-auto se puso para que el ScrollArea funcione */}
      <div className={cn('grow bg-card overflow-auto', !isOpen && 'hidden')}>
        <Explorer onSelectItem={handleClose} />
      </div>
    </header>
  )
}
