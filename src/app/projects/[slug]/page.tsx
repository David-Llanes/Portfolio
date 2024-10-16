export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="content bg-background overflow-x-hidden">
      <h1 className="text-6xl font-bold text-string text-center my-auto font-mono">
        {params.slug}
      </h1>
    </main>
  )
}
