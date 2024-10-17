import { cn } from '@/lib/utils'
import { ChevronRight, CodeXml, Folder } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type Node = {
  name: string
  route: string
  isLink?: boolean
  files?: Node[]
}

export default function FileSystemItem({
  node,
  onSelectItem,
}: {
  node: Node
  onSelectItem: () => void
}) {
  const [isOpen, setIsOpen] = useState(() => node.name === 'src')
  const pathName = usePathname()

  return (
    <li
      key={node.name}
      className={cn(
        'isolate',
        'item-selected before:bg-primary/20',
        node.route === pathName && 'before:block'
      )}
    >
      <h3
        id="h3"
        className={cn('flex items-center gap-1.5 py-0.5 pl-4 relative isolate')}
      >
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
              'hover:cursor-pointer hover:text-foreground hover:underline',
              pathName === node.route && 'text-primary hover:text-primary'
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
