import './globals.css'
import type { Metadata } from 'next'
import NabBar from './components/NavBar'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'La Cliftoneta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NabBar/>
      {children}
    </html>
  )
}
