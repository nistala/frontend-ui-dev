import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Modern App",
    template: "%s | Modern App",
  },
  description: "A modern, production-grade Next.js application",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Modern App Team" }],
  creator: "Modern App",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://modern-app.com",
    title: "Modern App",
    description: "A modern, production-grade Next.js application",
    siteName: "Modern App",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern App",
    description: "A modern, production-grade Next.js application",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pb-12">{children}</main>
            <Footer  />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
