import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import ServicesSection from "@modules/home/components/services-section"
import PortfolioSection from "@modules/home/components/portfolio-section"
import TestimonialsSection from "@modules/home/components/testimonials-section"
import AboutSection from "@modules/home/components/about-section"
import FAQsSection from "@modules/home/components/faqs-section"
import CTASection from "@modules/home/components/cta-section"

export const metadata: Metadata = {
  title: "Ying Floral - Shop Hoa Cao Cấp | By Hiểu Anh - Nghệ Sĩ Hoa Sáng Tạo",
  description:
    "✨ Ying Floral by Hiểu Anh - Nghệ thuật cắm hoa cao cấp TP.HCM. Dịch vụ hoa cưới sang trọng, hoa sự kiện, hoa sinh nhật. Whispers of Blooms - Lời thì thầm từ trái tim. Symphony in Flowers - Giao hưởng sắc màu và cảm xúc. Blooming Moments - Nở rộ từng khoảnh khắc. Tư vấn miễn phí, thiết kế theo yêu cầu.",
  keywords: [
    "Hiểu Anh nghệ sĩ hoa",
    "shop hoa cao cấp",
    "tiệm hoa sang trọng",
    "hoa cưới đẹp",
    "hoa cưới cao cấp TP.HCM",
    "dịch vụ hoa tươi",
    "nghệ thuật cắm hoa",
    "hoa sinh nhật",
    "hoa kỷ niệm",
    "hoa sự kiện",
    "thiết kế hoa độc quyền",
    "Ying Floral",
    "hoa tươi cao cấp",
    "shop hoa TPHCM",
    "hoa trang trí sự kiện",
    "bó hoa cầm tay cô dâu",
    "wedding flowers",
    "luxury flowers",
  ].join(", "),
  openGraph: {
    title: "Ying Floral by Hiểu Anh - Nghệ Thuật Hoa Cao Cấp",
    description:
      "✨ Bloom your heart, touch your soul. Thiết kế hoa cưới & sự kiện sang trọng by Hiểu Anh. Tư vấn miễn phí.",
    type: "website",
    locale: "vi_VN",
    siteName: "Ying Floral",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ying Floral by Hiểu Anh - Shop Hoa Cao Cấp TPHCM",
    description: "Symphony in Flowers - Giao hưởng hoa tươi cho mọi dịp đặc biệt",
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQsSection />
      <CTASection />
    </>
  )
}
