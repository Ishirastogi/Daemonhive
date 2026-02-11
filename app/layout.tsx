import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'DaemonHive Technologies | Software Solutions & IT Agency',
  description: 'Enterprise-grade software solutions, app development, and cloud integration. DaemonHive Technologies builds the future of digital innovation.',
  keywords: ['software development', 'IT agency', 'cloud integration', 'app development', 'DaemonHive'],
}

export const viewport: Viewport = {
  themeColor: '#0f1219',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
