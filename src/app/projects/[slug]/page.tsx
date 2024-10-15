export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="bg-background grid place-content-center font-mono">
      <h1 className="text-6xl px-8 font-bold text-string">{params.slug}</h1>
    </main>
  )
}
