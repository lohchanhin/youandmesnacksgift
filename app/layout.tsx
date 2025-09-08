import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "You & Me Gifts - Bobo Balloons & Chocolate Gift Boxes",
  description:
    "Premium gift boxes, Bobo balloons, and chocolate arrangements for all your special occasions. From RM6.90 to RM120.",
  keywords: ["bobo 氣球", "巧克力禮盒", "花束禮品", "畢業禮物", "零食禮盒"],
  generator: "v0.app",
  icons: {
    icon: "/favicon-32x32.png",
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <a
            href="https://wa.me/60183137277"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
            }}
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
        </LanguageProvider>
      </body>
    </html>
  )
}
