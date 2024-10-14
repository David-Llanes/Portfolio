import './globals.css'
import type { Metadata } from 'next'
import { DevTools } from '@/components/dev'
import localFont from 'next/font/local'
import Sidebar from './_components/sidebar'
import Footer from './_components/footer'
import TabBar from './_components/tab-bar'
import Providers from '@/components/providers/providers'
import AppContainer from '@/components/app-container'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'David Llanes',
  description: 'Fullstack Software Engineer',
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
            <Sidebar />
            {children}
            <Footer />
            <DevTools />
          </AppContainer>
        </Providers>
      </body>
    </html>
  )
}
