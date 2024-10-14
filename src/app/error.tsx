'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="font-mono grid place-content-center bg-background p-8">
      <h2 className="text-[clamp(1.3rem,5vw,3rem)] font-bold text-secondary">
        Something went wrong!
      </h2>
      <p className="mb-6 text-[clamp(0.875rem,2vw,1rem)]">
        If you are the developer, check the console for more information.
      </p>
      <button
        onClick={() => reset()}
        className="underline font-bold hover:text-secondary place-self-start"
      >
        Try again
      </button>
    </div>
  )
}
