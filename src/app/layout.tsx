import { Footer } from '@/components'
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
      <body className='bg-primary-body'>{children}</body>
      <Footer/>
    </html>
  )
}
