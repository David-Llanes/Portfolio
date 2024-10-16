'use client'

import { ThemeToggle } from '@/components/theme-toggle'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

import {
  ChevronRight,
  CodeXml,
  CopyMinus,
  Ellipsis,
  Folder,
  Menu,
  Settings,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type Node = {
  name: string
  route: string
  isLink?: boolean
  files?: Node[]
}

const NODES: Node[] = [
  {
    name: 'src',
    route: '/',
    files: [
      {
        name: 'index.html',
        isLink: true,
        route: '/',
      },
      {
        name: 'about-me.html',
        isLink: true,
        route: '/about-me',
      },
      {
        name: 'Projects',
        isLink: true,
        route: '/projects',
        files: [
          {
            name: 'project-1.html',
            isLink: true,
            route: '/projects/project-1',
          },
          {
            name: 'project-2.html',
            isLink: true,
            route: '/projects/project-2',
          },
        ],
      },
      {
        name: 'contact.html',
        isLink: true,
        route: '/contact',
      },
    ],
  },
]

export default function Explorer() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)

  return (
    <header
      className={cn(
        'explorer whitespace-nowrap overflow-hidden bg-popover text-[clamp(0.75rem,1.2vw,0.875rem)] select-none flex',
        'md:w-[50px] md:border-r md:transition-[width]',
        'max-md:w-full max-md:h-[50px] max-md:flex-col max-md:border-b max-md:transition-[height]',
        isOpen && ['md:w-[clamp(50px,34vw,320px)]', 'max-md:h-[40vh]']
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
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="size-6 hover:cursor-pointer hover:text-foreground" />
        </button>
        <Popover>
          <PopoverTrigger>
            <Settings className="size-6 hover:cursor-pointer hover:text-foreground active:rotate-45 duration-100" />
          </PopoverTrigger>
          <PopoverContent align="start" alignOffset={100}>
            <p className="font-bold text-sm">SETTINGS</p>
            <Separator />
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* //! Explorer Collapsable */}
      <ScrollArea className="grow bg-card">
        <nav className={cn('pb-4', !isOpen && 'hidden')}>
          <div className="h-10 px-4 flex justify-between items-center">
            <span className="font-semibold">EXPLORER</span>
            <Ellipsis className="size-4 hover:cursor-pointer hover:text-foreground text-muted-foreground" />
          </div>

          <div className="px-4 flex w-full justify-between items-center">
            <p className="font-bold h-6 content-center">MY PORTFOLIO</p>
            <CopyMinus className="size-4 rotate-180 hover:cursor-pointer text-muted-foreground hover:text-foreground" />
          </div>

          {/* //! Componente recursivo */}
          <ul className="relative text-[clamp(0.875rem,1.6vw,1rem)] font-bold text-muted-foreground">
            {NODES.map((node) => (
              <FileSystemItem
                key={node.name}
                node={node}
                onSelectItem={handleClose}
              />
            ))}
          </ul>
        </nav>
      </ScrollArea>
    </header>
  )
}

// TODO: Hacer que con un before se vea que componente esta siendo seleccionado.
function FileSystemItem({
  node,
  onSelectItem,
}: {
  node: Node
  onSelectItem: () => void
}) {
  const [isOpen, setIsOpen] = useState(() => node.name === 'src')

  return (
    <li key={node.name}>
      <h3 className={cn('flex items-center gap-1.5 py-0.5 pl-4 relative')}>
        {node.files && node.files.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <ChevronRight
              className={cn(
                'size-4 text-muted-foreground transition-transform duration-100',
                isOpen && 'rotate-90'
              )}
            />
          </button>
        )}

        {node.isLink ? (
          <Link
            href={node.route}
            className={cn(
              'items-center gap-1.5 inline-flex overflow-hidden',
              'hover:cursor-pointer hover:text-foreground hover:underline'
            )}
            onClick={onSelectItem}
          >
            {node.files ? (
              <Folder className="size-4 text-muted-foreground shrink-0" />
            ) : (
              <CodeXml className="size-4 text-orange-600 shrink-0" />
            )}
            <span className="text-ellipsis overflow-hidden text-nowrap">
              {node.name}
            </span>
          </Link>
        ) : (
          <div className="items-center gap-1.5 inline-flex overflow-hidden ">
            {node.files ? (
              <Folder className="size-4 text-muted-foreground shrink-0" />
            ) : (
              <CodeXml className="size-4 text-orange-600 shrink-0" />
            )}
            <span className="text-ellipsis overflow-hidden text-nowrap">
              {node.name}
            </span>
          </div>
        )}
      </h3>

      {isOpen && (
        <ul className="overflow-hidden ml-6 border-l border-l-border">
          {node.files?.map((file) => (
            <FileSystemItem
              key={file.name}
              node={file}
              onSelectItem={onSelectItem}
            />
          ))}
        </ul>
      )}
    </li>
  )
}
