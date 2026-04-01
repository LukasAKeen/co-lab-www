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
  title: 'Co-Lab — AI Builds the Deal Room. You Close the Deal.',
  description:
    'Co-Lab is the AI-native digital sales room. AI analyzes your calls and auto-builds personalized pods — so every deal moves forward on autopilot.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Co-Lab — AI-Native Digital Sales Rooms',
    description:
      'AI builds personalized deal rooms from your call transcripts. Real-time intent scoring, buyer analytics, and AI-powered deal intelligence.',
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
      <body className="bg-[#FAFBFF] text-[#0D1117] antialiased font-[Inter,ui-sans-serif,system-ui,sans-serif]">
        {children}
      </body>
    </html>
  )
}
