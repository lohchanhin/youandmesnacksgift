import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, Star, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h1 className="text-lg sm:text-2xl font-heading font-bold text-foreground">You & Me Gifts</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                产品展示
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
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
              <Link href="#contact">联系我们</Link>
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

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12">
            {/* Bobo Balloons & Chocolate Gift Boxes */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-2">🎈🍫</div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground">气球巧克力礼盒</h4>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">热销</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm text-muted-foreground">4.9分</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  气球与巧克力的完美结合，精美包装的礼盒系列
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/products">查看详情</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Bobo Foil Balloons */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-2">🎈</div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground">铝箔气球</h4>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">精品</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm text-muted-foreground">4.8分</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">多种尺寸的铝箔气球，适合各种庆祝场合</p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/products">查看详情</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Helium Money Pull Balloons */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-2">💰🎈</div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground">氦气球拉钱</h4>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">创意</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm text-muted-foreground">4.7分</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  创意氦气球拉钱产品，惊喜满满的庆祝方式
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/products">查看详情</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Flower Bouquets */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-2">💐</div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground">花束系列</h4>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">浪漫</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm text-muted-foreground">4.9分</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">精美花束系列，表达爱意的完美选择</p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/products">查看详情</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Helium Balloons */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-2">🎈</div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground">氦气球系列</h4>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">经典</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm text-muted-foreground">4.8分</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">经典氦气球系列，多种颜色和款式可选</p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/products">查看详情</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mini Bouquets */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-2">🌸</div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground">迷你花束</h4>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">精致</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm text-muted-foreground">4.7分</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">精致小巧的迷你花束，温馨贴心的小礼品</p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/products">查看详情</Link>
                </Button>
              </CardContent>
            </Card>
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
                  "气球质量很好，包装精美，女朋友很喜欢！"
                </p>
                <p className="font-semibold text-foreground text-sm sm:text-base">- 小明</p>
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
                  "巧克力很好吃，礼盒包装超级漂亮，送礼必选！"
                </p>
                <p className="font-semibold text-foreground text-sm sm:text-base">- 小红</p>
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
                  "服务很好，送货及时，产品质量超出预期！"
                </p>
                <p className="font-semibold text-foreground text-sm sm:text-base">- 小李</p>
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
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <h4 className="text-lg sm:text-xl font-heading font-bold text-foreground">You & Me Gifts</h4>
              </div>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                专业的礼品展示平台，展示多样化的精美礼品系列
              </p>
            </div>

            <div>
              <h5 className="font-heading font-semibold text-foreground mb-4 text-base sm:text-lg">联系方式</h5>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+60 12-345 6789</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>hello@youandmegifts.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>马来西亚</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-heading font-semibold text-foreground mb-4 text-base sm:text-lg">产品分类</h5>
              <div className="space-y-2">
                <Link
                  href="/products"
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  气球巧克力礼盒
                </Link>
                <Link
                  href="/products"
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  花束系列
                </Link>
                <Link
                  href="/products"
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  氦气球系列
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-muted-foreground text-sm sm:text-base">© 2024 You & Me Gifts. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
