import Image from "next/image"
import Link from "next/link"

interface PortfolioItem {
  image: string
  rounded: boolean
}

const PortfolioSection = () => {
  // Mock data - no backend needed
  const portfolioItems: PortfolioItem[] = [
    {
      image: "/images/portfolio-1.jpg",
      rounded: true,
    },
    {
      image: "/images/portfolio-2.jpg",
      rounded: false,
    },
    {
      image: "/images/portfolio-3.jpg",
      rounded: true,
    },
    {
      image: "/images/4d09ee3097dd1d8344cc15.jpg",
      rounded: false,
    },
    {
      image: "/images/d04ec8a6b24b3815615a14.jpg",
      rounded: true,
    },
    {
      image: "/images/e4206bef1202985cc11316.jpg",
      rounded: false,
    },
  ]

  return (
    <section className="py-[100px] bg-gradient-to-b from-floral-spring-wood to-floral-pearl-bush">
      <div className="max-w-[1440px] mx-auto px-8 md:px-[60px]">
        <div className="flex flex-col items-center gap-[60px]">
          {/* Title Section - Refined & Elegant */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[900px]">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                  <h2 className="text-3xl md:text-4xl font-fraunces font-medium text-floral-soya-bean text-center md:text-left pb-1">
                    Bộ Sưu Tập
                  </h2>
                  <p className="text-xs text-floral-cod-gray/60 text-center md:text-left italic tracking-wider uppercase">
                    Whispers of Blooms
                  </p>
                </div>
                <div className="hidden md:block h-[1px] bg-gradient-to-r from-floral-soya-bean/20 to-transparent flex-1 max-w-[200px]" />
                <Link
                  href="/store"
                  className="btn-secondary text-sm"
                >
                  Xem Thư Viện
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio Grid - Only images, no names */}
          <div className="w-full flex justify-center items-start gap-[48px] flex-wrap">
            {portfolioItems.map((item: PortfolioItem, index: number) => (
              <div key={index} className="w-full md:w-[440px] group">
                <div className="flex flex-col items-center gap-4">
                  <div
                    className={`w-full aspect-[3/4] relative overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 ring-2 ring-floral-soya-bean/10 group-hover:ring-floral-soya-bean/30 ${
                      item.rounded ? "rounded-[3rem]" : "rounded-3xl"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt="Bộ sưu tập hoa nghệ thuật"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Soft gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-floral-soya-bean/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="w-full pt-2">
                    <p className="text-xs text-floral-cod-gray/50 text-center italic">
                      by Hiểu Anh
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection 