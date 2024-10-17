import { CopyMinus, Ellipsis } from 'lucide-react'
import FileSystemItem from './file-system-item'
import { ScrollArea } from '@/components/ui/scroll-area'

type Node = {
  name: string
  route: string
  isLink?: boolean
  files?: Node[]
}

const NODES: Node[] = [
  {
    name: 'src',
    route: '',
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

export default function Explorer({
  onSelectItem,
}: {
  onSelectItem: () => void
}) {
  return (
    <nav className="flex flex-col h-full">
      <div className="shrink-0 h-10 px-4 flex justify-between items-center">
        <span className="font-semibold">EXPLORER</span>
        <Ellipsis className="size-4 hover:cursor-pointer hover:text-foreground text-muted-foreground" />
      </div>

      <div className="shrink-0 px-4 flex w-full justify-between items-center">
        <p className="font-bold h-6 content-center">MY PORTFOLIO</p>
        <CopyMinus className="size-4 rotate-180 hover:cursor-pointer text-muted-foreground hover:text-foreground" />
      </div>

      {/* //! Componente recursivo */}
      {/* //TODO Creo que el isolate no es necesario */}
      <ScrollArea className="grow">
        <ul className="relative text-[clamp(0.875rem,1.6vw,1rem)] font-bold text-muted-foreground pb-4">
          {NODES.map((node) => (
            <FileSystemItem
              key={node.name}
              node={node}
              onSelectItem={onSelectItem}
            />
          ))}
        </ul>
      </ScrollArea>
    </nav>
  )
}
