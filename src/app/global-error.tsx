'use client'

import './globals.css'
import type { Metadata } from 'next'
import { DevTools } from '@/components/dev'
import localFont from 'next/font/local'
import Explorer from './_components/explorer'
import { FooterError } from './_components/footer'
import { TabBarError } from './_components/tab-bar'
import Providers from '@/components/providers/providers'
import AppContainer from '@/components/app-container'

const geistSans = localFont({
  src: './_fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './_fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'David Llanes',
  description: 'Full-Stack Software Engineer',
}

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.log(error)

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground bg-popover font-sans`}
      >
        <Providers>
          <AppContainer>
            <TabBarError />
            <Explorer />
            <div className="font-mono grid place-content-center bg-background p-8">
              <h2 className="text-[clamp(1.3rem,5vw,3rem)] font-bold text-destructive">
                Something definitely went wrong!!!
              </h2>
              <p className="mb-6 text-[clamp(0.875rem,2vw,1rem)]">
                If you are the developer, check the console for more
                information.
              </p>
              <button
                onClick={() => reset()}
                className="underline font-bold hover:text-destructive place-self-start"
              >
                Try again
              </button>
            </div>
            <FooterError />
            <DevTools />
          </AppContainer>
        </Providers>
      </body>
    </html>
  )
}
