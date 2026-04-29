import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const siteUrl = 'https://colabapp.ai'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: 'Co-Lab — Digital Sales Rooms for B2B Sales Teams',
  description:
    'Co-Lab is the sales enablement workspace where AEs build buyer-facing micro-sites for every deal. Track engagement, run mutual action plans, and close deals between meetings — with an AI coach along for the ride.',

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
    title: 'Co-Lab — Digital Sales Rooms that Move Deals Forward',
    description:
      'Build a buyer-facing micro-site for every deal. Track engagement, run mutual action plans, and close more deals — with an AI coach that helps draft the first version.',
    type: 'website',
    url: siteUrl,
    siteName: 'Co-Lab',
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Co-Lab — Digital sales rooms for every deal',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Co-Lab — Every Deal Deserves Its Own Space',
    description:
      'The sales enablement workspace where AEs build buyer-facing micro-sites for every deal. Engagement tracking, mutual action plans, and an AI deal coach.',
    images: [`${siteUrl}/og-image.png`],
  },

  keywords: [
    'digital sales room',
    'sales enablement platform',
    'deal room software',
    'buyer engagement',
    'mutual action plan',
    'sales micro-site',
    'sales workspace',
    'buyer intent scoring',
    'AI deal coach',
    'sales analytics',
  ],

  authors: [{ name: 'Co-Lab' }],
  creator: 'Co-Lab',
  publisher: 'Co-Lab',

  alternates: {
    canonical: siteUrl,
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body className="bg-[#FBFBFD] text-[#0B0E1A] antialiased font-[Inter,ui-sans-serif,system-ui,sans-serif]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
