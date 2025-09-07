"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "zh-CN" | "en" | "ms"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  "zh-CN": {
    // Navigation
    "nav.home": "首页",
    "nav.products": "产品展示",
    "nav.contact": "联系我们",

    // Homepage
    "hero.title": "精美礼品与气球专家",
    "hero.subtitle": "为您的特殊时刻提供完美的礼品解决方案",
    "hero.description": "为您的特殊时刻提供完美的礼品解决方案", // Added missing hero.description key
    "hero.cta": "浏览产品",
    "hero.browseProducts": "浏览产品", // Added missing hero.browseProducts key
    "hero.contactUs": "联系我们", // Added missing hero.contactUs key

    "featured.title": "精选产品分类",
    "featured.subtitle": "探索我们丰富多样的产品系列",
    "featured.viewAll": "查看全部",
    "featured.products": "个产品",

    // Products
    "products.title": "产品展示",
    "products.subtitle": "浏览我们完整的产品系列",
    "products.all": "全部",
    "products.viewDetails": "查看详情",
    "products.showing": "显示",
    "products.of": "共",
    "products.noProducts": "没有找到产品",
    "products.items": "个产品", // Added missing products.items key
    "products.beautiful": "精美的", // Added missing products.beautiful key
    "products.series": "系列", // Added missing products.series key

    // Celebration section translations
    "celebrations.title": "庆祝场合",
    "celebrations.subtitle": "为每个特殊时刻找到完美的礼品",
    "celebrations.birthday.title": "生日庆祝",
    "celebrations.birthday.description": "让生日更加特别难忘",
    "celebrations.romantic.title": "浪漫时刻",
    "celebrations.romantic.description": "表达爱意的完美选择",
    "celebrations.festival.title": "节日庆典",
    "celebrations.festival.description": "节日氛围的最佳装饰",

    "testimonials.title": "客户评价",
    "testimonials.subtitle": "听听我们满意客户的声音",

    "contact.title": "联系我们",
    "contact.subtitle": "随时为您提供专业服务",
    "contact.phone": "电话",
    "contact.whatsapp": "WhatsApp",
    "contact.address": "地址",

    "footer.company": "You & Me Gifts",
    "footer.description": "专业的礼品和气球服务提供商，为您的特殊时刻增添美好回忆。",
    "footer.quickLinks": "快速链接",
    "footer.categories": "热门分类",
    "footer.contact": "联系信息",
    "footer.popularCategories": "热门分类", // Added missing footer.popularCategories key
    "footer.heliumBalloons": "氦气球", // Added missing footer.heliumBalloons key
    "footer.chocolateGiftBox": "巧克力礼盒", // Added missing footer.chocolateGiftBox key
    "footer.flowerBouquet": "花束", // Added missing footer.flowerBouquet key
    "footer.copyright": "© 2024 You & Me Gifts. 版权所有。", // Added missing footer.copyright key
    "footer.rights": "版权所有",
    "footer.madeBy": "vertex-solution-IT解决方案专家 制作",
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.contact": "Contact",

    // Homepage
    "hero.title": "Premium Gifts & Balloon Experts",
    "hero.subtitle": "Perfect gift solutions for your special moments",
    "hero.description": "Perfect gift solutions for your special moments", // Added missing hero.description key
    "hero.cta": "Browse Products",
    "hero.browseProducts": "Browse Products", // Added missing hero.browseProducts key
    "hero.contactUs": "Contact Us", // Added missing hero.contactUs key

    "featured.title": "Featured Product Categories",
    "featured.subtitle": "Explore our diverse range of products",
    "featured.viewAll": "View All",
    "featured.products": "products",

    // Products
    "products.title": "Our Products",
    "products.subtitle": "Browse our complete product range",
    "products.all": "All",
    "products.viewDetails": "View Details",
    "products.showing": "Showing",
    "products.of": "of",
    "products.noProducts": "No products found",
    "products.items": "products", // Added missing products.items key
    "products.beautiful": "Beautiful ", // Added missing products.beautiful key
    "products.series": " series", // Added missing products.series key

    // Celebration section translations
    "celebrations.title": "Celebration Ideas",
    "celebrations.subtitle": "Find the perfect gift for every special moment",
    "celebrations.birthday.title": "Birthday Celebrations",
    "celebrations.birthday.description": "Make birthdays extra special and memorable",
    "celebrations.romantic.title": "Romantic Moments",
    "celebrations.romantic.description": "Perfect choices to express your love",
    "celebrations.festival.title": "Festival Celebrations",
    "celebrations.festival.description": "Best decorations for festive atmosphere",

    "testimonials.title": "Customer Reviews",
    "testimonials.subtitle": "Hear from our satisfied customers",

    "contact.title": "Contact Us",
    "contact.subtitle": "Professional service at your fingertips",
    "contact.phone": "Phone",
    "contact.whatsapp": "WhatsApp",
    "contact.address": "Address",

    "footer.company": "You & Me Gifts",
    "footer.description":
      "Professional gift and balloon service provider, adding beautiful memories to your special moments.",
    "footer.quickLinks": "Quick Links",
    "footer.categories": "Popular Categories",
    "footer.contact": "Contact Info",
    "footer.popularCategories": "Popular Categories", // Added missing footer.popularCategories key
    "footer.heliumBalloons": "Helium Balloons", // Added missing footer.heliumBalloons key
    "footer.chocolateGiftBox": "Chocolate Gift Box", // Added missing footer.chocolateGiftBox key
    "footer.flowerBouquet": "Flower Bouquet", // Added missing footer.flowerBouquet key
    "footer.copyright": "© 2024 You & Me Gifts. All rights reserved.", // Added missing footer.copyright key
    "footer.rights": "All rights reserved",
    "footer.madeBy": "Made by vertex-solution-IT Solutions Expert",
  },

  ms: {
    // Navigation
    "nav.home": "Laman Utama",
    "nav.products": "Produk",
    "nav.contact": "Hubungi Kami",

    // Homepage
    "hero.title": "Pakar Hadiah & Belon Premium",
    "hero.subtitle": "Penyelesaian hadiah sempurna untuk detik istimewa anda",
    "hero.description": "Penyelesaian hadiah sempurna untuk detik istimewa anda", // Added missing hero.description key
    "hero.cta": "Lihat Produk",
    "hero.browseProducts": "Lihat Produk", // Added missing hero.browseProducts key
    "hero.contactUs": "Hubungi Kami", // Added missing hero.contactUs key

    "featured.title": "Kategori Produk Pilihan",
    "featured.subtitle": "Terokai pelbagai jenis produk kami",
    "featured.viewAll": "Lihat Semua",
    "featured.products": "produk",

    // Products
    "products.title": "Produk Kami",
    "products.subtitle": "Lihat rangkaian produk lengkap kami",
    "products.all": "Semua",
    "products.viewDetails": "Lihat Butiran",
    "products.showing": "Menunjukkan",
    "products.of": "daripada",
    "products.noProducts": "Tiada produk dijumpai",
    "products.items": "produk", // Added missing products.items key
    "products.beautiful": "Cantik ", // Added missing products.beautiful key
    "products.series": " siri", // Added missing products.series key

    // Celebration section translations
    "celebrations.title": "Idea Perayaan",
    "celebrations.subtitle": "Cari hadiah sempurna untuk setiap detik istimewa",
    "celebrations.birthday.title": "Sambutan Hari Jadi",
    "celebrations.birthday.description": "Jadikan hari jadi lebih istimewa dan berkesan",
    "celebrations.romantic.title": "Detik Romantik",
    "celebrations.romantic.description": "Pilihan sempurna untuk meluahkan kasih sayang",
    "celebrations.festival.title": "Perayaan Festival",
    "celebrations.festival.description": "Hiasan terbaik untuk suasana perayaan",

    "testimonials.title": "Ulasan Pelanggan",
    "testimonials.subtitle": "Dengar dari pelanggan yang berpuas hati",

    "contact.title": "Hubungi Kami",
    "contact.subtitle": "Perkhidmatan profesional di hujung jari anda",
    "contact.phone": "Telefon",
    "contact.whatsapp": "WhatsApp",
    "contact.address": "Alamat",

    "footer.company": "You & Me Gifts",
    "footer.description":
      "Penyedia perkhidmatan hadiah dan belon profesional, menambah kenangan indah pada detik istimewa anda.",
    "footer.quickLinks": "Pautan Pantas",
    "footer.categories": "Kategori Popular",
    "footer.contact": "Maklumat Hubungan",
    "footer.popularCategories": "Kategori Popular", // Added missing footer.popularCategories key
    "footer.heliumBalloons": "Belon Helium", // Added missing footer.heliumBalloons key
    "footer.chocolateGiftBox": "Kotak Hadiah Coklat", // Added missing footer.chocolateGiftBox key
    "footer.flowerBouquet": "Jambangan Bunga", // Added missing footer.flowerBouquet key
    "footer.copyright": "© 2024 You & Me Gifts. Hak cipta terpelihara.", // Added missing footer.copyright key
    "footer.rights": "Hak cipta terpelihara",
    "footer.madeBy": "Dibuat oleh vertex-solution-Pakar Penyelesaian IT",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh-CN")

  useEffect(() => {
    console.log("[v0] LanguageProvider mounted")
    const saved = localStorage.getItem("language") as Language
    console.log("[v0] Saved language from localStorage:", saved)
    if (saved && ["zh-CN", "en", "ms"].includes(saved)) {
      setLanguage(saved)
      console.log("[v0] Language set to:", saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    console.log("[v0] Language change requested:", lang)
    setLanguage(lang)
    localStorage.setItem("language", lang)
    console.log("[v0] Language updated and saved to localStorage:", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  console.log("[v0] LanguageProvider rendering with language:", language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
