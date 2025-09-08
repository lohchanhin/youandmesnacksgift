import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import Image from "next/image"

export default function ContactPage() {
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
                首页
              </Link>
              <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                产品展示
              </Link>
              <Link href="/contact" className="text-primary font-semibold">
                联系我们
              </Link>
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
            联系我们
            <span className="text-primary block">You & Me Snacks Gift</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty px-4">
            我们很乐意为您提供帮助！请通过以下方式与我们联系。
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-12">
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">联系信息</h3>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">电话</h4>
                      <p className="text-muted-foreground mb-2">018-313 7277</p>
                      <Button size="sm" asChild>
                        <a href="tel:0183137277">立即拨打</a>
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
                      <h4 className="font-semibold text-foreground mb-2">WhatsApp</h4>
                      <p className="text-muted-foreground mb-2">快速联系我们</p>
                      <Button size="sm" asChild>
                        <a href="https://wa.me/60183137277" target="_blank" rel="noopener noreferrer">
                          发送消息
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
                      <h4 className="font-semibold text-foreground mb-2">地址</h4>
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
                      <h4 className="font-semibold text-foreground mb-2">营业时间</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>周一至周六: 10:00 AM - 7:00 PM</p>
                        <p>周日: 休息</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Store Photo */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">我们的店面</h3>

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
                  <p className="text-muted-foreground">
                    欢迎来到我们的实体店面，这里有各种精美的礼品、气球和花束等您选择。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Google Map */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6 text-center">店面位置</h3>
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
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">准备好订购了吗？</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">浏览我们的产品或直接联系我们获取个性化建议。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/products">查看产品</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/60183137277" target="_blank" rel="noopener noreferrer">
                  WhatsApp联系
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
