"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, MessageCircle, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h70OaRMbb9Tj2nOBrOY3Cf2AfmwfaF.png"
                alt="You & Me Gifts Logo"
                width={120}
                height={60}
                className="h-8 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                {t("nav.products")}
              </Link>
              <Link href="/contact" className="text-primary font-semibold">
                {t("nav.contact")}
              </Link>
              <LanguageSwitcher />
            </nav>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-card to-background py-12 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-4 sm:mb-6 text-balance">
            {t("contact.title")}
            <span className="text-primary block">You & Me Snacks Gift</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty px-4">
            {t("contact.helpDescription")}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-12">
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                {t("contact.contactInfo")}
              </h3>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("contact.phone")}</h4>
                      <p className="text-muted-foreground mb-2">018-313 7277</p>
                      <Button size="sm" asChild>
                        <a href="tel:0183137277">{t("contact.callNow")}</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("contact.whatsapp")}</h4>
                      <p className="text-muted-foreground mb-2">{t("contact.quickContact")}</p>
                      <Button size="sm" asChild>
                        <a href="https://wa.me/60183137277" target="_blank" rel="noopener noreferrer">
                          {t("contact.sendMessage")}
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("contact.address")}</h4>
                      <p className="text-muted-foreground mb-2">
                        Ground Floor, 2A, Jalan Semenyih Sentral 6,
                        <br />
                        Taman Semenyih Sentral, 43500 Semenyih,
                        <br />
                        Selangor, Malaysia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("contact.businessHours")}</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>{t("contact.mondayToSaturday")}: 10:00 AM - 7:00 PM</p>
                        <p>
                          {t("contact.sunday")}: {t("contact.closed")}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Store Photo */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
                {t("contact.storePhoto")}
              </h3>

              <Card className="overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-23BK9FRJUGvPSSFloykQfeT0Uhw8X6.png"
                    alt="You And Me Snacks Gift Wholesale Enterprise 店面外观"
                    fill
                    className="object-contain bg-gray-50"
                    priority
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">You And Me Snacks Gift Wholesale Enterprise</h4>
                  <p className="text-muted-foreground">{t("contact.storeDescription")}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Google Map */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6 text-center">
              {t("contact.storeLocation")}
            </h3>
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5506437383397!2d101.84153307586051!3d2.9445464970316984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcf6417112501%3A0xad1d07092f467fd1!2sYou%20And%20Me%20Snacks%20Gift%20Wholesale%20Enterprise!5e0!3m2!1szh-CN!2smy!4v1757178145574!5m2!1szh-CN!2smy"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="You And Me Snacks Gift Wholesale Enterprise 位置"
                />
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
              {t("contact.readyToOrder")}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("contact.readyToOrderDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/products">{t("contact.viewProducts")}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/60183137277" target="_blank" rel="noopener noreferrer">
                  {t("contact.whatsappContact")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="bg-card py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h70OaRMbb9Tj2nOBrOY3Cf2AfmwfaF.png"
                  alt="You & Me Gifts Logo"
                  width={80}
                  height={40}
                  className="h-6 w-auto sm:h-8"
                />
              </div>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">{t("footer.description")}</p>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h5 className="font-heading font-semibold text-foreground mb-4 text-base sm:text-lg">
                {t("footer.contact")}
              </h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>018-313 7277</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Semenyih, Selangor</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-heading font-semibold text-foreground mb-4 text-base sm:text-lg">
                {t("footer.popularCategories")}
              </h5>
              <div className="space-y-2">
                <Link
                  href="/products?category=helium-balloon"
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  {t("footer.heliumBalloons")}
                </Link>
                <Link
                  href="/products?category=bobo-balloon-chocolate-flower-gift-box"
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  {t("footer.chocolateGiftBox")}
                </Link>
                <Link
                  href="/products?category=flower-bouquet"
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  {t("footer.flowerBouquet")}
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground text-sm sm:text-base">{t("footer.copyright")}</p>
              <p className="text-xs text-muted-foreground/70">
                made by{" "}
                <Link
                  href="https://vertex-solution.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors underline decoration-dotted"
                >
                  vertex-solution-IT解决方案专家
                </Link>{" "}
                •{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
