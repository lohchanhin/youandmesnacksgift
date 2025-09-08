export interface Product {
  id: string
  name: {
    "zh-CN": string
    en: string
    ms: string
  }
  price: string
  description: {
    "zh-CN": string
    en: string
    ms: string
  }
  category: string
  images: string[]
}

export const products: Product[] = [
  // Helium Balloon Category (15 products)
  {
    id: "helium-1",
    name: {
      "zh-CN": "16寸波波气球套装",
      en: "16-inch Bobo Balloon Set",
      ms: "Set Belon Bobo 16 Inci",
    },
    price: "RM66.90-RM69.90",
    description: {
      "zh-CN": "1个16寸波波气球带贴纸(RM39.90) + 6个12寸气球 (RM4.50/RM5.00)",
      en: "1 x 16-inch bobo balloon with sticker (RM39.90) + 6 x 12-inch balloons (RM4.50/RM5.00)",
      ms: "1 x belon bobo 16 inci dengan pelekat (RM39.90) + 6 x belon 12 inci (RM4.50/RM5.00)",
    },
    category: "helium-balloon",
    images: [
      "/products/helium/a.jpeg",
      "/products/helium/a2.jpeg",
      "/products/helium/a3.jpeg",
      "/products/helium/a4.jpeg",
    ],
  },
  {
    id: "helium-2",
    name: {
      "zh-CN": "数字气球套装",
      en: "Number Balloon Set",
      ms: "Set Belon Nombor",
    },
    price: "RM37.00-RM40.00",
    description: {
      "zh-CN": "数字气球套装，适合生日庆祝",
      en: "Number balloon set, perfect for birthday celebrations",
      ms: "Set belon nombor, sesuai untuk sambutan hari jadi",
    },
    category: "helium-balloon",
    images: [
      "/products/helium/b.jpeg",
      "/products/helium/b2.jpeg",
      "/products/helium/b3.jpeg",
      "/products/helium/b4.jpeg",
    ],
  },
  {
    id: "helium-3",
    name: {
      "zh-CN": "12寸气球",
      en: "12-inch Balloon",
      ms: "Belon 12 Inci",
    },
    price: "RM4.50/RM5.00",
    description: {
      "zh-CN": "单个12寸气球，多种颜色可选",
      en: "Single 12-inch balloon, multiple colors available",
      ms: "Belon 12 inci tunggal, pelbagai warna tersedia",
    },
    category: "helium-balloon",
    images: [
      "/products/helium/c.jpeg",
      "/products/helium/c2.jpeg",
      "/products/helium/c3.jpeg",
      "/products/helium/c4.jpeg",
      "/products/helium/c5.jpeg",
      "/products/helium/c6.jpeg",
      "/products/helium/c7.jpeg",
      "/products/helium/c8.jpeg",
      "/products/helium/c9.jpeg",
      "/products/helium/c10.jpeg",
      "/products/helium/c11.jpeg",
      "/products/helium/c12.jpeg",
      "/products/helium/c13.jpeg",
      "/products/helium/c14.jpeg",
    ],
  },
  {
    id: "helium-4",
    name: {
      "zh-CN": "惊喜套装",
      en: "Surprise Set",
      ms: "Set Kegembiraan",
    },
    price: "RM64.00-RM70.00",
    description: {
      "zh-CN": "特别惊喜气球套装",
      en: "Special surprise balloon set",
      ms: "Set belon kegembiraan istimewa",
    },
    category: "helium-balloon",
    images: ["/products/helium/d.jpeg"],
  },
  {
    id: "helium-5",
    name: {
      "zh-CN": "生日套装",
      en: "Birthday Set",
      ms: "Set Hari Jadi",
    },
    price: "RM55.00-RM60.00",
    description: {
      "zh-CN": "生日庆祝气球套装",
      en: "Birthday celebration balloon set",
      ms: "Set belon sambutan hari jadi",
    },
    category: "helium-balloon",
    images: ["/products/helium/e.jpeg"],
  },
  {
    id: "helium-6",
    name: {
      "zh-CN": "简约套装",
      en: "Minimalist Set",
      ms: "Set Minimalis",
    },
    price: "RM19.00-RM25.00",
    description: {
      "zh-CN": "简约风格气球套装",
      en: "Minimalist style balloon set",
      ms: "Set belon gaya minimalis",
    },
    category: "helium-balloon",
    images: ["/products/helium/f.jpeg", "/products/helium/f2.jpeg"],
  },
  {
    id: "helium-7",
    name: {
      "zh-CN": "特别套装",
      en: "Special Set",
      ms: "Set Istimewa",
    },
    price: "RM70.00",
    description: {
      "zh-CN": "特别设计气球套装",
      en: "Special design balloon set",
      ms: "Set belon desain istimewa",
    },
    category: "helium-balloon",
    images: ["/products/helium/g.jpeg"],
  },
  {
    id: "helium-8",
    name: {
      "zh-CN": "普通生日套装",
      en: "Ordinary Birthday Set",
      ms: "Set Hari Jadi Biasa",
    },
    price: "RM37.00-RM40.00",
    description: {
      "zh-CN": "普通生日庆祝套装",
      en: "Ordinary birthday celebration set",
      ms: "Set sambutan hari jadi biasa",
    },
    category: "helium-balloon",
    images: ["/products/helium/h.jpeg"],
  },
  {
    id: "helium-9",
    name: {
      "zh-CN": "18寸心形/星形铝箔气球",
      en: "18-inch Heart/Star Foil Balloon",
      ms: "Belon Foil 18 Inci Berbentuk Hati/Bintang",
    },
    price: "RM10.00",
    description: {
      "zh-CN": "单个18寸心形或星形铝箔气球",
      en: "Single 18-inch heart or star foil balloon",
      ms: "Belon foil 18 inci tunggal berbentuk hati atau bintang",
    },
    category: "helium-balloon",
    images: ["/products/helium/i.jpeg", "/products/helium/i2.jpeg"],
  },
  {
    id: "helium-10",
    name: {
      "zh-CN": "经典套装",
      en: "Classic Set",
      ms: "Set Klasik",
    },
    price: "RM32.50-RM40.00",
    description: {
      "zh-CN": "经典风格气球套装",
      en: "Classic style balloon set",
      ms: "Set belon gaya klasik",
    },
    category: "helium-balloon",
    images: ["/products/helium/j.jpeg"],
  },
  {
    id: "helium-11",
    name: {
      "zh-CN": "儿童套装",
      en: "Children's Set",
      ms: "Set Kanak-Kanak",
    },
    price: "RM28.50-RM30.00",
    description: {
      "zh-CN": "专为儿童设计的气球套装",
      en: "Balloon set specially designed for children",
      ms: "Set belon yang disediakan khusus untuk kanak-kanak",
    },
    category: "helium-balloon",
    images: ["/products/helium/k.jpeg"],
  },
  {
    id: "helium-12",
    name: {
      "zh-CN": "20寸印花波波气球",
      en: "20-inch Printed Bobo Balloon",
      ms: "Belon Bobo 20 Inci Bercetak",
    },
    price: "RM35.00",
    description: {
      "zh-CN": "20寸印花波波气球",
      en: "20-inch printed bobo balloon",
      ms: "Belon bobo 20 inci bercetak",
    },
    category: "helium-balloon",
    images: ["/products/helium/l.jpeg"],
  },
  {
    id: "helium-13",
    name: {
      "zh-CN": "独特套装",
      en: "Unique Set",
      ms: "Set Unik",
    },
    price: "RM57.00-RM60.00",
    description: {
      "zh-CN": "独特设计气球套装",
      en: "Unique design balloon set",
      ms: "Set belon desain unik",
    },
    category: "helium-balloon",
    images: ["/products/helium/m.jpeg"],
  },
  {
    id: "helium-14",
    name: {
      "zh-CN": "WOW铝箔套装",
      en: "WOW Foil Set",
      ms: "Set Foil WOW",
    },
    price: "RM50.00",
    description: {
      "zh-CN": "WOW铝箔气球套装",
      en: "WOW foil balloon set",
      ms: "Set belon foil WOW",
    },
    category: "helium-balloon",
    images: ["/products/helium/n.jpeg"],
  },
  {
    id: "helium-15",
    name: {
      "zh-CN": "18寸波波巨型套装",
      en: "18-inch Giant Bobo Balloon Set",
      ms: "Set Belon Bobo Gigan 18 Inci",
    },
    price: "RM120.90-RM127.90",
    description: {
      "zh-CN": "18寸波波巨型气球套装",
      en: "18-inch giant bobo balloon set",
      ms: "Set belon bobo gigan 18 inci",
    },
    category: "helium-balloon",
    images: ["/products/helium/o.jpeg"],
  },

  // Bobo/Foil Balloon Category (7 products)
  {
    id: "bobo-1",
    name: {
      "zh-CN": "8寸波波气球",
      en: "8-inch Bobo Balloon",
      ms: "Belon Bobo 8 Inci",
    },
    price: "RM9.90 (带贴纸) / RM6.90 (不带贴纸)",
    description: {
      "zh-CN": "8寸波波气球，可选择带贴纸或不带贴纸",
      en: "8-inch bobo balloon, available with or without a sticker",
      ms: "Belon bobo 8 inci, tersedia dengan atau tanpa pelekat",
    },
    category: "bobo-foil-balloon",
    images: [
      "/products/bobo-foil/bobo-balloon-8-16inch/a.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/a2.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/a3.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/a4.jpeg",
    ],
  },
  {
    id: "bobo-2",
    name: {
      "zh-CN": "12寸波波气球",
      en: "12-inch Bobo Balloon",
      ms: "Belon Bobo 12 Inci",
    },
    price: "RM13.90 (带贴纸) / RM9.90 (不带贴纸)",
    description: {
      "zh-CN": "12寸波波气球，可选择带贴纸或不带贴纸",
      en: "12-inch bobo balloon, available with or without a sticker",
      ms: "Belon bobo 12 inci, tersedia dengan atau tanpa pelekat",
    },
    category: "bobo-foil-balloon",
    images: [
      "/products/bobo-foil/bobo-balloon-8-16inch/b.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b2.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b3.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b4.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b5.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b6.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b7.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b8.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b9.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b10.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b11.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b12.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b13.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/b14.jpeg",
    ],
  },
  {
    id: "bobo-3",
    name: {
      "zh-CN": "16寸波波气球",
      en: "16-inch Bobo Balloon",
      ms: "Belon Bobo 16 Inci",
    },
    price: "RM19.90 (带贴纸) / RM15.90 (不带贴纸)",
    description: {
      "zh-CN": "16寸波波气球，可选择带贴纸或不带贴纸",
      en: "16-inch bobo balloon, available with or without a sticker",
      ms: "Belon bobo 16 inci, tersedia dengan atau tanpa pelekat",
    },
    category: "bobo-foil-balloon",
    images: [
      "/products/bobo-foil/bobo-balloon-8-16inch/c.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c2.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c3.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c4.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c5.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c6.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c7.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c8.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c9.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c10.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c11.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c12.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c13.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c14.jpeg",
      "/products/bobo-foil/bobo-balloon-8-16inch/c15.jpeg",
    ],
  },
  {
    id: "bobo-4",
    name: {
      "zh-CN": "18寸波波气球",
      en: "18-inch Bobo Balloon",
      ms: "Belon Bobo 18 Inci",
    },
    price: "RM24.90 (带贴纸) / RM20.90 (不带贴纸)",
    description: {
      "zh-CN": "18寸波波气球，可选择带贴纸或不带贴纸",
      en: "18-inch bobo balloon, available with or without a sticker",
      ms: "Belon bobo 18 inci, tersedia dengan atau tanpa pelekat",
    },
    category: "bobo-foil-balloon",
    images: ["/products/bobo-foil/bobo-balloon-18-20inch/d.jpeg", "/products/bobo-foil/bobo-balloon-18-20inch/d2.jpeg"],
  },
  {
    id: "bobo-5",
    name: {
      "zh-CN": "20寸波波气球",
      en: "20-inch Bobo Balloon",
      ms: "Belon Bobo 20 Inci",
    },
    price: "RM29.90 (带贴纸) / RM25.90 (不带贴纸)",
    description: {
      "zh-CN": "20寸波波气球，可选择带贴纸或不带贴纸",
      en: "20-inch bobo balloon, available with or without a sticker",
      ms: "Belon bobo 20 inci, tersedia dengan atau tanpa pelekat",
    },
    category: "bobo-foil-balloon",
    images: [
      "/products/bobo-foil/bobo-balloon-18-20inch/e.jpeg",
      "/products/bobo-foil/bobo-balloon-18-20inch/e2.jpeg",
      "/products/bobo-foil/bobo-balloon-18-20inch/e3.jpeg",
      "/products/bobo-foil/bobo-balloon-18-20inch/e4.jpeg",
      "/products/bobo-foil/bobo-balloon-18-20inch/e5.jpeg",
    ],
  },
  {
    id: "foil-1",
    name: {
      "zh-CN": "18寸铝箔气球",
      en: "18-inch Foil Balloon",
      ms: "Belon Foil 18 Inci",
    },
    price: "RM7.90 (带贴纸) / RM2.90 (不带贴纸)",
    description: {
      "zh-CN": "18寸铝箔气球，可选择带贴纸或不带贴纸",
      en: "18-inch foil balloon, available with or without a sticker",
      ms: "Belon foil 18 inci, tersedia dengan atau tanpa pelekat",
    },
    category: "bobo-foil-balloon",
    images: ["/products/bobo-foil/foil-balloon-10-18inch/f.jpeg", "/products/bobo-foil/foil-balloon-10-18inch/f2.jpeg"],
  },
  {
    id: "foil-2",
    name: {
      "zh-CN": "10寸铝箔气球",
      en: "10-inch Foil Balloon",
      ms: "Belon Foil 10 Inci",
    },
    price: "RM5.50 (带贴纸) / RM2.50 (不带贴纸)",
    description: {
      "zh-CN": "10寸铝箔气球，可选择带贴纸或不带贴纸",
      en: "10-inch foil balloon, available with or without a sticker",
      ms: "Belon foil 10 inci, tersedia dengan atau tanpa pelekat",
    },
    category: "bobo-foil-balloon",
    images: ["/products/bobo-foil/foil-balloon-10-18inch/g.jpeg", "/products/bobo-foil/foil-balloon-10-18inch/g2.jpeg"],
  },

  // Graduation Bouquet Category
  {
    id: "graduation-1",
    name: {
      "zh-CN": "毕业套装",
      en: "Graduation Set",
      ms: "Set Graduasi",
    },
    price: "N/A",
    description: {
      "zh-CN": "毕业花束套装",
      en: "Graduation bouquet set",
      ms: "Set buket graduasi",
    },
    category: "graduation",
    images: [
      "/products/graduation/img-1.jpeg",
      "/products/graduation/img-2.jpeg",
      "/products/graduation/img-3.jpeg",
      "/products/graduation/img-4.jpeg",
      "/products/graduation/img-5.jpeg",
      "/products/graduation/img-6.jpeg",
      "/products/graduation/img-7.jpeg",
      "/products/graduation/img-8.jpeg",
      "/products/graduation/img-9.jpeg",
      "/products/graduation/img-10.jpeg",
      "/products/graduation/img-11.jpeg",
      "/products/graduation/img-12.jpeg",
      "/products/graduation/img-13.jpeg",
      "/products/graduation/img-14.jpeg",
      "/products/graduation/img-15.jpeg",
      "/products/graduation/img-16.jpeg",
      "/products/graduation/img-17.jpeg",
      "/products/graduation/img-18.jpeg",
      "/products/graduation/img-19.jpeg",
      "/products/graduation/img-20.jpeg",
    ],
  },

  // Zero Snack Chocolate Category
  {
    id: "zero-snack-chocolate-1",
    name: {
      "zh-CN": "零食巧克力套装",
      en: "Zero Snack Chocolate Set",
      ms: "Set Coklat Snek Sifar",
    },
    price: "N/A",
    description: {
      "zh-CN": "零食和巧克力花束套装",
      en: "Snack and chocolate bouquet set",
      ms: "Set buket snek dan coklat",
    },
    category: "zero-snack-chocolate",
    images: [
      "/products/zero-snack-chocolate/img-1.jpeg",
      "/products/zero-snack-chocolate/img-2.jpeg",
      "/products/zero-snack-chocolate/img-3.jpeg",
      "/products/zero-snack-chocolate/img-4.jpeg",
      "/products/zero-snack-chocolate/img-5.jpeg",
      "/products/zero-snack-chocolate/img-6.jpeg",
      "/products/zero-snack-chocolate/img-7.jpeg",
      "/products/zero-snack-chocolate/img-8.jpeg",
      "/products/zero-snack-chocolate/img-9.jpeg",
      "/products/zero-snack-chocolate/img-10.jpeg",
      "/products/zero-snack-chocolate/img-11.jpeg",
      "/products/zero-snack-chocolate/img-12.jpeg",
      "/products/zero-snack-chocolate/img-13.jpeg",
      "/products/zero-snack-chocolate/img-14.jpeg",
      "/products/zero-snack-chocolate/img-15.jpeg",
      "/products/zero-snack-chocolate/img-16.jpeg",
      "/products/zero-snack-chocolate/img-17.jpeg",
      "/products/zero-snack-chocolate/img-18.jpeg",
      "/products/zero-snack-chocolate/img-19.jpeg",
      "/products/zero-snack-chocolate/img-20.jpeg",
      "/products/zero-snack-chocolate/img-21.jpeg",
      "/products/zero-snack-chocolate/img-22.jpeg",
      "/products/zero-snack-chocolate/img-23.jpeg",
      "/products/zero-snack-chocolate/img-24.jpeg",
      "/products/zero-snack-chocolate/img-25.jpeg",
      "/products/zero-snack-chocolate/img-26.jpeg",
      "/products/zero-snack-chocolate/img-27.jpeg",
      "/products/zero-snack-chocolate/img-28.jpeg",
      "/products/zero-snack-chocolate/img-29.jpeg",
      "/products/zero-snack-chocolate/img-30.jpeg",
      "/products/zero-snack-chocolate/img-31.jpeg",
      "/products/zero-snack-chocolate/img-32.jpeg",
      "/products/zero-snack-chocolate/img-33.jpeg",
      "/products/zero-snack-chocolate/img-34.jpeg",
      "/products/zero-snack-chocolate/img-35.jpeg",
      "/products/zero-snack-chocolate/img-36.jpeg",
    ],
  },

  // Mini Chocolate Flower Gift Box Category
  {
    id: "mini-choco-gift-1",
    name: {
      "zh-CN": "迷你巧克力花礼品盒套装",
      en: "Mini Chocolate Flower Gift Box Set",
      ms: "Set Kotak Hadiah Bunga Coklat Mini",
    },
    price: "N/A",
    description: {
      "zh-CN": "迷你巧克力花礼品盒套装",
      en: "Mini chocolate flower gift box set",
      ms: "Set kotak hadiah bunga coklat mini",
    },
    category: "mini-chocolate-flower-gift-box",
    images: [
      "/products/mini-chocolate-flower-gift-box/img-1.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-2.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-3.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-4.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-5.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-6.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-7.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-8.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-9.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-10.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-11.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-12.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-13.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-14.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-15.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-16.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-17.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-18.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-19.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-20.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-21.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-22.jpeg",
      "/products/mini-chocolate-flower-gift-box/img-23.jpeg",
    ],
  },

  // Sticker Category
  {
    id: "sticker-1",
    name: {
      "zh-CN": "贴纸套装",
      en: "Sticker Set",
      ms: "Set Pelekat",
    },
    price: "N/A",
    description: {
      "zh-CN": "定制贴纸套装",
      en: "Custom sticker set",
      ms: "Set pelekat tersuai",
    },
    category: "sticker",
    images: [
      "/products/sticker/img-1.jpeg",
      "/products/sticker/img-2.jpeg",
      "/products/sticker/img-3.jpeg",
      "/products/sticker/img-4.jpeg",
      "/products/sticker/img-5.jpeg",
      "/products/sticker/img-6.jpeg",
      "/products/sticker/img-7.jpeg",
      "/products/sticker/img-8.jpeg",
      "/products/sticker/img-9.jpeg",
      "/products/sticker/img-10.jpeg",
      "/products/sticker/img-11.jpeg",
      "/products/sticker/img-12.jpeg",
      "/products/sticker/img-13.jpeg",
      "/products/sticker/img-14.jpeg",
      "/products/sticker/img-15.jpeg",
      "/products/sticker/img-16.jpeg",
      "/products/sticker/img-17.jpeg",
    ],
  },

  // Flower Bouquet Category (19 products)
  {
    id: "flower-1",
    name: {
      "zh-CN": "玫瑰花束A",
      en: "Rose Bouquet A",
      ms: "Buket Bunga Rose A",
    },
    price: "RM35.00-RM45.00",
    description: {
      "zh-CN": "美丽的玫瑰花束",
      en: "Beautiful rose bouquet",
      ms: "Buket bunga rose yang cantik",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/a.jpeg", "/products/flower-bouquet/a2.jpeg", "/products/flower-bouquet/a3.jpeg"],
  },
  {
    id: "flower-2",
    name: {
      "zh-CN": "混合花束B",
      en: "Mixed Bouquet B",
      ms: "Buket Bunga Berbagai Bahan B",
    },
    price: "RM40.00-RM50.00",
    description: {
      "zh-CN": "混合花束排列",
      en: "Arrangement of mixed bouquet",
      ms: "Penataan buket bunga berbagai bahan",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/b.jpeg", "/products/flower-bouquet/b2.jpeg"],
  },
  {
    id: "flower-3",
    name: {
      "zh-CN": "优雅花束C",
      en: "Elegant Bouquet C",
      ms: "Buket Bunga Elegan C",
    },
    price: "RM45.00-RM55.00",
    description: {
      "zh-CN": "优雅花束",
      en: "Elegant bouquet",
      ms: "Buket bunga elegan",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/c.jpeg"],
  },
  {
    id: "flower-4",
    name: {
      "zh-CN": "高级花束D",
      en: "Luxury Bouquet D",
      ms: "Buket Bunga Luks D",
    },
    price: "RM50.00-RM60.00",
    description: {
      "zh-CN": "高级花束排列",
      en: "Arrangement of luxury bouquet",
      ms: "Penataan buket bunga luks",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/d.jpeg"],
  },
  {
    id: "flower-5",
    name: {
      "zh-CN": "经典花束E",
      en: "Classic Bouquet E",
      ms: "Buket Bunga Klasik E",
    },
    price: "RM35.00-RM45.00",
    description: {
      "zh-CN": "经典花束",
      en: "Classic bouquet",
      ms: "Buket bunga klasik",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/e.jpeg"],
  },
  {
    id: "flower-6",
    name: {
      "zh-CN": "浪漫花束F",
      en: "Romantic Bouquet F",
      ms: "Buket Bunga Romantis F",
    },
    price: "RM40.00-RM50.00",
    description: {
      "zh-CN": "浪漫花束排列",
      en: "Arrangement of romantic bouquet",
      ms: "Penataan buket bunga romantis",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/f.jpeg"],
  },
  {
    id: "flower-7",
    name: {
      "zh-CN": "豪华花束G",
      en: "Luxury Bouquet G",
      ms: "Buket Bunga Luks G",
    },
    price: "RM55.00-RM65.00",
    description: {
      "zh-CN": "豪华花束",
      en: "Luxury bouquet",
      ms: "Buket bunga luks",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/g.jpeg", "/products/flower-bouquet/g2.jpeg"],
  },
  {
    id: "flower-8",
    name: {
      "zh-CN": "春季花束H",
      en: "Spring Bouquet H",
      ms: "Buket Bunga Musim Semi H",
    },
    price: "RM35.00-RM45.00",
    description: {
      "zh-CN": "春季花束排列",
      en: "Arrangement of spring bouquet",
      ms: "Penataan buket bunga musim semi",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/h.jpeg"],
  },
  {
    id: "flower-9",
    name: {
      "zh-CN": "夏季花束I",
      en: "Summer Bouquet I",
      ms: "Buket Bunga Musim Gugur I",
    },
    price: "RM40.00-RM50.00",
    description: {
      "zh-CN": "夏季花束",
      en: "Summer bouquet",
      ms: "Buket bunga musim gugur",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/i.jpeg"],
  },
  {
    id: "flower-10",
    name: {
      "zh-CN": "秋季花束J",
      en: "Autumn Bouquet J",
      ms: "Buket Bunga Musim Panas J",
    },
    price: "RM45.00-RM55.00",
    description: {
      "zh-CN": "秋季花束排列",
      en: "Arrangement of autumn bouquet",
      ms: "Penataan buket bunga musim panas",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/j.jpeg"],
  },
  {
    id: "flower-11",
    name: {
      "zh-CN": "冬季花束L",
      en: "Winter Bouquet L",
      ms: "Buket Bunga Musim Dingin L",
    },
    price: "RM40.00-RM50.00",
    description: {
      "zh-CN": "冬季花束",
      en: "Winter bouquet",
      ms: "Buket bunga musim dingin",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/l.jpeg"],
  },
  {
    id: "flower-12",
    name: {
      "zh-CN": "生日花束M",
      en: "Birthday Bouquet M",
      ms: "Buket Bunga Hari Jadi M",
    },
    price: "RM35.00-RM45.00",
    description: {
      "zh-CN": "生日花束排列",
      en: "Arrangement of birthday bouquet",
      ms: "Penataan buket bunga hari jadi",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/m.jpeg"],
  },
  {
    id: "flower-13",
    name: {
      "zh-CN": "周年花束N",
      en: "Anniversary Bouquet N",
      ms: "Buket Bunga Taun N",
    },
    price: "RM50.00-RM60.00",
    description: {
      "zh-CN": "周年花束",
      en: "Anniversary bouquet",
      ms: "Buket bunga taun",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/n.jpeg"],
  },
  {
    id: "flower-14",
    name: {
      "zh-CN": "祝贺花束O",
      en: "Congratulations Bouquet O",
      ms: "Buket Bunga Penghargaan O",
    },
    price: "RM45.00-RM55.00",
    description: {
      "zh-CN": "祝贺花束排列",
      en: "Arrangement of congratulations bouquet",
      ms: "Penataan buket bunga penghargaan",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/o.jpeg"],
  },
  {
    id: "flower-15",
    name: {
      "zh-CN": "慰问花束P",
      en: "Comfort Bouquet P",
      ms: "Buket Bunga Kenangan P",
    },
    price: "RM40.00-RM50.00",
    description: {
      "zh-CN": "慰问花束",
      en: "Comfort bouquet",
      ms: "Buket bunga kenangan",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/p.jpeg"],
  },
  {
    id: "flower-16",
    name: {
      "zh-CN": "婚礼花束Q",
      en: "Wedding Bouquet Q",
      ms: "Buket Bunga Pengantin Q",
    },
    price: "RM60.00-RM80.00",
    description: {
      "zh-CN": "婚礼花束排列",
      en: "Arrangement of wedding bouquet",
      ms: "Penataan buket bunga pengantin",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/q.jpeg"],
  },
  {
    id: "flower-17",
    name: {
      "zh-CN": "情人节花束R",
      en: "Valentine's Day Bouquet R",
      ms: "Buket Bunga Hari Valentine R",
    },
    price: "RM55.00-RM65.00",
    description: {
      "zh-CN": "情人节花束",
      en: "Valentine's day bouquet",
      ms: "Buket bunga hari Valentine",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/r.jpeg"],
  },
  {
    id: "flower-18",
    name: {
      "zh-CN": "特别场合花束",
      en: "Special Occasion Bouquet",
      ms: "Buket Bunga Kegiatan Istimewa",
    },
    price: "RM50.00-RM60.00",
    description: {
      "zh-CN": "特别场合花束",
      en: "Special occasion bouquet",
      ms: "Buket bunga kegiatan istimewa",
    },
    category: "flower-bouquet",
    images: ["/products/flower-bouquet/whatsapp-image-2022-02-25-at-16-20-11.jpeg"],
  },

  // Mini Bouquet Category (expanded to include all existing images)
  {
    id: "mini-1",
    name: {
      "zh-CN": "迷你玫瑰花束A",
      en: "Mini Rose Bouquet A",
      ms: "Buket Bunga Rose Mini A",
    },
    price: "RM15.00-RM20.00",
    description: {
      "zh-CN": "小玫瑰花束排列",
      en: "Arrangement of mini rose bouquet",
      ms: "Penataan buket bunga rose mini",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/a.jpeg", "/products/mini-bouquet/a2.jpeg", "/products/mini-bouquet/a3.jpeg"],
  },
  {
    id: "mini-2",
    name: {
      "zh-CN": "迷你混合花束B",
      en: "Mini Mixed Bouquet B",
      ms: "Buket Bunga Berbagai Bahan Mini B",
    },
    price: "RM18.00-RM25.00",
    description: {
      "zh-CN": "小混合花束",
      en: "Mini mixed bouquet",
      ms: "Buket bunga berbagai bahan mini",
    },
    category: "mini-bouquet",
    images: [
      "/products/mini-bouquet/b.jpeg",
      "/products/mini-bouquet/b2.jpeg",
      "/products/mini-bouquet/b3.jpeg",
      "/products/mini-bouquet/b4.jpeg",
      "/products/mini-bouquet/b5.jpeg",
      "/products/mini-bouquet/b6.jpeg",
      "/products/mini-bouquet/b7.jpeg",
    ],
  },
  {
    id: "mini-3",
    name: {
      "zh-CN": "迷你优雅花束C",
      en: "Mini Elegant Bouquet C",
      ms: "Buket Bunga Elegan Mini C",
    },
    price: "RM20.00-RM25.00",
    description: {
      "zh-CN": "小优雅花束排列",
      en: "Arrangement of mini elegant bouquet",
      ms: "Penataan buket bunga elegan mini",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/c.jpeg", "/products/mini-bouquet/c2.jpeg"],
  },
  {
    id: "mini-4",
    name: {
      "zh-CN": "迷你经典花束D",
      en: "Mini Classic Bouquet D",
      ms: "Buket Bunga Klasik Mini D",
    },
    price: "RM15.00-RM20.00",
    description: {
      "zh-CN": "小经典花束排列",
      en: "Arrangement of mini classic bouquet",
      ms: "Penataan buket bunga klasik mini",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/d.jpeg", "/products/mini-bouquet/d2.jpeg"],
  },
  {
    id: "mini-5",
    name: {
      "zh-CN": "迷你浪漫花束E",
      en: "Mini Romantic Bouquet E",
      ms: "Buket Bunga Romantis Mini E",
    },
    price: "RM18.00-RM23.00",
    description: {
      "zh-CN": "小浪漫花束排列",
      en: "Arrangement of mini romantic bouquet",
      ms: "Penataan buket bunga romantis mini",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/e.jpeg", "/products/mini-bouquet/e2.jpeg"],
  },
  {
    id: "mini-6",
    name: {
      "zh-CN": "迷你春季花束F",
      en: "Mini Spring Bouquet F",
      ms: "Buket Bunga Musim Semi Mini F",
    },
    price: "RM16.00-RM21.00",
    description: {
      "zh-CN": "小春季花束排列",
      en: "Arrangement of mini spring bouquet",
      ms: "Penataan buket bunga musim semi mini",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/f.jpeg", "/products/mini-bouquet/f2.jpeg"],
  },
  {
    id: "mini-7",
    name: {
      "zh-CN": "迷你夏季花束G",
      en: "Mini Summer Bouquet G",
      ms: "Buket Bunga Musim Gugur Mini G",
    },
    price: "RM17.00-RM22.00",
    description: {
      "zh-CN": "小夏季花束排列",
      en: "Arrangement of mini summer bouquet",
      ms: "Penataan buket bunga musim gugur mini",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/g.jpeg"],
  },

  // Bobo Balloon Chocolate & Flower Gift Box Category (expanded to include all existing images)
  {
    id: "bobo-choco-1",
    name: {
      "zh-CN": "波波巧克力礼品盒A",
      en: "Bobo Chocolate Gift Box A",
      ms: "Kotak Hadiah Coklat Belon Bobo A",
    },
    price: "RM80.00-RM100.00",
    description: {
      "zh-CN": "带巧克力和花的波波气球礼品盒",
      en: "Bobo balloon gift box with chocolate and flowers",
      ms: "Kotak hadiah belon bobo dengan coklat dan bunga",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bob-cho-2/a.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bob-cho-2/a2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bob-cho-2/a3.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bob-cho-2/a4.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bob-cho-2/a5.jpeg",
    ],
  },
  {
    id: "bobo-choco-2",
    name: {
      "zh-CN": "波波巧克力礼品盒B",
      en: "Bobo Chocolate Gift Box B",
      ms: "Kotak Hadiah Coklat Belon Bobo B",
    },
    price: "RM85.00-RM105.00",
    description: {
      "zh-CN": "带巧克力和花的高级波波气球礼品盒",
      en: "Luxury bobo balloon gift box with chocolate and flowers",
      ms: "Kotak hadiah belon bobo luks dengan coklat dan bunga",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bob-cho-2/b.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bob-cho-2/b2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bob-cho-2/b3.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bob-cho-2/b4.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bob-cho-2/b5.jpeg",
    ],
  },
  {
    id: "bobo-box-1",
    name: {
      "zh-CN": "波波礼品盒套装A",
      en: "Bobo Gift Box Set A",
      ms: "Set Kotak Hadiah Belon Bobo A",
    },
    price: "RM75.00-RM95.00",
    description: {
      "zh-CN": "带各种小礼物的波波气球礼品盒",
      en: "Bobo balloon gift box with various small gifts",
      ms: "Kotak hadiah belon bobo dengan pelbagai hadiah kecil",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/a.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/a2.jpeg",
    ],
  },
  {
    id: "bobo-box-2",
    name: {
      "zh-CN": "波波礼品盒套装B",
      en: "Bobo Gift Box Set B",
      ms: "Set Kotak Hadiah Belon Bobo B",
    },
    price: "RM70.00-RM90.00",
    description: {
      "zh-CN": "带高级物品的波波气球礼品盒",
      en: "Bobo balloon gift box with luxury items",
      ms: "Kotak hadiah belon bobo dengan item luks",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/b.jpeg"],
  },
  {
    id: "bobo-box-3",
    name: {
      "zh-CN": "波波礼品盒套装C",
      en: "Bobo Gift Box Set C",
      ms: "Set Kotak Hadiah Belon Bobo C",
    },
    price: "RM65.00-RM85.00",
    description: {
      "zh-CN": "波波气球礼品盒排列",
      en: "Arrangement of bobo balloon gift box",
      ms: "Penataan kotak hadiah belon bobo",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/c.jpeg"],
  },
  {
    id: "bobo-box-4",
    name: {
      "zh-CN": "波波礼品盒套装D",
      en: "Bobo Gift Box Set D",
      ms: "Set Kotak Hadiah Belon Bobo D",
    },
    price: "RM70.00-RM90.00",
    description: {
      "zh-CN": "带特别物品的波波气球礼品盒",
      en: "Bobo balloon gift box with special items",
      ms: "Kotak hadiah belon bobo dengan item istimewa",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/d.jpeg"],
  },
  {
    id: "bobo-box-5",
    name: {
      "zh-CN": "波波礼品盒套装E",
      en: "Bobo Gift Box Set E",
      ms: "Set Kotak Hadiah Belon Bobo E",
    },
    price: "RM75.00-RM95.00",
    description: {
      "zh-CN": "高级波波气球礼品盒",
      en: "Luxury bobo balloon gift box",
      ms: "Kotak hadiah belon bobo luks",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/e.jpeg"],
  },
  {
    id: "bobo-box-6",
    name: {
      "zh-CN": "波波礼品盒套装F",
      en: "Bobo Gift Box Set F",
      ms: "Set Kotak Hadiah Belon Bobo F",
    },
    price: "RM80.00-RM100.00",
    description: {
      "zh-CN": "豪华波波气球礼品盒",
      en: "Luxury bobo balloon gift box",
      ms: "Kotak hadiah belon bobo luks",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/f.jpeg"],
  },
  {
    id: "bobo-box-7",
    name: {
      "zh-CN": "波波礼品盒套装G",
      en: "Bobo Gift Box Set G",
      ms: "Set Kotak Hadiah Belon Bobo G",
    },
    price: "RM75.00-RM95.00",
    description: {
      "zh-CN": "特别波波气球礼品盒排列",
      en: "Arrangement of special bobo balloon gift box",
      ms: "Penataan kotak hadiah belon bobo istimewa",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/g.jpeg"],
  },
  {
    id: "bobo-box-8",
    name: {
      "zh-CN": "波波礼品盒套装H",
      en: "Bobo Gift Box Set H",
      ms: "Set Kotak Hadiah Belon Bobo H",
    },
    price: "RM70.00-RM90.00",
    description: {
      "zh-CN": "优雅波波气球礼品盒",
      en: "Elegant bobo balloon gift box",
      ms: "Kotak hadiah belon bobo elegan",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/h.jpeg"],
  },
  {
    id: "bobo-box-9",
    name: {
      "zh-CN": "波波礼品盒套装I",
      en: "Bobo Gift Box Set I",
      ms: "Set Kotak Hadiah Belon Bobo I",
    },
    price: "RM85.00-RM105.00",
    description: {
      "zh-CN": "带额外物品的高级波波气球礼品盒",
      en: "Luxury bobo balloon gift box with additional items",
      ms: "Kotak hadiah belon bobo luks dengan item tambahan",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/i.jpeg"],
  },
  {
    id: "bobo-box-10",
    name: {
      "zh-CN": "波波礼品盒套装J",
      en: "Bobo Gift Box Set J",
      ms: "Set Kotak Hadiah Belon Bobo J",
    },
    price: "RM80.00-RM100.00",
    description: {
      "zh-CN": "豪华波波气球礼品盒",
      en: "Luxury bobo balloon gift box",
      ms: "Kotak hadiah belon bobo luks",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/j.jpeg"],
  },
  {
    id: "bobo-box-11",
    name: {
      "zh-CN": "波波礼品盒套装K",
      en: "Bobo Gift Box Set K",
      ms: "Set Kotak Hadiah Belon Bobo K",
    },
    price: "RM90.00-RM110.00",
    description: {
      "zh-CN": "终极波波气球礼品盒套装",
      en: "Ultimate bobo balloon gift box set",
      ms: "Set kotak hadiah belon bobo ultimate",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/k.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/k2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/k3.jpeg",
    ],
  },
  {
    id: "bobo-box-12",
    name: {
      "zh-CN": "波波礼品盒套装L",
      en: "Bobo Gift Box Set L",
      ms: "Set Kotak Hadiah Belon Bobo L",
    },
    price: "RM75.00-RM95.00",
    description: {
      "zh-CN": "经典波波气球礼品盒",
      en: "Classic bobo balloon gift box",
      ms: "Kotak hadiah belon bobo klasik",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/l.jpeg"],
  },
  {
    id: "bobo-box-13",
    name: {
      "zh-CN": "特别场合波波礼品盒",
      en: "Special Occasion Bobo Gift Box",
      ms: "Kotak Hadiah Belon Bobo Kegiatan Istimewa",
    },
    price: "RM85.00-RM105.00",
    description: {
      "zh-CN": "特别场合波波气球礼品盒",
      en: "Special occasion bobo balloon gift box",
      ms: "Kotak hadiah belon bobo kegiatan istimewa",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/whatsapp-image-2022-02-23-at-01.48.11-1-.jpeg"],
  },
  {
    id: "bobo-cho-3-1",
    name: {
      "zh-CN": "波波巧克力豪华套装A",
      en: "Luxury Bobo Chocolate Set A",
      ms: "Set Coklat Belon Bobo Luks A",
    },
    price: "RM95.00-RM115.00",
    description: {
      "zh-CN": "带高级巧克力选择的豪华波波气球",
      en: "Luxury bobo balloon with high-end chocolate options",
      ms: "Belon bobo luks dengan pilihan coklat tingkat tinggi",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/a.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/a2.jpeg",
    ],
  },
  {
    id: "bobo-cho-3-2",
    name: {
      "zh-CN": "波波巧克力豪华套装B",
      en: "Luxury Bobo Chocolate Set B",
      ms: "Set Coklat Belon Bobo Luks B",
    },
    price: "RM90.00-RM110.00",
    description: {
      "zh-CN": "高级波波气球巧克力排列",
      en: "Arrangement of luxury bobo balloon chocolate",
      ms: "Penataan coklat belon bobo luks",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/b.jpeg"],
  },
  {
    id: "bobo-cho-3-3",
    name: {
      "zh-CN": "波波巧克力豪华套装C",
      en: "Luxury Bobo Chocolate Set C",
      ms: "Set Coklat Belon Bobo Luks C",
    },
    price: "RM100.00-RM120.00",
    description: {
      "zh-CN": "带美食巧克力的豪华波波气球",
      en: "Luxury bobo balloon with gourmet chocolate",
      ms: "Belon bobo luks dengan coklat gourmet",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/c.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/c2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/c3.jpeg",
    ],
  },
  {
    id: "bobo-cho-3-4",
    name: {
      "zh-CN": "波波巧克力豪华套装D",
      en: "Luxury Bobo Chocolate Set D",
      ms: "Set Coklat Belon Bobo Luks D",
    },
    price: "RM95.00-RM115.00",
    description: {
      "zh-CN": "优雅波波气球巧克力礼品套装",
      en: "Elegant bobo balloon chocolate gift set",
      ms: "Set hadiah belon bobo coklat elegan",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/d.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/d2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/d3.jpeg",
    ],
  },
  {
    id: "bobo-cho-3-5",
    name: {
      "zh-CN": "波波巧克力豪华套装E",
      en: "Luxury Bobo Chocolate Set E",
      ms: "Set Coklat Belon Bobo Luks E",
    },
    price: "RM105.00-RM125.00",
    description: {
      "zh-CN": "终极波波气球巧克力体验",
      en: "Ultimate bobo balloon chocolate experience",
      ms: "Pengalaman coklat belon bobo ultimate",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/e.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/e2.jpeg",
    ],
  },
  {
    id: "choco-box-1",
    name: {
      "zh-CN": "巧克力豪华礼品盒A",
      en: "Luxury Chocolate Gift Box A",
      ms: "Kotak Hadiah Coklat Luks A",
    },
    price: "RM90.00-RM120.00",
    description: {
      "zh-CN": "带气球的巧克力豪华礼品盒",
      en: "Luxury chocolate gift box with balloons",
      ms: "Kotak hadiah coklat luks dengan belon",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/a.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/a2.jpeg",
    ],
  },
  {
    id: "choco-box-2",
    name: {
      "zh-CN": "巧克力高级礼品盒B",
      en: "Luxury Chocolate Gift Box B",
      ms: "Kotak Hadiah Coklat Luks B",
    },
    price: "RM95.00-RM125.00",
    description: {
      "zh-CN": "带气球排列的高级巧克力礼品盒",
      en: "Luxury chocolate gift box with balloon arrangement",
      ms: "Kotak hadiah coklat luks dengan penataan belon",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/b.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/b2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/b3.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/b4.jpeg",
    ],
  },
  {
    id: "choco-box-3",
    name: {
      "zh-CN": "巧克力豪华礼品盒C",
      en: "Luxury Chocolate Gift Box C",
      ms: "Kotak Hadiah Coklat Luks C",
    },
    price: "RM100.00-RM130.00",
    description: {
      "zh-CN": "豪华巧克力礼品盒套装",
      en: "Luxury chocolate gift box set",
      ms: "Set kotak hadiah coklat luks",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/c.jpeg"],
  },
  {
    id: "choco-box-4",
    name: {
      "zh-CN": "巧克力终极礼品盒D",
      en: "Ultimate Chocolate Gift Box D",
      ms: "Kotak Hadiah Coklat Ultimate D",
    },
    price: "RM110.00-RM140.00",
    description: {
      "zh-CN": "带高级气球的终极巧克力礼品盒",
      en: "Ultimate chocolate gift box with luxury balloons",
      ms: "Kotak hadiah coklat ultimate dengan belon luks",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/d.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/d2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/d3.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/d4.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/d5.jpeg",
    ],
  },
  {
    id: "choco-box-5",
    name: {
      "zh-CN": "巧克力精英礼品盒E",
      en: "Elite Chocolate Gift Box E",
      ms: "Kotak Hadiah Coklat Elite E",
    },
    price: "RM105.00-RM135.00",
    description: {
      "zh-CN": "精英巧克力礼品盒排列",
      en: "Arrangement of elite chocolate gift box",
      ms: "Penataan kotak hadiah coklat elite",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/e.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/e2.jpeg",
    ],
  },
  {
    id: "choco-box-6",
    name: {
      "zh-CN": "巧克力皇家礼品盒F",
      en: "Royal Chocolate Gift Box F",
      ms: "Kotak Hadiah Coklat Royal F",
    },
    price: "RM115.00-RM145.00",
    description: {
      "zh-CN": "带专属物品的皇家巧克力礼品盒",
      en: "Royal chocolate gift box with exclusive items",
      ms: "Kotak hadiah coklat royal dengan item eksklusif",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/f.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/f2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/f3.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/f4.jpeg",
    ],
  },
  {
    id: "choco-box-7",
    name: {
      "zh-CN": "巧克力帝国礼品盒G",
      en: "Empire Chocolate Gift Box G",
      ms: "Kotak Hadiah Coklat Empayar G",
    },
    price: "RM120.00-RM150.00",
    description: {
      "zh-CN": "帝国巧克力礼品盒 - 终极奢华",
      en: "Empire chocolate gift box - ultimate luxury",
      ms: "Kotak hadiah coklat empayar - luks ultimate",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/g.jpeg"],
  },
  {
    id: "choco-box-8",
    name: {
      "zh-CN": "巧克力签名礼品盒I",
      en: "Signature Chocolate Gift Box I",
      ms: "Kotak Hadiah Coklat Tandatangan I",
    },
    price: "RM100.00-RM130.00",
    description: {
      "zh-CN": "签名巧克力礼品盒套装",
      en: "Signature chocolate gift box set",
      ms: "Set kotak hadiah coklat tandatangan",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/i.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/i2.jpeg",
    ],
  },

  // Money Bouquet Category (5 products)
  {
    id: "money-1",
    name: {
      "zh-CN": "生日金钱花束套装1",
      en: "Birthday Money Bouquet Set 1",
      ms: "Set Buket Wang Hari Jadi 1",
    },
    price: "RM45.00",
    description: {
      "zh-CN": "生日主题金钱花束，包含彩色气球和现金装饰",
      en: "Birthday themed money bouquet with colorful balloons and cash decoration",
      ms: "Buket wang bertema hari jadi dengan belon berwarna dan hiasan tunai",
    },
    category: "money-bouquet",
    images: ["/products/money-bouquet/img-1.jpeg"],
  },
  {
    id: "money-2",
    name: {
      "zh-CN": "金币巧克力花束",
      en: "Gold Coin Chocolate Bouquet",
      ms: "Buket Coklat Syiling Emas",
    },
    price: "RM38.00",
    description: {
      "zh-CN": "金币巧克力花束，配蓝色玫瑰装饰",
      en: "Gold coin chocolate bouquet with blue rose decoration",
      ms: "Buket coklat syiling emas dengan hiasan mawar biru",
    },
    category: "money-bouquet",
    images: ["/products/money-bouquet/img-2.jpeg"],
  },
  {
    id: "money-4",
    name: {
      "zh-CN": "粉色金钱花束",
      en: "Pink Money Bouquet",
      ms: "Buket Wang Merah Jambu",
    },
    price: "RM42.00",
    description: {
      "zh-CN": "粉色包装金钱花束，适合女性庆祝场合",
      en: "Pink wrapped money bouquet, perfect for female celebrations",
      ms: "Buket wang berbalut merah jambu, sesuai untuk sambutan wanita",
    },
    category: "money-bouquet",
    images: ["/products/money-bouquet/img-4.jpeg"],
  },
  {
    id: "money-5",
    name: {
      "zh-CN": "蓝色金钱花束",
      en: "Blue Money Bouquet",
      ms: "Buket Wang Biru",
    },
    price: "RM40.00",
    description: {
      "zh-CN": "蓝色包装金钱花束，配白色小花装饰",
      en: "Blue wrapped money bouquet with white flower decoration",
      ms: "Buket wang berbalut biru dengan hiasan bunga putih",
    },
    category: "money-bouquet",
    images: ["/products/money-bouquet/img-5.jpeg"],
  },
  {
    id: "money-6",
    name: {
      "zh-CN": "零食金钱花束",
      en: "Snack Money Bouquet",
      ms: "Buket Wang Snek",
    },
    price: "RM35.00",
    description: {
      "zh-CN": "零食和现金组合花束，红色包装",
      en: "Snack and cash combination bouquet in red wrapping",
      ms: "Buket gabungan snek dan tunai dalam balutan merah",
    },
    category: "money-bouquet",
    images: ["/products/money-bouquet/img-6.jpeg"],
  },
]

export const categories = [
  {
    id: "all",
    name: {
      "zh-CN": "所有产品",
      en: "All Products",
      ms: "Semua Produk",
    },
  },
  {
    id: "helium-balloon",
    name: {
      "zh-CN": "氦气球",
      en: "Helium Balloon",
      ms: "Belon Helium",
    },
  },
  {
    id: "bobo-foil-balloon",
    name: {
      "zh-CN": "Bobo/铝箔气球",
      en: "Bobo/Foil Balloon",
      ms: "Belon Bobo/Foil",
    },
  },
  // Money Bouquet Category
  {
    id: "money-bouquet",
    name: {
      "zh-CN": "金钱花束",
      en: "Money Bouquet",
      ms: "Buket Wang",
    },
  },
  {
    id: "graduation",
    name: {
      "zh-CN": "毕业花束",
      en: "Graduation Bouquet",
      ms: "Buket Graduasi",
    },
  },
  {
    id: "zero-snack-chocolate",
    name: {
      "zh-CN": "零食巧克力",
      en: "Zero Snack Chocolate",
      ms: "Coklat Snek Sifar",
    },
  },
  {
    id: "mini-chocolate-flower-gift-box",
    name: {
      "zh-CN": "迷你巧克力花束礼盒",
      en: "Mini Chocolate Flower Gift Box",
      ms: "Kotak Hadiah Bunga Coklat Mini",
    },
  },
  {
    id: "sticker",
    name: {
      "zh-CN": "贴纸",
      en: "Sticker",
      ms: "Pelekat",
    },
  },
  {
    id: "flower-bouquet",
    name: {
      "zh-CN": "花束",
      en: "Flower Bouquet",
      ms: "Buket Bunga",
    },
  },
  {
    id: "mini-bouquet",
    name: {
      "zh-CN": "迷你花束",
      en: "Mini Bouquet",
      ms: "Buket Mini",
    },
  },
  {
    id: "bobo-balloon-chocolate-flower-gift-box",
    name: {
      "zh-CN": "Bobo气球巧克力花束礼盒",
      en: "Bobo Balloon Chocolate Flower Gift Box",
      ms: "Kotak Hadiah Bunga Coklat Belon Bobo",
    },
  },
]
