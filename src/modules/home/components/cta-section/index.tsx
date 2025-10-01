import Image from "next/image"
import Link from "next/link"

const CTASection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-floral-pearl-bush to-floral-spring-wood flex justify-center py-16">
      <div className="max-w-[1440px] w-full">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-8 lg:gap-0">
          {/* Image Section - Consistent aspect ratio */}
          <div className="w-full lg:w-[380px] flex justify-center items-center px-8 lg:px-0">
            <div className="w-full aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl ring-2 ring-floral-soya-bean/20">
              <Image
                src="/images/cta-flower.jpg"
                alt="Hoa trang trí cao cấp"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-floral-soya-bean/20 to-transparent" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-center items-center px-8 lg:px-[80px] py-8 lg:py-[60px]">
            <div className="max-w-[600px] flex flex-col gap-8 text-center">
              {/* Decorative element */}
              <div className="flex justify-center">
                <div className="w-16 h-[2px] bg-floral-soya-bean/30 rounded-full" />
              </div>

              <h2 className="text-2xl md:text-3xl font-fraunces font-medium text-floral-soya-bean leading-relaxed">
                Đang lên kế hoạch cho sự kiện<br/>
                và cần hoa trang trí tuyệt đẹp?
              </h2>
              
              <p className="text-base leading-relaxed text-floral-cod-gray/90">
                Nhận báo giá thiết kế hoa độc quyền ngay hôm nay<br/>
                <span className="text-floral-soya-bean italic font-medium text-sm">
                  Tư vấn miễn phí - Thiết kế theo yêu cầu
                </span>
              </p>

              <div className="flex justify-center pt-4 gap-4 flex-wrap">
                <Link
                  href="/store"
                  className="btn-primary text-sm"
                >
                  Liên Hệ Ngay
                </Link>

                <Link
                  href="/store"
                  className="btn-secondary text-sm"
                >
                  Xem Bộ Sưu Tập
                </Link>
              </div>

              {/* Clean trust indicators */}
              <div className="flex justify-center gap-8 pt-6 text-xs">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-floral-soya-bean" />
                    ))}
                  </div>
                  <span className="text-floral-cod-gray/60">Đánh giá 5 sao</span>
                </div>
                <div className="h-10 w-px bg-floral-soya-bean/20" />
                <div className="flex flex-col items-center gap-1">
                  <div className="w-6 h-6 rounded-full border-2 border-floral-soya-bean flex items-center justify-center">
                    <div className="w-2 h-3 border-b-2 border-r-2 border-floral-soya-bean transform rotate-45 -mt-0.5" />
                  </div>
                  <span className="text-floral-cod-gray/60">Cam kết chất lượng</span>
                </div>
              </div>

              {/* By Hiểu Anh */}
              <div className="pt-2">
                <p className="text-xs text-floral-cod-gray/50 italic">by Hiểu Anh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection 