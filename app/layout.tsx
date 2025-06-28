import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrosiTrack - Sales Dashboard',
  description: 'A stylish, dark-mode sales dashboard for wholesalers and eCommerce teams',
  keywords: 'dashboard, sales, analytics, ecommerce, wholesale',
  authors: [{ name: 'GrosiTrack Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}