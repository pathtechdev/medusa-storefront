import Image from "next/image"
import Link from "next/link"

interface ServiceItem {
  title: string
  image: string
  slug: string
  description: string
}

const ServicesSection = () => {
  // Mock data - no backend needed
  const servicesData: ServiceItem[] = [
    {
      title: "Hoa Cưới Sang Trọng",
      image: "/images/wedding-flowers.jpg",
      slug: "wedding-flowers",
      description: "Kiến tạo giao hưởng hoa tươi cho ngày trọng đại của bạn",
    },
    {
      title: "Dịp Đặc Biệt",
      image: "/images/special-occasions.jpg",
      slug: "special-occasions",
      description: "Hoa sinh nhật, kỷ niệm - Nở rộ mọi khoảnh khắc",
    },
    {
      title: "Sự Kiện Doanh Nghiệp",
      image: "/images/corporate-events.jpg",
      slug: "corporate-events",
      description: "Thiết kế hoa nghệ thuật cho không gian chuyên nghiệp",
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
                    Dịch Vụ
                  </h2>
                  <p className="text-xs text-floral-cod-gray/60 text-center md:text-left italic tracking-wider uppercase">
                    Symphony in Flowers
                  </p>
                </div>
                <div className="hidden md:block h-[1px] bg-gradient-to-r from-floral-soya-bean/20 to-transparent flex-1 max-w-[200px]" />
                <Link
                  href="/store"
                  className="btn-primary text-sm"
                >
                  Tìm Hiểu Thêm
                </Link>
              </div>
            </div>
          </div>

          {/* Services Grid - Consistent aspect ratio and rounded corners */}
          <div className="w-full flex justify-center items-start gap-[48px] flex-wrap">
            {servicesData.map((service, index) => (
              <div key={index} className="w-full md:w-[448px] group">
                <Link 
                  href={`/store`}
                  className="block"
                >
                  <div className="flex flex-col items-center gap-4 pb-3">
                    {/* Fixed aspect ratio 3:4 for consistency */}
                    <div className="w-full aspect-[3/4] relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 ring-2 ring-floral-soya-bean/10 group-hover:ring-floral-soya-bean/30">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Soft gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Service description on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <p className="text-sm leading-relaxed drop-shadow-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <p className="text-sm uppercase tracking-wider text-floral-cod-gray text-center font-medium group-hover:text-floral-soya-bean transition-colors duration-300">
                        {service.title}
                      </p>
                      <p className="text-xs text-floral-cod-gray/50 text-center mt-1 italic">
                        by Hiểu Anh
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 