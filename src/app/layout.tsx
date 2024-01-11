import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const dm_sans = DM_Sans({ subsets: ['latin'] })

// const testFont = localFont({src: './fonts/BungeeSpice-Regular.ttf'})

export const metadata: Metadata = {
  title: 'Phansite!',
  description: 'Austin\'s portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  )
}
