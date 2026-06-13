import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ziad Altom | Software Engineer & Back-End Developer',
  description: 'Junior Back-End Developer with strong expertise in ASP.NET Core, Clean Architecture, DDD, Supabase, PostgreSQL, React.js, and Agentic AI. Building scalable APIs and modern web systems.',
  keywords: [
    'Ziad Altom', 
    'Back-End Developer', 
    'ASP.NET Core', 
    'Clean Architecture', 
    'DDD', 
    'Supabase', 
    'PostgreSQL', 
    'React.js', 
    'C#', 
    'Django', 
    'Agentic AI'
  ],
  authors: [{ name: 'Ziad Altom', url: 'https://linkedin.com/in/ziad-altom' }],
  openGraph: {
    title: 'Ziad Altom | Software Engineer & Back-End Developer',
    description: 'Building production-ready APIs with ASP.NET Core, Supabase, and modern architectures.',
    images: [
      {
        url: '/og-image.jpg', // You can add a nice hero image later
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}