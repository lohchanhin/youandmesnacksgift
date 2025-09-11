"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MobileNav } from "@/components/mobile-nav"
import { Phone, MapPin, Facebook, Instagram, ChevronLeft, ChevronRight } from "lucide-react"
import { products, categories } from "@/data/products"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { language, t } = useLanguage()

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products
    }
    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") {
      return products.length
    }
    return products.filter((p) => p.category === categoryId).length
  }

  const nextImage = (totalImages: number) => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages)
  }

  const prevImage = (totalImages: number) => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  const resetImageIndex = () => {
    setCurrentImageIndex(0)
  }

  const getPageTitle = () => {
    const selectedCat = categories.find((cat) => cat.id === selectedCategory)
    if (selectedCategory === "all") {
      return language === "zh-CN"
        ? "所有产品 - You & Me Gifts | Bobo气球、巧克力礼盒、花束 | Semenyih礼品店"
        : language === "en"
          ? "All Products - You & Me Gifts | Bobo Balloons, Chocolate Gift Boxes, Bouquets | Semenyih Gift Shop"
          : "Semua Produk - You & Me Gifts | Belon Bobo, Kotak Hadiah Coklat, Bunga | Kedai Hadiah Semenyih"
    }
    return selectedCat ? `${selectedCat.name[language]} - You & Me Gifts Semenyih` : "Products - You & Me Gifts"
  }

  const getPageDescription = () => {
    const count = getCategoryCount(selectedCategory)
    if (selectedCategory === "all") {
      return language === "zh-CN"
        ? `浏览我们的${count}种精美礼品，包括Bobo气球、巧克力礼盒、花束等。价格从RM6.90起，Semenyih专业礼品店。`
        : language === "en"
          ? `Browse our ${count} premium gift products including Bobo balloons, chocolate gift boxes, flower bouquets. Starting from RM6.90. Professional gift shop in Semenyih.`
          : `Lihat ${count} produk hadiah premium kami termasuk belon Bobo, kotak hadiah coklat, bunga rampai. Bermula dari RM6.90. Kedai hadiah profesional di Semenyih.`
    }
    const selectedCat = categories.find((cat) => cat.id === selectedCategory)
    return selectedCat
      ? `${count} ${selectedCat.name[language]} products available at You & Me Gifts Semenyih. Premium quality gifts starting from RM6.90.`
      : "Premium gift products at You & Me Gifts Semenyih"
  }

  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <meta
          name="keywords"
          content={
            selectedCategory === "all"
              ? "You & Me Gifts, 所有产品, all products, semua produk, Bobo气球, chocolate gift boxes, flower bouquets, Semenyih gifts, 雪兰莪礼品, hadiah Selangor"
              : `${categories.find((cat) => cat.id === selectedCategory)?.name[language]}, You & Me Gifts, Semenyih, gift shop, 礼品店, kedai hadiah`
          }
        />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={getPageDescription()} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.youandmesemenyih.com/products${selectedCategory !== "all" ? `?category=${selectedCategory}` : ""}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getPageTitle()} />
        <meta name="twitter:description" content={getPageDescription()} />
        <link
          rel="canonical"
          href={`https://www.youandmesemenyih.com/products${selectedCategory !== "all" ? `?category=${selectedCategory}` : ""}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: getPageTitle(),
              description: getPageDescription(),
              url: `https://www.youandmesemenyih.com/products`,
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: filteredProducts.length,
                itemListElement: filteredProducts.slice(0, 10).map((product, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: {
                    "@type": "Product",
                    name: product.name[language],
                    description: product.description[language],
                    image: product.images[0],
                    offers: {
                      "@type": "Offer",
                      price: product.price.replace(/[^\d.-]/g, ""),
                      priceCurrency: "MYR",
                      availability: "https://schema.org/InStock",
                      seller: {
                        "@type": "Organization",
                        name: "You & Me Gifts",
                      },
                    },
                    category: categories.find((cat) => cat.id === product.category)?.name[language],
                  },
                })),
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.youandmesemenyih.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Products",
                    item: "https://www.youandmesemenyih.com/products",
                  },
                ],
              },
            }),
          }}
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h70OaRMbb9Tj2nOBrOY3Cf2AfmwfaF.png"
                  alt="You & Me Gifts Logo"
                  width={120}
                  height={60}
                  className="h-8 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
                  {t("nav.home")}
                </Link>
                <Link href="/products" className="text-red-600 font-medium">
                  {t("nav.products")}
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
                  {t("nav.contact")}
                </Link>
                <LanguageSwitcher />
              </nav>

              {/* Mobile menu button */}
              <MobileNav />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("products.title")}</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">{t("products.subtitle")}</p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="mb-2 text-xs sm:text-sm"
                >
                  {category.name[language]} ({getCategoryCount(category.id)})
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name[language]}
                      width={300}
                      height={300}
                      className="w-full h-64 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-red-600 text-white text-xs">
                      {categories.find((cat) => cat.id === product.category)?.name[language] || product.category}
                    </Badge>
                    {product.images.length > 1 && (
                      <Badge className="absolute top-2 right-2 bg-black/70 text-white text-xs">
                        {product.images.length} {t("products.images")}
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name[language]}</h3>
                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{product.description[language]}</p>
                    <div className="space-y-3">
                      <span className="text-2xl font-bold text-red-600 block">{product.price}</span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="bg-red-600 hover:bg-red-700 text-white w-full"
                            onClick={resetImageIndex}
                          >
                            {t("products.viewDetails")}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] sm:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{product.name[language]}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="relative mx-auto w-full max-w-[90vw]" >
                              <div className="aspect-square max-w-full sm:max-w-lg lg:max-w-2xl mx-auto relative overflow-hidden rounded-lg bg-gray-100">
                                <Image
                                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                                  alt={`${product.name[language]} ${currentImageIndex + 1}`}
                                  fill
                                  className="object-contain"
                                />

                                {product.images.length > 1 && (
                                  <>
                                    <button
                                      onClick={() => prevImage(product.images.length)}
                                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                                    >
                                      <ChevronLeft className="h-5 w-5" />
                                    </button>
                                    <button
                                      onClick={() => nextImage(product.images.length)}
                                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                                    >
                                      <ChevronRight className="h-5 w-5" />
                                    </button>
                                  </>
                                )}

                                {product.images.length > 1 && (
                                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                    {currentImageIndex + 1} / {product.images.length}
                                  </div>
                                )}
                              </div>

                              {product.images.length > 1 && (
                                <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
                                  {product.images.map((img, index) => (
                                    <button
                                      key={index}
                                      onClick={() => setCurrentImageIndex(index)}
                                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                                        index === currentImageIndex
                                          ? "border-red-600"
                                          : "border-gray-200 hover:border-gray-300"
                                      }`}
                                    >
                                      <Image
                                        src={img || "/placeholder.svg"}
                                        alt={`${product.name[language]} thumbnail ${index + 1}`}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain bg-gray-50"
                                      />
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>

                            <div>
                              <p className="text-gray-700 mb-2">{product.description[language]}</p>
                              <p className="text-2xl font-bold text-red-600 mb-4">{product.price}</p>
                              <Badge className="bg-red-100 text-red-800">
                                {categories.find((cat) => cat.id === product.category)?.name[language] ||
                                  product.category}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600">
                              <p>{t("products.contactInfo")}</p>
                              <p className="mt-2">WhatsApp: +60 18-313 7277</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">{t("products.noProducts")}</p>
            </div>
          )}

          {/* Contact Section */}
          <section id="contact" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("contact.title")}</h2>
              <p className="text-gray-700">{t("contact.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-700">+60 18-313 7277</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Facebook className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Facebook</h3>
                <p className="text-gray-700">You & Me Gifts</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Instagram className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
                <p className="text-gray-700">@youandmegifts</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t("contact.address")}</h3>
                <p className="text-gray-700">Semenyih, Selangor</p>
              </div>
            </div>
          </section>
        </main>

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
    </>
  )
}
