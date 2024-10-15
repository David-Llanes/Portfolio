'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

const THEMES = ['light', 'dark', 'system']

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="rounded-lg border p-1 flex items-center gap-1 w-fit bg-background">
      {THEMES.map((t) => (
        <Button
          key={t}
          size="sm"
          className={cn(
            'px-2 rounded-md text-muted-foreground hover:bg-background/50 uppercase',
            `${
              theme === t
                ? 'bg-popover text-foreground hover:bg-popover'
                : 'text-muted-foreground/70'
            }`
          )}
          variant="ghost"
          onClick={() => setTheme(t)}
        >
          {t}
        </Button>
      ))}
    </div>
  )
}

export function ThemeToggle2() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem]  transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Oscuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          Automático
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
