'use client'

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
          'transition-all bg-card flex flex-col gap-2',
          'md:border-r md:w-0',
          'max-md:border-b max-md:h-0 ',
          isOpen && 'md:w-[clamp(0px,30vw,300px)] max-md:h-[250px]'
        )}
      >
        <div className="h-10 px-4 flex justify-between items-center">
          <p className="font-semibold">EXPLORER</p>
          <Ellipsis className="size-4 hover:cursor-pointer hover:text-foreground text-muted-foreground" />
        </div>

        <div className="px-4 py-0.5 flex w-full justify-between items-center">
          <p className="font-bold">MY PORTFOLIO</p>
          <CopyMinus className="size-4 rotate-180 hover:cursor-pointer text-muted-foreground hover:text-foreground" />
        </div>

        {/* //! Componente recursivo */}
        <ul className="relative">
          {NODES.map((node) => (
            <FileSystemItem key={node.name} node={node} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

// TODO: Hacer que con un before se vea que componente esta siendo seleccionado.
function FileSystemItem({ node }: { node: Node }) {
  const [isOpen, setIsOpen] = useState(() => node.name === 'src')

  return (
    <li
      key={node.name}
      className="text-[clamp(0.875rem,1.6vw,1rem)] font-bold text-muted-foreground"
    >
      <h3 className={cn('flex items-center gap-1.5 py-0.5 pl-4')}>
        {node.files && node.files.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <ChevronRight
              className={`size-4 text-muted-foreground ${
                isOpen && 'rotate-90'
              }`}
            />
          </button>
        )}

        {node.isLink ? (
          <Link
            href={node.route}
            className="items-center gap-1.5 inline-flex overflow-hidden hover:cursor-pointer hover:text-foreground"
          >
            {node.files ? (
              <Folder className="size-4 text-muted-foreground" />
            ) : (
              <CodeXml className="size-4 text-orange-600 shrink-0" />
            )}
            <span className="text-ellipsis overflow-hidden text-nowrap">
              {node.name}
            </span>
          </Link>
        ) : (
          <div className="items-center gap-1.5 inline-flex overflow-hidden">
            {node.files ? (
              <Folder className="size-4 text-muted-foreground" />
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
        <ul className="overflow-hidden pl-6">
          {node.files?.map((file) => (
            <FileSystemItem key={file.name} node={file} />
          ))}
        </ul>
      )}
    </li>
  )
}
