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
    id: "graduation-bear-sunflower",
    name: {
      "zh-CN": "毕业熊向日葵花束",
      en: "Graduation Bear Sunflower Bouquet",
      ms: "Buket Bunga Matahari Beruang Graduasi",
    },
    price: "RM30.00",
    description: {
      "zh-CN": "毕业熊向日葵花束，温馨可爱的毕业礼物",
      en: "Graduation bear sunflower bouquet, warm and lovely graduation gift",
      ms: "Buket bunga matahari beruang graduasi, hadiah graduasi yang mesra dan comel",
    },
    category: "graduation",
    images: [
      "/products/graduation/A.jpeg",
      "/products/graduation/A2.jpeg",
      "/products/graduation/A3.jpeg",
      "/products/graduation/A4.jpeg",
    ],
  },
  {
    id: "graduation-bear-baby-breath",
    name: {
      "zh-CN": "毕业熊满天星花束",
      en: "Graduation Bear Baby Breath Bouquet",
      ms: "Buket Baby Breath Beruang Graduasi",
    },
    price: "RM39.00",
    description: {
      "zh-CN": "毕业熊满天星花束，优雅精致的毕业纪念",
      en: "Graduation bear baby breath bouquet, elegant and exquisite graduation memorial",
      ms: "Buket baby breath beruang graduasi, kenangan graduasi yang elegan dan halus",
    },
    category: "graduation",
    images: [
      "/products/graduation/B.jpeg",
      "/products/graduation/B2.jpeg",
      "/products/graduation/B3.jpeg",
      "/products/graduation/B4.jpeg",
      "/products/graduation/B5.jpeg",
    ],
  },
  {
    id: "sunflower-soap-rose",
    name: {
      "zh-CN": "向日葵香皂玫瑰花束",
      en: "Sunflower Soap Rose Bouquet",
      ms: "Buket Ros Sabun Bunga Matahari",
    },
    price: "RM16.00",
    description: {
      "zh-CN": "向日葵香皂玫瑰花束，经济实惠的毕业礼品",
      en: "Sunflower soap rose bouquet, affordable graduation gift",
      ms: "Buket ros sabun bunga matahari, hadiah graduasi yang berpatutan",
    },
    category: "graduation",
    images: [
      "/products/graduation/C.jpeg",
      "/products/graduation/C2.jpeg",
      "/products/graduation/C3.jpeg",
      "/products/graduation/C4.jpeg",
      "/products/graduation/C5.jpeg",
    ],
  },
  {
    id: "chocolate-graduation",
    name: {
      "zh-CN": "巧克力毕业花束",
      en: "Chocolate Graduation Bouquet",
      ms: "Buket Graduasi Coklat",
    },
    price: "RM70.00",
    description: {
      "zh-CN": "巧克力毕业花束，甜蜜的毕业祝福",
      en: "Chocolate graduation bouquet, sweet graduation blessing",
      ms: "Buket graduasi coklat, berkat graduasi yang manis",
    },
    category: "graduation",
    images: ["/products/graduation/D.jpeg"],
  },
  {
    id: "snacks-chocolate-graduation",
    name: {
      "zh-CN": "零食巧克力毕业花束",
      en: "Snacks Chocolate Graduation Bouquet",
      ms: "Buket Graduasi Coklat Snek",
    },
    price: "RM65.00",
    description: {
      "zh-CN": "零食巧克力毕业花束，美味的毕业庆祝",
      en: "Snacks chocolate graduation bouquet, delicious graduation celebration",
      ms: "Buket graduasi coklat snek, sambutan graduasi yang sedap",
    },
    category: "graduation",
    images: ["/products/graduation/E.jpeg"],
  },
  {
    id: "15pcs-soap-rose-graduation",
    name: {
      "zh-CN": "15朵香皂玫瑰毕业花束",
      en: "15PCS Soap Rose Graduation Bouquet",
      ms: "Buket Graduasi 15 Keping Ros Sabun",
    },
    price: "RM99.00",
    description: {
      "zh-CN": "15朵香皂玫瑰毕业花束，豪华的毕业礼品",
      en: "15pcs soap rose graduation bouquet, luxurious graduation gift",
      ms: "Buket graduasi 15 keping ros sabun, hadiah graduasi yang mewah",
    },
    category: "graduation",
    images: ["/products/graduation/F.jpeg"],
  },
  {
    id: "mix-soap-flower-graduation",
    name: {
      "zh-CN": "混合香皂花毕业花束",
      en: "Mix Soap Flower Graduation Bouquet",
      ms: "Buket Graduasi Bunga Sabun Campuran",
    },
    price: "RM89.00",
    description: {
      "zh-CN": "混合香皂花毕业花束，多样化的毕业纪念品",
      en: "Mix soap flower graduation bouquet, diversified graduation souvenir",
      ms: "Buket graduasi bunga sabun campuran, cenderahati graduasi yang pelbagai",
    },
    category: "graduation",
    images: ["/products/graduation/G.jpeg", "/products/graduation/G2.jpeg"],
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

  // Mini Bouquet Category (corrected to match original HTML)
  {
    id: "mini-1",
    name: {
      "zh-CN": "迷你3朵肥皂玫瑰花束",
      en: "MINI 3PCS SOAP ROSE BOUQUET",
      ms: "BUKET BUNGA SABUN ROSE MINI 3 KEPING",
    },
    price: "RM15.00",
    description: {
      "zh-CN": "3朵肥皂玫瑰，卡片/装饰加RM1",
      en: "3pcs soap rose, Card/Topper Add on RM1",
      ms: "3 keping bunga sabun rose, Kad/Hiasan tambahan RM1",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/a.jpeg", "/products/mini-bouquet/a2.jpeg", "/products/mini-bouquet/a3.jpeg"],
  },
  {
    id: "mini-2",
    name: {
      "zh-CN": "迷你5朵肥皂玫瑰花束",
      en: "MINI 5PCS SOAP ROSE BOUQUET",
      ms: "BUKET BUNGA SABUN ROSE MINI 5 KEPING",
    },
    price: "RM20.00",
    description: {
      "zh-CN": "5朵肥皂玫瑰，卡片/装饰加RM1",
      en: "5pcs soap rose, Card/Topper Add on RM1",
      ms: "5 keping bunga sabun rose, Kad/Hiasan tambahan RM1",
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
      "zh-CN": "可爱气球配肥皂花束",
      en: "CUTE BALLOON WITH SOAP FLOWER BOUQUET",
      ms: "BELON COMEL DENGAN BUKET BUNGA SABUN",
    },
    price: "RM20.00",
    description: {
      "zh-CN": "设计1(3朵玫瑰)，设计2(混合花)",
      en: "design 1(3pcs Rose), design 2(mix Flower)",
      ms: "reka bentuk 1(3 keping Rose), reka bentuk 2(bunga campuran)",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/c.jpeg", "/products/mini-bouquet/c2.jpeg"],
  },
  {
    id: "mini-4",
    name: {
      "zh-CN": "肥皂玫瑰配巧克力迷你花束",
      en: "SOAP ROSE WITH CHOCOLATE MINI BOUQUET",
      ms: "BUNGA SABUN ROSE DENGAN COKLAT MINI BOUQUET",
    },
    price: "RM9.00",
    description: {
      "zh-CN": "1朵玫瑰，2块巧克力",
      en: "1pcs rose, 2pcs Chocolate",
      ms: "1 keping rose, 2 keping Coklat",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/d.jpeg", "/products/mini-bouquet/d2.jpeg"],
  },
  {
    id: "mini-5",
    name: {
      "zh-CN": "肥皂玫瑰配费列罗迷你花束",
      en: "SOAP ROSE WITH FERRERO MINI BOUQUET",
      ms: "BUNGA SABUN ROSE DENGAN FERRERO MINI BOUQUET",
    },
    price: "RM22.00",
    description: {
      "zh-CN": "3朵肥皂玫瑰，2颗费列罗巧克力",
      en: "3pcs soap rose, 2pcs Ferrero Roche",
      ms: "3 keping bunga sabun rose, 2 keping Ferrero Roche",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/e2.jpeg", "/products/mini-bouquet/e.jpeg"],
  },
  {
    id: "mini-6",
    name: {
      "zh-CN": "肥皂康乃馨满天星花束",
      en: "SOAP CARNATION BABY BREATH BOUQUET",
      ms: "BUKET BUNGA SABUN CARNATION BABY BREATH",
    },
    price: "RM10.00",
    description: {
      "zh-CN": "1朵肥皂康乃馨配满天星，装饰/卡片加RM1.00",
      en: "1 pcs soap Carnation with baby breath, Add on topper/card RM1.00",
      ms: "1 keping bunga sabun Carnation dengan baby breath, Tambahan hiasan/kad RM1.00",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/f.jpeg", "/products/mini-bouquet/f2.jpeg"],
  },
  {
    id: "mini-7",
    name: {
      "zh-CN": "迷你肥皂玫瑰花束",
      en: "MINI SOAP ROSE BOUQUET",
      ms: "BUKET BUNGA SABUN ROSE MINI",
    },
    price: "RM8.00",
    description: {
      "zh-CN": "1朵肥皂玫瑰",
      en: "1pcs Soap Rose",
      ms: "1 keping Bunga Sabun Rose",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/g.jpeg"],
  },
  {
    id: "mini-8",
    name: {
      "zh-CN": "肥皂玫瑰配满天星",
      en: "SOAP ROSE WITH BABY BREATH",
      ms: "BUNGA SABUN ROSE DENGAN BABY BREATH",
    },
    price: "RM28.00",
    description: {
      "zh-CN": "2朵肥皂玫瑰配满天星",
      en: "2pcs Soap Rose with baby breath",
      ms: "2 keping Bunga Sabun Rose dengan baby breath",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/h.jpeg"],
  },
  {
    id: "mini-9",
    name: {
      "zh-CN": "肥皂玫瑰配满天星",
      en: "SOAP ROSE WITH BABY BREATH",
      ms: "BUNGA SABUN ROSE DENGAN BABY BREATH",
    },
    price: "RM15.00",
    description: {
      "zh-CN": "1朵肥皂玫瑰配满天星",
      en: "1pcs Soap Rose with baby breath",
      ms: "1 keping Bunga Sabun Rose dengan baby breath",
    },
    category: "mini-bouquet",
    images: ["/products/mini-bouquet/i.jpeg", "/products/mini-bouquet/i2.jpeg", "/products/mini-bouquet/i3.jpeg"],
  },

  // Bobo Balloon Chocolate & Flower Gift Box Category (restructured to match original HTML)
  {
    id: "bobo-choco-foil-balloon-1",
    name: {
      "zh-CN": "18寸箔气球巧克力盒",
      en: "18 INCH FOIL BALLOON CHOCO BOX",
      ms: "KOTAK COKLAT BELON FOIL 18 INCI",
    },
    price: "RM49.00",
    description: {
      "zh-CN": "18寸箔气球巧克力礼品盒，预算从RM49.00开始，可定制颜色，价格包含定制波波字样，LED灯+RM2.00",
      en: "18 inch foil balloon chocolate gift box. Budget starts from RM49.00. Customize color available. Price including customize bobo wording. Add On Led +RM2.00",
      ms: "Kotak hadiah coklat belon foil 18 inci. Bajet bermula dari RM49.00. Warna boleh disesuaikan. Harga termasuk perkataan bobo disesuaikan. Tambah LED +RM2.00",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/c.jpeg"],
  },
  {
    id: "bobo-choco-12inch-1",
    name: {
      "zh-CN": "12寸巧克力盒",
      en: "12 INCH CHOCO BOX",
      ms: "KOTAK COKLAT 12 INCI",
    },
    price: "RM50.00",
    description: {
      "zh-CN": "12寸巧克力礼品盒，可定制颜色，价格包含定制波波字样",
      en: "12 inch chocolate gift box. Customize color available. Price including customize bobo wording",
      ms: "Kotak hadiah coklat 12 inci. Warna boleh disesuaikan. Harga termasuk perkataan bobo disesuaikan",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/a.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/a2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/g.jpeg",
    ],
  },
  {
    id: "bobo-choco-money-box",
    name: {
      "zh-CN": "10寸波波巧克力钱盒",
      en: "10INCH BOBO CHOCO MONEY BOX",
      ms: "KOTAK WANG COKLAT BOBO 10 INCI",
    },
    price: "RM50.00",
    description: {
      "zh-CN": "10寸波波巧克力钱盒，可放20张现金",
      en: "10 inch bobo chocolate money box - can put 20pcs cash",
      ms: "Kotak wang coklat bobo 10 inci - boleh letak 20 keping wang tunai",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/l.jpeg"],
  },
  {
    id: "bobo-choco-12inch-2",
    name: {
      "zh-CN": "12寸巧克力盒",
      en: "12 INCH CHOCO BOX",
      ms: "KOTAK COKLAT 12 INCI",
    },
    price: "RM55.00",
    description: {
      "zh-CN": "12寸巧克力礼品盒，高级版本",
      en: "12 inch chocolate gift box, premium version",
      ms: "Kotak hadiah coklat 12 inci, versi premium",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/a.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/a2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/b.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/b2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/b3.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/b4.jpeg",
    ],
  },
  {
    id: "bobo-choco-12inch-3",
    name: {
      "zh-CN": "12寸波波巧克力盒",
      en: "12INCH BOBO CHOCO BOX",
      ms: "KOTAK COKLAT BOBO 12 INCI",
    },
    price: "RM60.00",
    description: {
      "zh-CN": "12寸波波巧克力礼品盒",
      en: "12 inch bobo chocolate gift box",
      ms: "Kotak hadiah coklat bobo 12 inci",
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
    id: "bobo-cute-teddy-box",
    name: {
      "zh-CN": "12寸可爱泰迪波波盒",
      en: "12INCH CUTE TEDDY BOBO BOX",
      ms: "KOTAK BOBO TEDDY COMEL 12 INCI",
    },
    price: "RM65.00",
    description: {
      "zh-CN": "12寸可爱泰迪波波礼品盒",
      en: "12 inch cute teddy bobo gift box",
      ms: "Kotak hadiah bobo teddy comel 12 inci",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/e.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/e2.jpeg",
    ],
  },
  {
    id: "bobo-choco-12inch-4",
    name: {
      "zh-CN": "12寸波波巧克力盒",
      en: "12INCH BOBO CHOCO BOX",
      ms: "KOTAK COKLAT BOBO 12 INCI",
    },
    price: "RM65.00",
    description: {
      "zh-CN": "12寸波波巧克力礼品盒，豪华版",
      en: "12 inch bobo chocolate gift box, luxury version",
      ms: "Kotak hadiah coklat bobo 12 inci, versi mewah",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/i.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/choco-box-1/i2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/c.jpeg",
    ],
  },
  {
    id: "bobo-foil-balloon-fruit-box",
    name: {
      "zh-CN": "10寸箔气球水果盒",
      en: "10INCH FOIL BALLOON FRUIT BOX",
      ms: "KOTAK BUAH BELON FOIL 10 INCI",
    },
    price: "RM65.00",
    description: {
      "zh-CN": "10寸箔气球水果礼品盒",
      en: "10 inch foil balloon fruit gift box",
      ms: "Kotak hadiah buah belon foil 10 inci",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/k.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/k2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/k3.jpeg",
    ],
  },
  {
    id: "bobo-choco-16inch-1",
    name: {
      "zh-CN": "16寸波波巧克力盒",
      en: "16INCH BOBO CHOCO BOX",
      ms: "KOTAK COKLAT BOBO 16 INCI",
    },
    price: "RM75.00",
    description: {
      "zh-CN": "16寸波波巧克力礼品盒",
      en: "16 inch bobo chocolate gift box",
      ms: "Kotak hadiah coklat bobo 16 inci",
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
    id: "bobo-ferrero-16inch",
    name: {
      "zh-CN": "16寸波波10粒费列罗巧克力盒",
      en: "16INCH BOBO 10PCS FERRERO CHOCO BOX",
      ms: "KOTAK COKLAT FERRERO 10 BIJI BOBO 16 INCI",
    },
    price: "RM80.00",
    description: {
      "zh-CN": "16寸波波10粒费列罗巧克力礼品盒",
      en: "16 inch bobo 10pcs Ferrero chocolate gift box",
      ms: "Kotak hadiah coklat Ferrero 10 biji bobo 16 inci",
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
    id: "bobo-choco-16inch-seta-setb",
    name: {
      "zh-CN": "16寸波波巧克力盒",
      en: "16INCH BOBO CHOCO BOX",
      ms: "KOTAK COKLAT BOBO 16 INCI",
    },
    price: "RM80.00",
    description: {
      "zh-CN": "16寸波波巧克力盒 - SETA(16粒KitKat/Cadbury) - SETB(15粒KitKat/Cadbury + 1朵肥皂玫瑰)",
      en: "16 inch bobo chocolate box - SETA(16pcs KitKat/Cadbury) - SETB(15Pcs KitKat/Cadbury + 1 Soap Rose)",
      ms: "Kotak coklat bobo 16 inci - SETA(16 biji KitKat/Cadbury) - SETB(15 biji KitKat/Cadbury + 1 Mawar Sabun)",
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
    id: "bobo-choco-16inch-2",
    name: {
      "zh-CN": "16寸波波巧克力盒",
      en: "16INCH BOBO CHOCO BOX",
      ms: "KOTAK COKLAT BOBO 16 INCI",
    },
    price: "RM85.00",
    description: {
      "zh-CN": "16寸波波巧克力礼品盒，高级版",
      en: "16 inch bobo chocolate gift box, premium version",
      ms: "Kotak hadiah coklat bobo 16 inci, versi premium",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/a.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/a2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/b.jpeg",
    ],
  },
  {
    id: "bobo-choco-16inch-3",
    name: {
      "zh-CN": "16寸波波巧克力盒",
      en: "16INCH BOBO CHOCO BOX",
      ms: "KOTAK COKLAT BOBO 16 INCI",
    },
    price: "RM90.00",
    description: {
      "zh-CN": "16寸波波巧克力礼品盒，豪华版",
      en: "16 inch bobo chocolate gift box, luxury version",
      ms: "Kotak hadiah coklat bobo 16 inci, versi mewah",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/b.jpeg"],
  },
  {
    id: "bobo-duit-tarik-choco-box",
    name: {
      "zh-CN": "10寸波波拉钱巧克力盒",
      en: "10INCH BOBO DUIT TARIK CHOCO BOX",
      ms: "KOTAK COKLAT DUIT TARIK BOBO 10 INCI",
    },
    price: "RM100.00",
    description: {
      "zh-CN": "10寸波波拉钱巧克力盒，可放20张现金",
      en: "10 inch bobo money pull chocolate box - can put 20pcs cash",
      ms: "Kotak coklat duit tarik bobo 10 inci - boleh letak 20 keping wang tunai",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/c.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/c2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/c3.jpeg",
    ],
  },
  {
    id: "bobo-cute-doll-teddy-16inch",
    name: {
      "zh-CN": "16寸可爱娃娃/泰迪巧克力盒",
      en: "16INCH CUTE DOLL /TEDDY CHOCO BOX",
      ms: "KOTAK COKLAT ANAK PATUNG/TEDDY COMEL 16 INCI",
    },
    price: "RM100.00",
    description: {
      "zh-CN": "16寸可爱娃娃/泰迪巧克力礼品盒",
      en: "16 inch cute doll/teddy chocolate gift box",
      ms: "Kotak hadiah coklat anak patung/teddy comel 16 inci",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/d.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/d2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/d3.jpeg",
    ],
  },
  {
    id: "bobo-choco-18inch-1",
    name: {
      "zh-CN": "18寸巧克力盒",
      en: "18INCH CHOCO BOX",
      ms: "KOTAK COKLAT 18 INCI",
    },
    price: "RM100.00",
    description: {
      "zh-CN": "18寸巧克力礼品盒",
      en: "18 inch chocolate gift box",
      ms: "Kotak hadiah coklat 18 inci",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: [
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/e.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-cho-3/e2.jpeg",
      "/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/d.jpeg",
    ],
  },
  {
    id: "bobo-flower-ferrero-gift-box",
    name: {
      "zh-CN": "12寸波波花费列罗礼品盒",
      en: "12INCH BOBO FLOWER FERRERO GIFT BOX",
      ms: "KOTAK HADIAH FERRERO BUNGA BOBO 12 INCI",
    },
    price: "RM100.00",
    description: {
      "zh-CN": "12寸波波花费列罗礼品盒",
      en: "12 inch bobo flower Ferrero gift box",
      ms: "Kotak hadiah Ferrero bunga bobo 12 inci",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/e.jpeg"],
  },
  {
    id: "bobo-soap-flower-box-16inch",
    name: {
      "zh-CN": "16寸波波肥皂花盒",
      en: "16INCH BOBO SOAP FLOWER BOX",
      ms: "KOTAK BUNGA SABUN BOBO 16 INCI",
    },
    price: "RM100.00",
    description: {
      "zh-CN": "16寸波波肥皂花礼品盒",
      en: "16 inch bobo soap flower gift box",
      ms: "Kotak hadiah bunga sabun bobo 16 inci",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/f.jpeg"],
  },
  {
    id: "bobo-snacks-choco-box-18inch",
    name: {
      "zh-CN": "18寸波波零食巧克力盒",
      en: "18INCH BOBO SNACKS CHOCO BOX",
      ms: "KOTAK COKLAT SNEK BOBO 18 INCI",
    },
    price: "RM105.00",
    description: {
      "zh-CN": "18寸波波零食巧克力礼品盒",
      en: "18 inch bobo snacks chocolate gift box",
      ms: "Kotak hadiah coklat snek bobo 18 inci",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/g.jpeg"],
  },
  {
    id: "bobo-ferrero-rose-box-20inch",
    name: {
      "zh-CN": "20寸波波费列罗玫瑰盒",
      en: "20INCH BOBO FERRERO ROSE BOX",
      ms: "KOTAK MAWAR FERRERO BOBO 20 INCI",
    },
    price: "RM120.00",
    description: {
      "zh-CN": "20寸波波费列罗玫瑰盒 - 6粒费列罗 - 10朵肥皂玫瑰",
      en: "20 inch bobo Ferrero rose box - 6pcs FERRERO - 10pcs Soap rose",
      ms: "Kotak mawar Ferrero bobo 20 inci - 6 biji FERRERO - 10 biji mawar sabun",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/h.jpeg"],
  },
  {
    id: "bobo-jumbo-choco-box-20inch",
    name: {
      "zh-CN": "20寸波波巨型巧克力盒",
      en: "20INCH BOBO JUMBO CHOCO BOX",
      ms: "KOTAK COKLAT JUMBO BOBO 20 INCI",
    },
    price: "RM120.00",
    description: {
      "zh-CN": "20寸波波巨型巧克力礼品盒",
      en: "20 inch bobo jumbo chocolate gift box",
      ms: "Kotak hadiah coklat jumbo bobo 20 inci",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/i.jpeg"],
  },
  {
    id: "bobo-grand-opening-soap-flower-box",
    name: {
      "zh-CN": "16寸波波开业肥皂花盒",
      en: "16INCH BOBO GRAND OPENING SOAP FLOWER BOX",
      ms: "KOTAK BUNGA SABUN PEMBUKAAN BESAR BOBO 16 INCI",
    },
    price: "RM120.00",
    description: {
      "zh-CN": "16寸波波开业肥皂花礼品盒",
      en: "16 inch bobo grand opening soap flower gift box",
      ms: "Kotak hadiah bunga sabun pembukaan besar bobo 16 inci",
    },
    category: "bobo-balloon-chocolate-flower-gift-box",
    images: ["/products/bobo-balloon-chocolate-flower-gift-box/bobo-box/j.jpeg"],
  },

  // Sticker Category
  {
    id: "sticker-1",
    name: {
      "zh-CN": "定制贴纸系列",
      en: "Custom Sticker Collection",
      ms: "Koleksi Pelekat Tersuai",
    },
    price: "RM3.00-RM5.00",
    description: {
      "zh-CN": "各种节日和庆祝活动的定制贴纸，包括生日、母亲节、毕业等主题设计",
      en: "Custom stickers for various holidays and celebrations, including birthday, Mother's Day, graduation and other themed designs",
      ms: "Pelekat tersuai untuk pelbagai perayaan dan sambutan, termasuk hari lahir, Hari Ibu, graduasi dan reka bentuk bertema lain",
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
  // Bouquet Chocolate Category (16 products)
  {
    id: "bouquet-chocolate-1",
    name: {
      "zh-CN": "迷你气球巧克力花束",
      en: "Mini Balloon Choco Bouquet",
      ms: "Buket Coklat Belon Mini",
    },
    price: "RM39.90",
    description: {
      "zh-CN": "精美的迷你气球巧克力花束，完美的礼物选择",
      en: "Beautiful mini balloon chocolate bouquet, perfect gift choice",
      ms: "Buket coklat belon mini yang cantik, pilihan hadiah yang sempurna",
    },
    category: "bouquet-chocolate",
    images: [
      "/products/bouquet-chocolate/bouquet-chi/A.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/A2.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/A3.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/A4.jpeg",
    ],
  },
  {
    id: "bouquet-chocolate-2",
    name: {
      "zh-CN": "8寸波波巧克力花束",
      en: "8 Inch Bobo Choco Bouquet",
      ms: "Buket Coklat Bobo 8 Inci",
    },
    price: "RM45.00",
    description: {
      "zh-CN": "8寸波波气球配巧克力花束，温馨浪漫",
      en: "8-inch bobo balloon with chocolate bouquet, warm and romantic",
      ms: "Belon bobo 8 inci dengan buket coklat, hangat dan romantik",
    },
    category: "bouquet-chocolate",
    images: [
      "/products/bouquet-chocolate/bouquet-chi/B.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/B2.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/B3.jpeg",
    ],
  },
  {
    id: "bouquet-chocolate-3",
    name: {
      "zh-CN": "可爱泰迪费列罗巧克力花束",
      en: "Cute Teddy Ferrero Choco Bouquet",
      ms: "Buket Coklat Ferrero Teddy Comel",
    },
    price: "RM55.00",
    description: {
      "zh-CN": "可爱泰迪熊配费列罗巧克力花束，甜蜜惊喜",
      en: "Cute teddy bear with Ferrero chocolate bouquet, sweet surprise",
      ms: "Teddy bear comel dengan buket coklat Ferrero, kejutan manis",
    },
    category: "bouquet-chocolate",
    images: [
      "/products/bouquet-chocolate/bouquet-chi/C.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/C2.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/C3.jpeg",
    ],
  },
  {
    id: "bouquet-chocolate-4",
    name: {
      "zh-CN": "香皂玫瑰巧克力花束",
      en: "Soap Rose with Choco Bouquet",
      ms: "Buket Coklat dengan Mawar Sabun",
    },
    price: "RM39.90",
    description: {
      "zh-CN": "香皂玫瑰配巧克力花束，持久美丽",
      en: "Soap roses with chocolate bouquet, lasting beauty",
      ms: "Mawar sabun dengan buket coklat, kecantikan yang kekal",
    },
    category: "bouquet-chocolate",
    images: [
      "/products/bouquet-chocolate/bouquet-chi/D.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/D2.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/D3.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/D4.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/D5.jpeg",
    ],
  },
  {
    id: "bouquet-chocolate-5",
    name: {
      "zh-CN": "10寸铝箔气球巧克力花束",
      en: "10 Inch Foil Balloon with Choco Bouquet",
      ms: "Buket Coklat dengan Belon Foil 10 Inci",
    },
    price: "RM55.00",
    description: {
      "zh-CN": "10寸铝箔气球配巧克力花束，闪亮夺目",
      en: "10-inch foil balloon with chocolate bouquet, shining bright",
      ms: "Belon foil 10 inci dengan buket coklat, bersinar terang",
    },
    category: "bouquet-chocolate",
    images: ["/products/bouquet-chocolate/bouquet-chi/E.jpeg"],
  },
  {
    id: "bouquet-chocolate-6",
    name: {
      "zh-CN": "可爱气球巧克力花束",
      en: "Cute Balloon with Choco Bouquet",
      ms: "Buket Coklat dengan Belon Comel",
    },
    price: "RM50.00",
    description: {
      "zh-CN": "可爱气球配巧克力花束，童趣满满",
      en: "Cute balloon with chocolate bouquet, full of childlike fun",
      ms: "Belon comel dengan buket coklat, penuh keseronokan kanak-kanak",
    },
    category: "bouquet-chocolate",
    images: ["/products/bouquet-chocolate/bouquet-chi/F.jpeg"],
  },
  {
    id: "bouquet-chocolate-7",
    name: {
      "zh-CN": "可爱气球巧克力花束",
      en: "Cute Balloon with Choco Bouquet",
      ms: "Buket Coklat dengan Belon Comel",
    },
    price: "RM45.00",
    description: {
      "zh-CN": "另一款可爱气球配巧克力花束，经济实惠",
      en: "Another cute balloon with chocolate bouquet, affordable choice",
      ms: "Satu lagi belon comel dengan buket coklat, pilihan berpatutan",
    },
    category: "bouquet-chocolate",
    images: ["/products/bouquet-chocolate/bouquet-chi/G.jpeg"],
  },
  {
    id: "bouquet-chocolate-8",
    name: {
      "zh-CN": "香皂玫瑰巧克力花束",
      en: "Soap Rose with Choco Bouquet",
      ms: "Buket Coklat dengan Mawar Sabun",
    },
    price: "RM38.00",
    description: {
      "zh-CN": "精致香皂玫瑰配巧克力花束，优雅选择",
      en: "Elegant soap roses with chocolate bouquet, refined choice",
      ms: "Mawar sabun elegan dengan buket coklat, pilihan yang halus",
    },
    category: "bouquet-chocolate",
    images: [
      "/products/bouquet-chocolate/bouquet-chi/H3.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/H2.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/H.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/H4.jpeg",
    ],
  },
  {
    id: "bouquet-chocolate-9",
    name: {
      "zh-CN": "费列罗香皂玫瑰花束",
      en: "Ferrero & Soap Rose Bouquet",
      ms: "Buket Mawar Sabun & Ferrero",
    },
    price: "RM45.00",
    description: {
      "zh-CN": "4颗费列罗巧克力配5朵香皂玫瑰，完美组合",
      en: "4pcs Ferrero chocolate with 5pcs soap roses, perfect combination",
      ms: "4 biji coklat Ferrero dengan 5 kuntum mawar sabun, gabungan sempurna",
    },
    category: "bouquet-chocolate",
    images: [
      "/products/bouquet-chocolate/bouquet-chi/I.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/I2.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/I3.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/I4.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/H5.jpeg",
      "/products/bouquet-chocolate/bouquet-chi/H6.jpeg",
    ],
  },
  {
    id: "bouquet-chocolate-10",
    name: {
      "zh-CN": "费列罗香皂玫瑰花束",
      en: "Ferrero & Soap Rose Bouquet",
      ms: "Buket Mawar Sabun & Ferrero",
    },
    price: "RM70.00",
    description: {
      "zh-CN": "7颗费列罗巧克力配10朵香皂玫瑰，豪华版本",
      en: "7pcs Ferrero chocolate with 10pcs soap roses, luxury version",
      ms: "7 biji coklat Ferrero dengan 10 kuntum mawar sabun, versi mewah",
    },
    category: "bouquet-chocolate",
    images: ["/products/bouquet-chocolate/bouquet-chi/J.jpeg"],
  },
  {
    id: "bouquet-chocolate-11",
    name: {
      "zh-CN": "香皂玫瑰巧克力花束",
      en: "Soap Rose & Choco Bouquet",
      ms: "Buket Coklat & Mawar Sabun",
    },
    price: "RM45.00",
    description: {
      "zh-CN": "香皂玫瑰与巧克力的经典搭配",
      en: "Classic combination of soap roses and chocolate",
      ms: "Gabungan klasik mawar sabun dan coklat",
    },
    category: "bouquet-chocolate",
    images: ["/products/bouquet-chocolate/bouquet-chi/K.jpeg"],
  },
  {
    id: "bouquet-chocolate-12",
    name: {
      "zh-CN": "10寸铝箔气球巧克力花束",
      en: "10 Inch Foil Balloon Choco Bouquet",
      ms: "Buket Coklat Belon Foil 10 Inci",
    },
    price: "RM58.00",
    description: {
      "zh-CN": "10寸铝箔气球巧克力花束，包含定制贴纸",
      en: "10-inch foil balloon chocolate bouquet, includes customize sticker",
      ms: "Buket coklat belon foil 10 inci, termasuk pelekat khas",
    },
    category: "bouquet-chocolate",
    images: ["/products/bouquet-chocolate/chco-duit-bou/A.jpeg"],
  },
  {
    id: "bouquet-chocolate-13",
    name: {
      "zh-CN": "费列罗满天星花束",
      en: "Ferrero & Baby Breath Bouquet",
      ms: "Buket Baby Breath & Ferrero",
    },
    price: "RM99.00",
    description: {
      "zh-CN": "12颗费列罗巧克力配满天星花束，奢华选择",
      en: "12pcs Ferrero chocolate with baby breath bouquet, luxury choice",
      ms: "12 biji coklat Ferrero dengan buket baby breath, pilihan mewah",
    },
    category: "bouquet-chocolate",
    images: ["/products/bouquet-chocolate/chco-duit-bou/B.jpeg"],
  },
  {
    id: "bouquet-chocolate-14",
    name: {
      "zh-CN": "巧克力香皂玫瑰花束",
      en: "Choco Soap Rose Bouquet",
      ms: "Buket Mawar Sabun Coklat",
    },
    price: "RM45.00",
    description: {
      "zh-CN": "巧克力与香皂玫瑰的完美结合",
      en: "Perfect combination of chocolate and soap roses",
      ms: "Gabungan sempurna coklat dan mawar sabun",
    },
    category: "bouquet-chocolate",
    images: ["/products/bouquet-chocolate/chco-duit-bou/C.jpeg", "/products/bouquet-chocolate/chco-duit-bou/C2.jpeg"],
  },
  {
    id: "bouquet-chocolate-15",
    name: {
      "zh-CN": "迷你气球巧克力花束",
      en: "Mini Balloon Choco Bouquet",
      ms: "Buket Coklat Belon Mini",
    },
    price: "RM78.00",
    description: {
      "zh-CN": "高级版迷你气球巧克力花束",
      en: "Premium mini balloon chocolate bouquet",
      ms: "Buket coklat belon mini premium",
    },
    category: "bouquet-chocolate",
    images: ["/products/bouquet-chocolate/chco-duit-bou/D.jpeg"],
  },
  {
    id: "bouquet-chocolate-16",
    name: {
      "zh-CN": "8寸波波巧克力花束",
      en: "8 Inch Bobo Choco Bouquet",
      ms: "Buket Coklat Bobo 8 Inci",
    },
    price: "RM50.00",
    description: {
      "zh-CN": "另一款8寸波波巧克力花束，经典选择",
      en: "Another 8-inch bobo chocolate bouquet, classic choice",
      ms: "Satu lagi buket coklat bobo 8 inci, pilihan klasik",
    },
    category: "bouquet-chocolate",
    images: ["/products/bouquet-chocolate/chco-duit-bou/E.jpeg"],
  },
]

export interface Category {
  id: string
  name: {
    "zh-CN": string
    en: string
    ms: string
  }
}

export const categories: Category[] = [
  { id: "all", name: { "zh-CN": "所有产品", en: "All Products", ms: "Semua Produk" } },
  { id: "helium-balloon", name: { "zh-CN": "氦气球", en: "Helium Balloon", ms: "Belon Helium" } },
  { id: "bobo-foil-balloon", name: { "zh-CN": "Bobo/铝箔气球", en: "Bobo/Foil Balloon", ms: "Belon Bobo/Foil" } },
  { id: "graduation", name: { "zh-CN": "毕业", en: "Graduation", ms: "Graduasi" } },
  { id: "sticker", name: { "zh-CN": "贴纸", en: "Sticker", ms: "Pelekat" } },
  { id: "flower-bouquet", name: { "zh-CN": "花束", en: "Flower Bouquet", ms: "Buket Bunga" } },
  { id: "mini-bouquet", name: { "zh-CN": "迷你花束", en: "Mini Bouquet", ms: "Buket Mini" } },
  {
    id: "bobo-balloon-chocolate-flower-gift-box",
    name: {
      "zh-CN": "Bobo气球巧克力花礼品盒",
      en: "Bobo Balloon Chocolate Flower Gift Box",
      ms: "Kotak Hadiah Bunga Coklat Belon Bobo",
    },
  },
  {
    id: "bouquet-chocolate",
    name: {
      "zh-CN": "花束巧克力",
      en: "Bouquet Chocolate",
      ms: "Buket Coklat",
    },
  },
]
