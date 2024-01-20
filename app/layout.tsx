import type { Metadata } from 'next'
import NavBar from '@/app/NavBar'
import { Concert_One } from 'next/font/google'
import backgroundImage from "@/public/Frame.svg"
import './globals.css'

const concert_one = Concert_One({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koala Dex',
  description: 'Cross-chain swap by Koala',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={concert_one.className } style={{backgroundImage: `url(/Frame.svg)`, backgroundRepeat:'false'} }>
        <div   style={{position:'absolute', top:0, left: 0, width: "100vw", height: "100vh",backdropFilter:'blur(10px)', }} />
        <NavBar></NavBar>
        <main className='p-5'>{children}</main>
      </body>
    </html>
  )
}
