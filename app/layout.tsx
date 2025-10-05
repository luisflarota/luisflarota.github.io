import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Luis Larota",
  description: "Personal website and digital garden",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white font-mono antialiased">
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">{children}</main>
      </body>
    </html>
  )
}