import './globals.css'
import { Inter } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
