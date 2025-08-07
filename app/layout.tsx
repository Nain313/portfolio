import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Hasnain - Digital Business Specialist',
  description: 'Digital business specialist focusing on e-commerce operations, Shopify store management, and Facebook Ads optimization.',
  keywords: 'E-commerce, Shopify, Facebook Ads, Digital Marketing, Adobe Photoshop, Business Strategy',
  authors: [{ name: 'Muhammad Hasnain' }],
  creator: 'Muhammad Hasnain',
  openGraph: {
    title: 'Muhammad Hasnain - Digital Business Specialist',
    description: 'Digital business specialist focusing on e-commerce operations, Shopify store management, and Facebook Ads optimization.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 