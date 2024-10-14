import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="font-mono grid place-content-center bg-background p-8">
      <h2 className="text-[clamp(1.3rem,5vw,3rem)] font-bold text-string">
        404 - Not Found
      </h2>
      <p className="mb-6 text-[clamp(0.875rem,2vw,1rem)]">
        Could not find requested resource
      </p>
      <Link href="/" className="underline font-bold hover:text-string">
        Return Home
      </Link>
    </div>
  )
}
