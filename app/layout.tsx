import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Clínica San Roque",
  description: "Empresa privada especializada en el tratamiento de heridas y servicios de enfermería.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900`}>{children}</body>
    </html>
  )
}

