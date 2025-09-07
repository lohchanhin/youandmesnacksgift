import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Star, Phone, MapPin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { products, categories } from "@/data/products"
import Image from "next/image"

export default function HomePage() {
  const getCategoryPreview = (categoryId: string) => {
    const categoryProducts = products.filter((p) => p.category === categoryId)
    return categoryProducts.slice(0, 3) // Get first 3 products as preview
  }

  const featuredCategories = categories.filter((cat) => cat.id !== "all").slice(0, 11) // Show all 11 categories

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
                className="h-10 w-auto sm:h-12"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                产品展示
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
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
            精美礼品展示
            <span className="text-primary block">让每个时刻更特别</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty px-4">
            气球、花束、巧克力礼盒等多样化产品，为您的庆祝时刻增添温馨与甜蜜
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-auto" asChild>
              <Link href="/products">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                浏览产品
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-auto bg-transparent"
              asChild
            >
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3 sm:mb-4">产品展示</h3>
            <p className="text-muted-foreground text-base sm:text-lg">精选多样化的礼品系列</p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8 sm:mb-12">
            {featuredCategories.map((category) => {
              const previewProducts = getCategoryPreview(category.id)
              const mainProduct = previewProducts[0]

              return (
                <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    {mainProduct && mainProduct.images.length > 0 ? (
                      <Image
                        src={mainProduct.images[0] || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-contain bg-gray-50"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="text-4xl sm:text-5xl mb-2">📦</div>
                          <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground">{category.name}</h4>
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{category.count}个产品</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm text-muted-foreground">4.8分</span>
                      </div>
                    </div>
                    <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">{category.name}</h4>
                    <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                      {mainProduct ? mainProduct.description : `精选${category.name}系列产品`}
                    </p>
                    <Button asChild size="sm" className="w-full">
                      <Link href={`/products?category=${category.id}`}>查看详情</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Celebration Ideas */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3 sm:mb-4">庆祝时刻</h3>
            <p className="text-muted-foreground text-base sm:text-lg">为每个特殊场合找到完美的礼品</p>
          </div>

          <div className="grid gap-6 sm:gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎂</div>
              <h4 className="text-lg sm:text-xl font-heading font-semibold mb-2">生日庆祝</h4>
              <p className="text-muted-foreground text-sm sm:text-base">让生日更加特别难忘</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💕</div>
              <h4 className="text-lg sm:text-xl font-heading font-semibold mb-2">浪漫纪念</h4>
              <p className="text-muted-foreground text-sm sm:text-base">表达爱意的完美选择</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎉</div>
              <h4 className="text-lg sm:text-xl font-heading font-semibold mb-2">节日庆典</h4>
              <p className="text-muted-foreground text-sm sm:text-base">为节日增添欢乐气氛</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3 sm:mb-4">客户评价</h3>
            <p className="text-muted-foreground text-base sm:text-lg">听听客户怎么说</p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  "Sangat puas dengan kualiti balon dan coklat! Packaging cantik, anak saya suka sangat. Terima kasih
                  You & Me!"
                </p>
                <p className="font-semibold text-foreground text-sm sm:text-base">- Siti Aminah</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  "老板服务很好，产品质量超棒！女儿生日买的气球巧克力礼盒，包装精美，价格合理。会再来的！"
                </p>
                <p className="font-semibold text-foreground text-sm sm:text-base">- 陈太太</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  "Best place untuk beli hadiah! Bunga bouquet fresh, balloon quality bagus. Delivery pun on time.
                  Highly recommended!"
                </p>
                <p className="font-semibold text-foreground text-sm sm:text-base">- Ahmad Rahman</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card py-8 sm:py-12">
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
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                专业的礼品展示平台，展示多样化的精美礼品系列
              </p>
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
              <h5 className="font-heading font-semibold text-foreground mb-4 text-base sm:text-lg">联系方式</h5>
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
              <h5 className="font-heading font-semibold text-foreground mb-4 text-base sm:text-lg">热门分类</h5>
              <div className="space-y-2">
                <Link
                  href="/products?category=helium-balloon"
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  氦气球系列
                </Link>
                <Link
                  href="/products?category=bobo-balloon-chocolate-flower-gift-box"
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  气球巧克力礼盒
                </Link>
                <Link
                  href="/products?category=flower-bouquet"
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  花束系列
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground text-sm sm:text-base">© 2024 You & Me Gifts. 保留所有权利。</p>
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
