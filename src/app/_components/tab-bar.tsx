import { CodeXml } from 'lucide-react'

export default function TabBar() {
  return (
    <nav className="header h-10 bg-card">
      <ul className="flex items-center h-full divide-x-[1px] divide-border">
        <li className="px-4 text-sm bg-background h-full content-center border-t-2 border-primary flex gap-2 items-center text-primary">
          <CodeXml className="size-4 text-[#f35e2a]" />
          index.html
        </li>

        {/* ejemplos */}
        <li className="px-4 text-sm bg-card h-full content-center flex gap-2 items-center">
          <CodeXml className="size-4 text-[#f35e2a]" />
          about-me.html
        </li>

        <li className="px-4 text-sm bg-card h-full content-center flex gap-2 items-center">
          <CodeXml className="size-4 text-[#f35e2a]" />
          contact-me.html
        </li>
      </ul>
    </nav>
  )
}
