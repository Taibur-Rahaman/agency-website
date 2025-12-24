import type { Metadata } from 'next'
import './globals.css'
import LanguageProvider from '@/components/LanguageProvider'

export const metadata: Metadata = {
  title: 'Omix Solutions - Digital Solutions That Power Growth',
  description: 'We help businesses build strong online presence through smart design, powerful development, and result-driven digital marketing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-dark-bg text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

