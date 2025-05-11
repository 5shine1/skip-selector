import type { Metadata } from 'next'
import { Instrument_Sans, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'REMWaste',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${instrumentSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
