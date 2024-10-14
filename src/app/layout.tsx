import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Sidebar from './_components/sidebar'
import Footer from './_components/footer'
import TabBar from './_components/tab-bar'
import { ThemeProvider } from '@/components/providers/theme'
import { DevTools } from '@/components/dev'

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="layout h-dvh overflow-hidden max-w-[1920px] mx-auto min-[1921px]:border-x">
            <TabBar />
            <Sidebar />
            <main className="main overflow-y-auto bg-background">
              {children}
            </main>
            <Footer />
          </div>
          <DevTools />
        </ThemeProvider>
      </body>
    </html>
  )
}
