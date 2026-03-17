import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Co-Lab — The Sales Room Your Buyers Will Actually Engage With',
  description:
    'Co-Lab gives every deal its own personalized sales room — interactive, trackable, and built to move buyers forward. Real-time intent scoring, buyer analytics, and AI-powered pod building.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Co-Lab — Stop Sending Decks. Start Closing Deals.',
    description:
      'Personalized digital sales rooms with real-time buyer intent scoring. Built for modern sales teams.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="bg-[#FAFBFF] text-[#0D1117] antialiased font-[Inter,sans-serif]">
        {children}
      </body>
    </html>
  )
}
