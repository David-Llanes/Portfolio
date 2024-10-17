import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of full-stack web development projects, from internship platforms to automated systems. Each project demonstrates my expertise in modern technologies and best practices.',
}

export default function ProjectsPage() {
  return (
    <main className="content bg-background overflow-x-hidden">
      <h1 className="text-6xl font-bold text-keyword text-center my-auto font-mono">
        Projects
      </h1>
    </main>
  )
}
