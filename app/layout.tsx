import type { Metadata } from "next"
import { JetBrains_Mono } from 'next/font/google'
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "../components/theme-provider"

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Luis",
  description: "Personal website and digital garden",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <body className="font-mono">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

