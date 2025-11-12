import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SmartLockCapital - Divine ETH Treasury Management | Next-Gen Protocol",
  description:
    "Transcendent time-locked Ethereum vaults with crystalline security architecture. The new paradigm for institutional ETH treasury management.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "16x16", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
      <body className={`font-sans antialiased`} style={{ backgroundColor: '#000000' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
