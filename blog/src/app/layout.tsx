import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://trmaphi.work'),
  title: 'Truong Ma Phi — Systems, Cloud & AI',
  description:
    'Distributed systems engineer building resilient, high-performance platforms across cloud infrastructure, AI, and trading. Explore my work, projects, and open-source experiments.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Truong Ma Phi — Systems, Cloud & AI',
    description:
      'Systems that scale. Ideas that ship. Explore my work across distributed systems, cloud infrastructure, AI, and trading.',
    url: 'https://trmaphi.work',
    siteName: 'Truong Ma Phi',
    type: 'website',
  },
  twitter: { card: 'summary', creator: '@trmaphi' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
