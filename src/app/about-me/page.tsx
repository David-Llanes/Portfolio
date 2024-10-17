import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'I’m David Llanes, a full-stack web developer experienced in technologies like React, Next.js, Node.js, and Docker. I specialize in building efficient and optimized applications for both front-end and back-end development.',
}

export default function AboutMePage() {
  return (
    <main className="content bg-background overflow-x-hidden">
      <h1 className="text-6xl font-bold text-params text-center my-auto font-mono">
        About-me
      </h1>
    </main>
  )
}
