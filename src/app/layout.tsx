import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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

const siteUrl = 'https://colabapp.ai'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: 'Co-Lab — Digital Sales Rooms for B2B Sales Teams',
  description:
    'Co-Lab is a digital sales room platform that helps B2B sales teams create personalized workspaces (Pods) to share proposals, track buyer engagement, and close deals. AI-powered, with Salesforce, HubSpot, and Gong integrations.',

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: 'Co-Lab — AI-Native Digital Sales Rooms',
    description:
      'AI builds personalized deal rooms from your call transcripts. Real-time intent scoring, buyer analytics, and AI-powered deal intelligence.',
    type: 'website',
    url: siteUrl,
    siteName: 'Co-Lab',
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Co-Lab — AI-native digital sales rooms that build themselves',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Co-Lab — AI Builds the Deal Room. You Close the Deal.',
    description:
      'AI-native sales rooms built from call transcripts. Real-time intent scoring and automated deal intelligence.',
    images: [`${siteUrl}/og-image.png`],
  },

  keywords: [
    'AI sales room',
    'digital sales room',
    'AI deal room',
    'AI pod builder',
    'buyer intent scoring',
    'sales enablement',
    'mutual action plan',
    'deal intelligence',
    'sales analytics',
    'Gong integration',
    'call transcript AI',
  ],

  authors: [{ name: 'Co-Lab' }],
  creator: 'Co-Lab',
  publisher: 'Co-Lab',

  alternates: {
    canonical: siteUrl,
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
        <Analytics />
      </body>
    </html>
  )
}
