import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with David Llanes, a software engineer specializing in full-stack web development, open to internships, part-time jobs, and eager to learn and grow in new technologies.',
}

export default function ContactPage() {
  return (
    <main className="content bg-background overflow-x-hidden">
      <h1 className="text-6xl font-bold text-comment text-center my-auto font-mono">
        Contact
      </h1>
    </main>
  )
}
