import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AFI SPACE FX',
  description: 'AFI SPCE is a group of community that a unique blend of expertise in forex trading to empower individuals seeking success in the financial markets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        {children}
        <SpeedInsights />
        </body>
    </html>
  )
}
