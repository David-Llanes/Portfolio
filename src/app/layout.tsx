import './globals.css'
import type { Metadata } from 'next'
import { DevTools } from '@/components/dev'
import localFont from 'next/font/local'
import ActivityBar from './_components/activity-bar'
import Footer from './_components/footer'
import TabBar from './_components/tab-bar'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground bg-popover font-sans`}
      >
        <Providers>
          <AppContainer>
            <TabBar />
            <ActivityBar />
            {children}
            <Footer />
            <DevTools />
          </AppContainer>
        </Providers>
      </body>
    </html>
  )
}
