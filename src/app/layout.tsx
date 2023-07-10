import { Footer } from '@/components'
import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Codingbrowny',
  description: 'Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary-body">
        {children}
        <Footer />
      </body>
      <Script src='/scripts/index.js' />
    </html>
  );
}
