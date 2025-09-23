import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Asian Full Stack Developer Portfolio - Modern web applications with cutting-edge technology",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <CustomCursor />
          <Navigation />
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
