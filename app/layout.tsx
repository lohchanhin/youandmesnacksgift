import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { I18nProvider } from "@/lib/i18n"
import { getLocale } from "next-intl/server"
import { LanguageSwitcher } from "@/components/language-switcher"
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
  keywords: [
    "bobo 氣球",
    "巧克力禮盒",
    "花束禮品",
    "畢業禮物",
    "零食禮盒",
  ],
  generator: "v0.app",
  icons: {
    icon: "/favicon-32x32.png",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <I18nProvider locale={locale}>
          <div className="p-4">
            <LanguageSwitcher />
          </div>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  )
}
