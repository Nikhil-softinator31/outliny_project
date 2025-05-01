import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'
import { Poppins } from 'next/font/google'
import { Aldrich } from 'next/font/google'
import { Inter } from 'next/font/google'

import { AdminBar } from '@/components/AdminBar'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import BackgroundVideo from './main/BackgroundVideo'
import Footer from './main/Footer'
import Navbar from './Navbar/page'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300','500', '400', '700'],
  variable: '--font-poppins',
})

const aldrich = Aldrich({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aldrich',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Adjust weights as needed
  variable: '--font-inter',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        poppins.variable,
        aldrich.variable,
        inter.variable,
      )}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Navbar />
          <main>{children}</main>
          <Footer />  
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
