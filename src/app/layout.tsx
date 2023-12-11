"use client"
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/components/Main/Header";
import {Syne, Lato} from 'next/font/google'
import {ApolloWrapper} from "@/apollo/ApolloWraper";
import {RecoilRoot} from "recoil";


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


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={syne.className}>
        <ApolloWrapper>
            <RecoilRoot>
                <Header/>
                {children}
            </RecoilRoot>
        </ApolloWrapper>
        </body>
        </html>
    )
}
