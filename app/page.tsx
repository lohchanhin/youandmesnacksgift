import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, Users, Zap, Shield, Heart, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Heart className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">YouAndMe</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              功能
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              关于
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              联系
            </a>
          </div>

          <Button className="hidden md:inline-flex">
            开始使用
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            <Star className="mr-1 h-3 w-3" />
            全新现代化体验
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            连接你我，
            <span className="text-primary">创造美好</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            体验全新的现代化平台，让人与人之间的连接变得更加简单、美好。 我们致力于打造最优质的用户体验。
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              立即开始
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base bg-transparent">
              了解更多
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">为什么选择我们</h2>
          <p className="mt-4 text-lg text-muted-foreground">现代化的设计理念，结合最新的技术栈，为您提供卓越的体验</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>极速体验</CardTitle>
              <CardDescription>采用最新的技术栈，确保页面加载速度和交互响应都达到最优</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>安全可靠</CardTitle>
              <CardDescription>企业级安全保障，您的数据和隐私得到最高级别的保护</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>社区驱动</CardTitle>
              <CardDescription>活跃的用户社区，持续的功能更新和优化，让产品越来越好</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">活跃用户</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">服务可用性</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">技术支持</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">准备好开始了吗？</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            加入我们的社区，体验现代化的全新服务。简单几步，即可开启您的旅程。
          </p>
          <Button size="lg" variant="secondary" className="text-base">
            <Globe className="mr-2 h-5 w-5" />
            立即加入
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                  <Heart className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="font-bold">YouAndMe</span>
              </div>
              <p className="text-sm text-muted-foreground">连接你我，创造美好的现代化平台</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">产品</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    功能介绍
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    价格方案
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    更新日志
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">支持</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    帮助中心
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    联系我们
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    社区论坛
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">公司</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    关于我们
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    隐私政策
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    服务条款
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 YouAndMe. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
