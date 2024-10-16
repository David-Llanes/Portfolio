import { ScrollArea } from '@/components/ui/scroll-area'

export default function Home() {
  return (
    <ScrollArea className="main">
      <main className="bg-background content h-full overflow-x-hidden">
        <div className="h-[200vh] text-center pt-10 text-5xl font-bold flex flex-col gap-2 items-center">
          <p className="text-muted-foreground bg-muted self-stretch my-2">
            Selección <span className="text-foreground">- Normal -</span>
          </p>

          <button className="bg-gradient-to-r from-grad-start to-grad-end text-primary-foreground p-3 rounded-lg mb-2">
            Gradient
          </button>

          <button className="bg-destructive p-3 rounded-lg mb-2 text-destructive-foreground">
            Destructive
          </button>

          <button className="bg-primary text-primary-foreground p-3 rounded-lg mb-2">
            Primary
          </button>

          <button className="bg-secondary text-secondary-foreground p-3 rounded-lg mb-2">
            Secondary
          </button>

          <button className="bg-string text-secondary-foreground p-3 rounded-lg mb-2">
            String
          </button>

          <button className="bg-keyword text-secondary-foreground p-3 rounded-lg mb-2">
            Keyword
          </button>

          <button className="bg-function text-secondary-foreground p-3 rounded-lg mb-2">
            Function
          </button>

          <button className="bg-class text-secondary-foreground p-3 rounded-lg mb-2">
            Class
          </button>

          <button className="bg-params text-secondary-foreground p-3 rounded-lg mb-2">
            Params
          </button>

          <button className="bg-comment text-secondary-foreground p-3 rounded-lg mb-2">
            Comment
          </button>
        </div>
      </main>
    </ScrollArea>
  )
}
