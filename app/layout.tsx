import React from "react"
import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: 'Portfolio | Developer & Researcher',
  description: 'Passionate about AI, deep learning, and building innovative solutions. Explore my projects, experience, and technical expertise.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_dmSerif.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
