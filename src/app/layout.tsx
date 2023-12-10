import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Main/Header";
import {Syne, Lato} from 'next/font/google'
import {ApolloWrapper} from "@/apollo/ApolloWraper";


const syne = Syne({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-syne',
})

// const lato = Lato({
//     subsets: ['latin'],
//     display: 'swap',
//     variable: '--font-lato',
// })

export const metadata: Metadata = {
  title: 'SpaceX',
  description: 'SpaceX',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={syne.className}>
      <ApolloWrapper>
      <Header/>
      {children}
      </ApolloWrapper>
      </body>
    </html>
  )
}
