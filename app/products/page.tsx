"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MobileNav } from "@/components/mobile-nav"
import { Menu, Phone, MapPin, Facebook, Instagram } from "lucide-react"

const productCategories = [
  {
    id: "helium-balloon",
    name: "Helium Balloon",
    description: "各种氦气球产品",
    products: [
      {
        id: "helium-a",
        name: "16INCH BOBO BALLOON SET",
        price: "RM66.90-RM69.90",
        image: "/Helium/A.jpeg",
        images: ["/Helium/A.jpeg", "/Helium/A2.jpeg", "/Helium/A3.jpeg", "/Helium/A4.jpeg"],
        description: "1 of 16inch bobo with sticker(RM39.90) + 6 of 12inch balloons (RM4.50/RM5.00)",
      },
      {
        id: "helium-b",
        name: "NUMBER BALLOON SET",
        price: "RM37.00-RM40.00",
        image: "/Helium/B.jpeg",
        images: ["/Helium/B.jpeg", "/Helium/B2.jpeg", "/Helium/B3.jpeg", "/Helium/B4.jpeg"],
        description: "6 of 12inch balloons (RM4.50/RM5.00 each) + 2 of 16inch foil balloons (RM5.00 each)",
      },
      {
        id: "helium-c",
        name: "12 INCH BALLOON",
        price: "RM4.50/RM5.00",
        image: "/Helium/C.jpeg",
        images: [
          "/Helium/C.jpeg",
          "/Helium/C2.jpeg",
          "/Helium/C3.jpeg",
          "/Helium/C5.jpeg",
          "/Helium/C6.jpeg",
          "/Helium/C7.jpeg",
          "/Helium/C8.jpeg",
          "/Helium/C9.jpeg",
          "/Helium/C10.jpeg",
          "/Helium/C11.jpeg",
          "/Helium/C12.jpeg",
          "/Helium/C13.jpeg",
          "/Helium/C14.jpeg",
        ],
        description: "Normal Colour RM4.50 | Chrome Colour RM5.00 | Confetti design RM5.00",
      },
      {
        id: "helium-d",
        name: "SURPRISE SET",
        price: "RM64.00-RM70.00",
        image: "/Helium/D.jpeg",
        images: ["/Helium/D.jpeg"],
        description: "12 of 12inch balloons (RM4.50/RM5.00 each) + 1 of 18inch foil balloon (RM10.00 each)",
      },
      {
        id: "helium-e",
        name: "BIRTHDAY SET",
        price: "RM55.00-RM60.00",
        image: "/Helium/E.jpeg",
        images: ["/Helium/E.jpeg"],
        description: "10 of 12inch balloons (RM4.50/RM5.00 each) + 1 of 18inch foil balloon (RM10.00each)",
      },
      {
        id: "helium-f",
        name: "SIMPLE SET",
        price: "RM19.00-RM25.00",
        image: "/Helium/F.jpeg",
        images: ["/Helium/F.jpeg", "/Helium/F2.jpeg"],
        description:
          "2 of 12inch balloons (RM4.50/RM5.00 each) + 1 of 18inch foil balloon (RM10.00 each) | Add on sticker RM5.00",
      },
      {
        id: "helium-g",
        name: "SPECIAL SET",
        price: "RM70.00",
        image: "/Helium/G.jpeg",
        images: ["/Helium/G.jpeg"],
        description: "4 of 18inch foil balloons (RM10.00 each) + 1 of big size birthday foil balloon (RM30.00 each)",
      },
      {
        id: "helium-h",
        name: "NORMAL BIRTHDAY SET",
        price: "RM37.00-RM40.00",
        image: "/Helium/H.jpeg",
        images: ["/Helium/H.jpeg"],
        description: "6 of 12inch balloons (RM4.50/RM5.00 each) + 1 of 18inch foil balloon(RM10.00 each)",
      },
      {
        id: "helium-i",
        name: "18 INCH HEART/STAR FOIL BALLOON",
        price: "1PCS RM10.00",
        image: "/Helium/I.jpeg",
        images: ["/Helium/I.jpeg", "/Helium/I2.jpeg"],
        description: "1pcs RM10.00 | Add on sticker RM5.00",
      },
      {
        id: "helium-j",
        name: "CLASSIC SET",
        price: "RM32.50-RM40.00",
        image: "/Helium/J.jpeg",
        images: ["/Helium/J.jpeg"],
        description:
          "5 of 12inch balloons(RM4.50/RM5.00 each) + 1 of 18inch foil balloon (RM10.00 each) | Add On sticker(RM5.00)",
      },
      {
        id: "helium-k",
        name: "KIDS SET",
        price: "RM28.50-RM30.00",
        image: "/Helium/K.jpeg",
        images: ["/Helium/K.jpeg"],
        description:
          "3 of 12inch balloons (RM4.50/RM5.00 each) + 1 of 18inch foil balloon(RM10.00 each) + 1 of 16inch number foil balloon (RM5.00 each)",
      },
      {
        id: "helium-l",
        name: "20INCH PRINTED BOBO BALLOON",
        price: "RM35.00",
        image: "/Helium/L.jpeg",
        images: ["/Helium/L.jpeg"],
        description: "1 of 20inch printed bobo balloon",
      },
      {
        id: "helium-m",
        name: "UNIQUE SET",
        price: "RM57.00-RM60.00",
        image: "/Helium/M.jpeg",
        images: ["/Helium/M.jpeg"],
        description: "5 of 12inch balloons(RM4.50/RM5.00 each) + 1 of 32inch number foil balloon (RM35.00 each)",
      },
      {
        id: "helium-n",
        name: "WOW FOIL SET",
        price: "RM50.00",
        image: "/Helium/N.jpeg",
        images: ["/Helium/N.jpeg"],
        description:
          "4 of 18inch heart/star foil balloons (RM10.00 each) + 2 of 16inch number foil balloons (RM5.00 each)",
      },
      {
        id: "helium-o",
        name: "18 INCH BOBO JUMBO SET",
        price: "RM120.90-RM127.90",
        image: "/Helium/O.jpeg",
        images: ["/Helium/O.jpeg"],
        description:
          "14 of 12inch balloons(RM4.50/RM5.00 each) + 1 of 18inch bobo with sticker (RM49.90 each) | Add on bobo decorations RM8.00",
      },
    ],
  },
  {
    id: "bobo-foil-balloon",
    name: "Bobo/Foil Balloon",
    description: "Bobo气球和铝箔气球系列",
    products: [
      {
        id: "bobo-8-inch",
        name: "8 INCH BOBO BALLOON",
        price: "RM6.90-RM9.90",
        image: "/BoboFoil/BOBO BALLOON 8-16INCH/A.jpeg",
        images: [
          "/BoboFoil/BOBO BALLOON 8-16INCH/A.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/A2.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/A3.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/A4.jpeg",
        ],
        description: "with sticker RM9.90 | without sticker RM6.90 | 1 mini balloon",
      },
      {
        id: "bobo-12-inch",
        name: "12 INCH BOBO BALLOON",
        price: "RM9.90-RM13.90",
        image: "/BoboFoil/BOBO BALLOON 8-16INCH/B4.jpeg",
        images: [
          "/BoboFoil/BOBO BALLOON 8-16INCH/B4.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B2.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B3.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B5.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B6.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B7.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B8.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B9.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B10.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B11.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B12.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B13.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/B14.jpeg",
        ],
        description: "with sticker RM13.90 | without sticker RM9.90 | 2 mini balloon",
      },
      {
        id: "bobo-16-inch",
        name: "16 INCH BOBO BALLOON",
        price: "RM15.90-RM19.90",
        image: "/BoboFoil/BOBO BALLOON 8-16INCH/C.jpeg",
        images: [
          "/BoboFoil/BOBO BALLOON 8-16INCH/C.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C2.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C3.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C4.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C5.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C6.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C7.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C8.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C9.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C10.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C11.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C12.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C13.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C14.jpeg",
          "/BoboFoil/BOBO BALLOON 8-16INCH/C15.jpeg",
        ],
        description: "with sticker RM19.90 | without sticker RM15.90 | 3 mini balloon",
      },
      {
        id: "bobo-18-inch",
        name: "18 INCH BOBO BALLOON",
        price: "RM20.90-RM24.90",
        image: "/BoboFoil/bobo balloon 18-20inch/D.jpeg",
        images: ["/BoboFoil/bobo balloon 18-20inch/D.jpeg", "/BoboFoil/bobo balloon 18-20inch/D2.jpeg"],
        description: "with sticker RM24.90 | without sticker RM20.90 | 4 mini balloon",
      },
      {
        id: "bobo-20-inch",
        name: "20 INCH BOBO BALLOON",
        price: "RM25.90-RM29.90",
        image: "/BoboFoil/bobo balloon 18-20inch/E.jpeg",
        images: [
          "/BoboFoil/bobo balloon 18-20inch/E.jpeg",
          "/BoboFoil/bobo balloon 18-20inch/E2.jpeg",
          "/BoboFoil/bobo balloon 18-20inch/E3.jpeg",
          "/BoboFoil/bobo balloon 18-20inch/E4.jpeg",
          "/BoboFoil/bobo balloon 18-20inch/E5.jpeg",
        ],
        description: "with sticker RM29.90 | without sticker RM25.90 | 5 mini balloon",
      },
      {
        id: "foil-18-inch",
        name: "18 INCH FOIL BALLOON",
        price: "RM2.90-RM7.90",
        image: "/BoboFoil/foil balloon 10-18inch/F.jpeg",
        images: ["/BoboFoil/foil balloon 10-18inch/F.jpeg", "/BoboFoil/foil balloon 10-18inch/F2.jpeg"],
        description: "with sticker RM7.90 | without sticker RM2.90",
      },
      {
        id: "foil-10-inch",
        name: "10 INCH FOIL BALLOON",
        price: "RM2.50-RM5.50",
        image: "/BoboFoil/foil balloon 10-18inch/G.jpeg",
        images: ["/BoboFoil/foil balloon 10-18inch/G.jpeg", "/BoboFoil/foil balloon 10-18inch/G2.jpeg"],
        description: "with sticker RM5.50 | without sticker RM2.50",
      },
    ],
  },
  {
    id: "sticker",
    name: "Sticker",
    description: "各种装饰贴纸",
    products: [
      {
        id: "sticker-1",
        name: "装饰贴纸 A",
        price: "RM3.90",
        image: "/Sticker/sticker/A.jpeg",
        description: "精美装饰贴纸，多种图案",
      },
      {
        id: "sticker-2",
        name: "装饰贴纸 A2",
        price: "RM4.90",
        image: "/Sticker/sticker/A2.jpeg",
        description: "特色装饰贴纸",
      },
      {
        id: "sticker-3",
        name: "装饰贴纸 A3",
        price: "RM5.90",
        image: "/Sticker/sticker/A3.jpeg",
        description: "豪华装饰贴纸套装",
      },
    ],
  },
  {
    id: "mini-bouquet",
    name: "Mini Bouquet",
    description: "小巧精致的迷你花束",
    products: [
      {
        id: "mini-1",
        name: "迷你花束 A",
        price: "RM25.00",
        image: "/Mini bouquet/mini bouquet/A.jpeg",
        description: "精致迷你花束，完美小礼品",
      },
      {
        id: "mini-2",
        name: "迷你花束 B",
        price: "RM28.00",
        image: "/Mini bouquet/mini bouquet/B.jpeg",
        description: "可爱迷你花束，温馨设计",
      },
      {
        id: "mini-3",
        name: "迷你花束 B2",
        price: "RM30.00",
        image: "/Mini bouquet/mini bouquet/B2.jpeg",
        description: "特色迷你花束，独特搭配",
      },
    ],
  },
  {
    id: "mini-chocolate-flower",
    name: "Mini Chocolate Flower Gift Box",
    description: "迷你巧克力花束礼盒",
    products: [
      {
        id: "mini-choc-1",
        name: "迷你巧克力花束礼盒 A",
        price: "RM35.00",
        image: "/MiniChocolate&FlowerGiftBox/MINI FLOWER&CHOCOLATE BOX/A.jpeg",
        description: "精美迷你巧克力花束礼盒",
      },
      {
        id: "mini-choc-2",
        name: "迷你巧克力花束礼盒 B",
        price: "RM38.00",
        image: "/MiniChocolate&FlowerGiftBox/MINI FLOWER&CHOCOLATE BOX/B.jpeg",
        description: "特色迷你巧克力花束礼盒",
      },
      {
        id: "mini-choc-3",
        name: "迷你巧克力花束礼盒 C",
        price: "RM40.00",
        image: "/MiniChocolate&FlowerGiftBox/MINI FLOWER&CHOCOLATE BOX/C.jpeg",
        description: "豪华迷你巧克力花束礼盒",
      },
    ],
  },
  {
    id: "bobo-chocolate-flower",
    name: "Bobo Balloon Chocolate Flower Gift Box",
    description: "Bobo气球巧克力花束礼盒",
    products: [
      {
        id: "bobo-choc-1",
        name: "Bobo巧克力礼盒 A",
        price: "RM75.00",
        image: "/BoboBalloonChocolate&FlowerGiftBox/bob cho 2/A.jpeg",
        description: "精美Bobo气球配巧克力礼盒",
      },
      {
        id: "bobo-choc-2",
        name: "Bobo巧克力礼盒 B",
        price: "RM85.00",
        image: "/BoboBalloonChocolate&FlowerGiftBox/bob cho 2/B.jpeg",
        description: "豪华Bobo气球配巧克力礼盒",
      },
      {
        id: "bobo-box-1",
        name: "Bobo礼盒系列 A",
        price: "RM90.00",
        image: "/BoboBalloonChocolate&FlowerGiftBox/bobo box/A.jpeg",
        description: "Bobo气球配精美礼盒",
      },
      {
        id: "choco-box-1",
        name: "巧克力礼盒 A",
        price: "RM65.00",
        image: "/BoboBalloonChocolate&FlowerGiftBox/choco box 1/A.jpeg",
        description: "精装巧克力礼盒",
      },
    ],
  },
  {
    id: "bouquet-chocolate",
    name: "Bouquet Chocolate",
    description: "花束巧克力系列",
    products: [
      {
        id: "bouquet-choc-1",
        name: "花束巧克力 A",
        price: "RM55.00",
        image: "/bouquetChi/bouquet chi/A.jpeg",
        description: "精美花束配巧克力",
      },
      {
        id: "bouquet-choc-2",
        name: "花束巧克力 B",
        price: "RM60.00",
        image: "/bouquetChi/bouquet chi/B.jpeg",
        description: "豪华花束配巧克力",
      },
      {
        id: "bouquet-choc-3",
        name: "花束巧克力 C",
        price: "RM65.00",
        image: "/bouquetChi/bouquet chi/C.jpeg",
        description: "特色花束配巧克力",
      },
    ],
  },
  {
    id: "flower-bouquet",
    name: "Flower Bouquet",
    description: "精美的鲜花花束",
    products: [
      {
        id: "flower-1",
        name: "花束 A",
        price: "RM45.00",
        image: "/FlowerBouquet/flower/A.jpeg",
        description: "精美鲜花花束，浪漫首选",
      },
      {
        id: "flower-2",
        name: "花束 B",
        price: "RM50.00",
        image: "/FlowerBouquet/flower/B.jpeg",
        description: "豪华鲜花花束，高品质花材",
      },
      {
        id: "flower-3",
        name: "花束 C",
        price: "RM55.00",
        image: "/FlowerBouquet/flower/C.jpeg",
        description: "特色鲜花花束，独特设计",
      },
      {
        id: "flower-4",
        name: "花束 D",
        price: "RM60.00",
        image: "/FlowerBouquet/flower/D.jpeg",
        description: "高级鲜花花束，精心搭配",
      },
    ],
  },
  {
    id: "money-bouquet",
    name: "Money Bouquet",
    description: "金钱花束系列",
    products: [
      {
        id: "money-1",
        name: "金钱花束 A",
        price: "RM80.00",
        image: "/MoneyBouquet/Img/A.jpeg",
        description: "创意金钱花束，独特礼品",
      },
      {
        id: "money-2",
        name: "金钱花束 B",
        price: "RM90.00",
        image: "/MoneyBouquet/Img/B.jpeg",
        description: "豪华金钱花束，寓意吉祥",
      },
      {
        id: "money-3",
        name: "金钱花束 C",
        price: "RM100.00",
        image: "/MoneyBouquet/Img/C.jpeg",
        description: "特色金钱花束，精美包装",
      },
    ],
  },
  {
    id: "graduation-bouquet",
    name: "Graduation Bouquet",
    description: "毕业花束系列",
    products: [
      {
        id: "grad-1",
        name: "毕业花束 A",
        price: "RM65.00",
        image: "/graduation/graduation/A.jpeg",
        description: "毕业庆祝花束，纪念重要时刻",
      },
      {
        id: "grad-2",
        name: "毕业花束 B",
        price: "RM70.00",
        image: "/graduation/graduation/B.jpeg",
        description: "豪华毕业花束，成就庆祝",
      },
      {
        id: "grad-3",
        name: "毕业花束 C",
        price: "RM75.00",
        image: "/graduation/graduation/C.jpeg",
        description: "特色毕业花束，独特设计",
      },
      {
        id: "grad-4",
        name: "毕业花束 D",
        price: "RM80.00",
        image: "/graduation/graduation/D.jpeg",
        description: "高级毕业花束，精美包装",
      },
    ],
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return productCategories.flatMap((category) =>
        category.products.map((product) => ({
          ...product,
          categoryName: category.name,
        })),
      )
    }

    const category = productCategories.find((cat) => cat.id === selectedCategory)
    return category
      ? category.products.map((product) => ({
          ...product,
          categoryName: category.name,
        }))
      : []
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y&M</span>
              </div>
              <span className="font-bold text-xl text-gray-900">You & Me Gifts</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
                首页
              </Link>
              <Link href="/products" className="text-red-600 font-medium">
                产品展示
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
                联系我们
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">产品展示</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            浏览我们精心挑选的礼品系列，从气球装饰到精美花束，为您的特殊时刻增添美好回忆
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="mb-2"
            >
              全部产品
            </Button>
            {productCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2 text-xs sm:text-sm"
              >
                {category.name}
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
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-600 text-xs">{product.categoryName}</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">{product.price}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          查看详情
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>{product.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            {(product.images || [product.image]).map((img, index) => (
                              <Image
                                key={index}
                                src={img || "/placeholder.svg"}
                                alt={product.name}
                                width={200}
                                height={200}
                                className="w-full h-48 object-cover rounded-lg"
                              />
                            ))}
                          </div>
                          <div>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <p className="text-2xl font-bold text-red-600 mb-4">{product.price}</p>
                            <Badge className="bg-red-100 text-red-800">{product.categoryName}</Badge>
                          </div>
                          <div className="text-sm text-gray-500">
                            <p>如需订购此产品，请通过以下方式联系我们：</p>
                            <p className="mt-2">WhatsApp: +60 12-345 6789</p>
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

        {/* Contact Section */}
        <section id="contact" className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-gray-600">对我们的产品感兴趣？欢迎通过以下方式联系我们咨询和订购</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600">+60 12-345 6789</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Facebook className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Facebook</h3>
              <p className="text-gray-600">You & Me Gifts</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Instagram className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600">@youandmegifts</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">地址</h3>
              <p className="text-gray-600">Semenyih, Selangor</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 You & Me Gifts. 版权所有.</p>
        </div>
      </footer>
    </div>
  )
}
