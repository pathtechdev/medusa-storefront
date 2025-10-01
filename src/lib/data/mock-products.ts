// Mock products data for Ying Floral
export interface MockProduct {
  id: string
  title: string
  handle: string
  thumbnail: string
  images: { url: string }[]
  description: string
  collection: string
  category: string
  price: number
  currency_code: string
}

export const mockProducts: MockProduct[] = [
  // Wedding Flowers Collection
  {
    id: "prod_wedding_1",
    title: "Bó Hoa Hồng Pastel Cưới",
    handle: "bo-hoa-hong-pastel-cuoi",
    thumbnail: "/images/bouquet-pink-roses-1.jpg",
    images: [{ url: "/images/bouquet-pink-roses-1.jpg" }],
    description: "Bó hoa cưới sang trọng với hoa hồng pastel, phù hợp cho lễ cưới lãng mạn",
    collection: "Wedding Flowers",
    category: "Bouquets & Arrangements",
    price: 2500000,
    currency_code: "VND",
  },
  {
    id: "prod_wedding_2",
    title: "Bó Hoa Cầm Tay Cô Dâu",
    handle: "bo-hoa-cam-tay-co-dau",
    thumbnail: "/images/bouquet-pink-roses-2.jpg",
    images: [{ url: "/images/bouquet-pink-roses-2.jpg" }],
    description: "Bó hoa cầm tay tinh tế cho cô dâu với tông màu hồng nhẹ nhàng",
    collection: "Wedding Flowers",
    category: "Bouquets & Arrangements",
    price: 1800000,
    currency_code: "VND",
  },
  {
    id: "prod_wedding_3",
    title: "Bó Hoa Hồng Phấn",
    handle: "bo-hoa-hong-phan",
    thumbnail: "/images/bouquet-pink-roses-3.jpg",
    images: [{ url: "/images/bouquet-pink-roses-3.jpg" }],
    description: "Bó hoa hồng phấn tươi mới, lý tưởng cho ngày trọng đại",
    collection: "Wedding Flowers",
    category: "Bouquets & Arrangements",
    price: 2200000,
    currency_code: "VND",
  },
  {
    id: "prod_wedding_4",
    title: "Bó Hoa Cưới Lãng Mạn",
    handle: "bo-hoa-cuoi-lang-man",
    thumbnail: "/images/bouquet-pink-roses-4.jpg",
    images: [{ url: "/images/bouquet-pink-roses-4.jpg" }],
    description: "Bó hoa cưới lãng mạn với sắc hồng pastel dịu dàng",
    collection: "Wedding Flowers",
    category: "Bouquets & Arrangements",
    price: 1900000,
    currency_code: "VND",
  },
  {
    id: "prod_wedding_5",
    title: "Lọ Hoa Cưới Cao Cấp",
    handle: "lo-hoa-cuoi-cao-cap",
    thumbnail: "/images/collection-wedding-1.jpg",
    images: [{ url: "/images/collection-wedding-1.jpg" }],
    description: "Lọ hoa cưới cao cấp cho trang trí bàn tiệc sang trọng",
    collection: "Wedding Flowers",
    category: "Bouquets & Arrangements",
    price: 3500000,
    currency_code: "VND",
  },
  {
    id: "prod_wedding_6",
    title: "Lọ Hoa Tiệc Cưới Đẹp",
    handle: "lo-hoa-tiec-cuoi-dep",
    thumbnail: "/images/collection-wedding-2.jpg",
    images: [{ url: "/images/collection-wedding-2.jpg" }],
    description: "Lọ hoa tiệc cưới thiết kế độc đáo với nhiều loại hoa tươi",
    collection: "Wedding Flowers",
    category: "Bouquets & Arrangements",
    price: 3200000,
    currency_code: "VND",
  },

  // Fresh Cut Flowers Collection
  {
    id: "prod_fresh_1",
    title: "Lọ Hoa Pastel Thanh Lịch",
    handle: "lo-hoa-pastel-thanh-lich",
    thumbnail: "/images/arrangement-vase-1.jpg",
    images: [{ url: "/images/arrangement-vase-1.jpg" }],
    description: "Lọ hoa pastel thanh lịch với nhiều loại hoa tươi cao cấp",
    collection: "Fresh Cut Flowers",
    category: "Bouquets & Arrangements",
    price: 1500000,
    currency_code: "VND",
  },
  {
    id: "prod_fresh_2",
    title: "Lọ Hoa Hồng Phối Màu",
    handle: "lo-hoa-hong-phoi-mau",
    thumbnail: "/images/arrangement-vase-2.jpg",
    images: [{ url: "/images/arrangement-vase-2.jpg" }],
    description: "Lọ hoa hồng phối màu tinh tế cho không gian sang trọng",
    collection: "Fresh Cut Flowers",
    category: "Fresh Cut Flowers",
    price: 1800000,
    currency_code: "VND",
  },
  {
    id: "prod_fresh_3",
    title: "Lọ Hoa Mix Tone Hồng",
    handle: "lo-hoa-mix-tone-hong",
    thumbnail: "/images/arrangement-vase-3.jpg",
    images: [{ url: "/images/arrangement-vase-3.jpg" }],
    description: "Lọ hoa mix tone hồng dịu dàng, phù hợp mọi không gian",
    collection: "Fresh Cut Flowers",
    category: "Fresh Cut Flowers",
    price: 1600000,
    currency_code: "VND",
  },
  {
    id: "prod_fresh_4",
    title: "Lọ Hoa Nghệ Thuật",
    handle: "lo-hoa-nghe-thuat",
    thumbnail: "/images/arrangement-vase-4.jpg",
    images: [{ url: "/images/arrangement-vase-4.jpg" }],
    description: "Lọ hoa nghệ thuật với thiết kế độc đáo và sáng tạo",
    collection: "Fresh Cut Flowers",
    category: "Bouquets & Arrangements",
    price: 2000000,
    currency_code: "VND",
  },
  {
    id: "prod_fresh_5",
    title: "Lọ Hoa Tone Ấm",
    handle: "lo-hoa-tone-am",
    thumbnail: "/images/arrangement-vase-5.jpg",
    images: [{ url: "/images/arrangement-vase-5.jpg" }],
    description: "Lọ hoa tone ấm mang lại cảm giác ấm áp, gần gũi",
    collection: "Fresh Cut Flowers",
    category: "Fresh Cut Flowers",
    price: 1700000,
    currency_code: "VND",
  },
  {
    id: "prod_fresh_6",
    title: "Lọ Hoa Cao Cấp Mix",
    handle: "lo-hoa-cao-cap-mix",
    thumbnail: "/images/arrangement-vase-6.jpg",
    images: [{ url: "/images/arrangement-vase-6.jpg" }],
    description: "Lọ hoa cao cấp mix nhiều loại hoa nhập khẩu",
    collection: "Fresh Cut Flowers",
    category: "Bouquets & Arrangements",
    price: 2500000,
    currency_code: "VND",
  },
  {
    id: "prod_fresh_7",
    title: "Lọ Hoa Tone Hồng Nude",
    handle: "lo-hoa-tone-hong-nude",
    thumbnail: "/images/arrangement-vase-7.jpg",
    images: [{ url: "/images/arrangement-vase-7.jpg" }],
    description: "Lọ hoa tone hồng nude tinh tế và sang trọng",
    collection: "Fresh Cut Flowers",
    category: "Fresh Cut Flowers",
    price: 1900000,
    currency_code: "VND",
  },
  {
    id: "prod_fresh_8",
    title: "Lọ Hoa Premium Mix",
    handle: "lo-hoa-premium-mix",
    thumbnail: "/images/arrangement-vase-8.jpg",
    images: [{ url: "/images/arrangement-vase-8.jpg" }],
    description: "Lọ hoa premium mix với nhiều loại hoa cao cấp nhất",
    collection: "Fresh Cut Flowers",
    category: "Bouquets & Arrangements",
    price: 2800000,
    currency_code: "VND",
  },
]

export const getMockProducts = (params: {
  collection?: string
  category?: string
  limit?: number
  page?: number
}) => {
  let filtered = [...mockProducts]

  if (params.collection) {
    filtered = filtered.filter((p) => p.collection === params.collection)
  }

  if (params.category) {
    filtered = filtered.filter((p) => p.category === params.category)
  }

  const start = ((params.page || 1) - 1) * (params.limit || 12)
  const end = start + (params.limit || 12)

  return {
    products: filtered.slice(start, end),
    count: filtered.length,
  }
} 