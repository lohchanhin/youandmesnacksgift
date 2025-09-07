import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { I18nProvider } from "@/lib/i18n";
import { getLocale, getMessages } from "next-intl/server";
import defaultMessages from "@/messages/en.json";
import { LanguageSwitcher } from "@/components/language-switcher";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "You & Me Gifts - Bobo Balloons & Chocolate Gift Boxes",
  description:
    "Premium gift boxes, Bobo balloons, and chocolate arrangements for all your special occasions. From RM6.90 to RM120.",
  keywords: ["bobo 氣球", "巧克力禮盒", "花束禮品", "畢業禮物", "零食禮盒"],
  generator: "v0.app",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let locale = "en";
  try {
    locale = await getLocale();
  } catch (err) {
    console.error("⚠️ Failed to detect locale, fallback to 'en':", err);
  }

  let messages: Record<string, unknown> = defaultMessages;
  try {
    messages = await getMessages({ locale });
  } catch (err) {
    console.error(
      `⚠️ Failed to load messages for locale "${locale}", falling back to default:`,
      err,
    );
    try {
      messages = await getMessages({ locale: "en" });
    } catch (err2) {
      console.error(
        "⚠️ Failed to load default messages, using bundled fallback:",
        err2,
      );
      messages = defaultMessages;
    }
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body
        className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        <I18nProvider locale={locale} messages={messages}>
          <nav className="p-4 border-b">
            <LanguageSwitcher />
          </nav>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </I18nProvider>
      </body>
    </html>
  );
}
