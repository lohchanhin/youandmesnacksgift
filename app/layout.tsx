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
  title: "You & Me Gifts - 精美礼品与气球专家 | Premium Gift Boxes & Bobo Balloons | Hadiah Premium & Belon Bobo",
  description:
    "You & Me Gifts Semenyih - 专业礼品店，提供Bobo气球、巧克力礼盒、花束等精美礼品。价格从RM6.90起。Professional gift shop offering Bobo balloons, chocolate gift boxes, flower bouquets. Kedai hadiah profesional dengan belon Bobo, kotak coklat, bunga.",
  keywords: [
    // Chinese keywords
    "You & Me Gifts",
    "精美礼品",
    "Bobo气球",
    "巧克力礼盒",
    "花束礼品",
    "畢業禮物",
    "零食禮盒",
    "氦气球",
    "铝箔气球",
    "金钱花束",
    "迷你花束",
    "贴纸",
    "Semenyih礼品店",
    "雪兰莪礼品",
    "马来西亚礼品",
    // English keywords
    "premium gifts",
    "bobo balloons",
    "chocolate gift boxes",
    "flower bouquets",
    "graduation gifts",
    "snack gift boxes",
    "helium balloons",
    "foil balloons",
    "money bouquet",
    "mini bouquet",
    "stickers",
    "Semenyih gift shop",
    "Selangor gifts",
    "Malaysia gifts",
    "birthday gifts",
    "anniversary gifts",
    "celebration gifts",
    // Malay keywords
    "hadiah premium",
    "belon bobo",
    "kotak hadiah coklat",
    "bunga rampai",
    "hadiah graduasi",
    "kotak snek",
    "belon helium",
    "belon foil",
    "bunga wang",
    "bunga mini",
    "pelekat",
    "kedai hadiah Semenyih",
    "hadiah Selangor",
    "hadiah Malaysia",
    "hadiah hari jadi",
    "hadiah ulang tahun",
  ],
  authors: [{ name: "You & Me Gifts Semenyih" }],
  creator: "You & Me Gifts",
  publisher: "You & Me Gifts Semenyih",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.youandmesemenyih.com"),
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/zh-CN",
      en: "/en",
      ms: "/ms",
    },
  },
  openGraph: {
    title: "You & Me Gifts - 精美礼品与气球专家 Semenyih",
    description:
      "专业礼品店，提供Bobo气球、巧克力礼盒、花束等精美礼品。Professional gift shop in Semenyih offering premium Bobo balloons, chocolate gift boxes, and flower arrangements.",
    url: "https://www.youandmesemenyih.com",
    siteName: "You & Me Gifts Semenyih",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "You & Me Gifts - Premium Gift Shop Semenyih",
      },
    ],
    locale: "zh_CN",
    alternateLocale: ["en_US", "ms_MY"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "You & Me Gifts - Premium Gift Shop Semenyih",
    description:
      "专业礼品店，提供Bobo气球、巧克力礼盒、花束等精美礼品。Professional gift shop offering premium gifts and balloons.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "shopping",
  generator: "v0.app",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "You & Me Gifts",
              description: "专业礼品店，提供Bobo气球、巧克力礼盒、花束等精美礼品",
              url: "https://www.youandmesemenyih.com",
              telephone: "+60183137277",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ground Floor, 2A, Jalan Semenyih Sentral 6, Taman Semenyih Sentral",
                addressLocality: "Semenyih",
                addressRegion: "Selangor",
                postalCode: "43500",
                addressCountry: "MY",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "2.9445464970316984",
                longitude: "101.84153307586051",
              },
              openingHours: ["Mo-Sa 10:00-19:00"],
              priceRange: "RM6.90 - RM120",
              paymentAccepted: "Cash, Online Transfer",
              currenciesAccepted: "MYR",
              areaServed: {
                "@type": "Place",
                name: "Semenyih, Selangor, Malaysia",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Gift Products",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Bobo Balloons",
                      description: "Premium Bobo balloons in various sizes",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Chocolate Gift Boxes",
                      description: "Premium chocolate gift boxes with balloons",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Flower Bouquets",
                      description: "Beautiful flower arrangements for all occasions",
                    },
                  },
                ],
              },
            }),
          }}
        />
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
