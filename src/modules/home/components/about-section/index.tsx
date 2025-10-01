import Image from "next/image"
import Link from "next/link"

const AboutSection = () => {
  return (
    <section className="py-[100px] bg-gradient-to-b from-floral-pearl-bush to-floral-spring-wood">
      <div className="max-w-[1440px] mx-auto px-8 md:px-[60px]">
        <div className="flex flex-col items-center gap-[60px]">
          {/* Title Section - Refined & Elegant */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[900px]">
              <div className="flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-fraunces font-medium text-floral-soya-bean text-center pb-1">
                  Về Chúng Tôi
                </h2>
                <p className="text-xs text-floral-cod-gray/60 text-center italic tracking-wider uppercase">
                  Gặp Gỡ Nghệ Sĩ Hoa Của Bạn
                </p>
              </div>
            </div>
          </div>

          {/* Content Grid - Responsive and balanced */}
          <div className="w-full flex gap-[80px] items-center justify-center flex-wrap lg:flex-nowrap">
            {/* Text Content */}
            <div className="w-full lg:w-[640px]">
              <div className="flex flex-col gap-6">
                <h3 className="text-xl md:text-2xl font-fraunces font-medium text-floral-soya-bean">
                  NGHỆ SĨ HOA CỦA BẠN: HIỂU ANH
                </h3>
                
                <div className="flex flex-col gap-5 text-base leading-relaxed text-floral-cod-gray/90">
                  <p className="italic text-floral-soya-bean font-medium">
                    "Thế giới của tôi là một khu vườn sáng tạo bất tận"
                  </p>
                  
                  <p>
                    Mỗi ngày, tôi được đắm chìm trong việc thiết kế những tác phẩm hoa tươi tuyệt đẹp dành cho những con người tuyệt vời như bạn. Tôi cảm thấy vô cùng may mắn khi được vây quanh bởi những đóa hoa, mang vẻ đẹp đến những khoảnh khắc đặc biệt nhất trong cuộc sống.
                  </p>
                  
                  <p>
                    Làm việc với những cặp đôi yêu hoa là niềm đam mê của tôi. Tôi không thể chờ đợi để biến tầm nhìn hoa tươi của bạn thành hiện thực - một <span className="font-medium text-floral-soya-bean">giao hưởng sắc màu và cảm xúc</span>.
                  </p>
                  
                  <p className="text-floral-soya-bean font-medium">
                    Hãy cùng nhau tạo nên điều gì đó thật tuyệt vời!
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="h-[1px] w-12 bg-floral-soya-bean/30 rounded-full" />
                  <p className="text-xs uppercase tracking-wider text-floral-cod-gray/70">
                    Hiểu Anh - Nghệ Sĩ Hoa Sáng Tạo
                  </p>
                </div>

                {/* CTA Button - no icon */}
                <div className="pt-4">
                  <Link
                    href="/store"
                    className="btn-primary text-sm"
                  >
                    Khám Phá Bộ Sưu Tập
                  </Link>
                </div>
              </div>
            </div>

            {/* Image - Consistent aspect ratio and soft corners */}
            <div className="w-full lg:w-[380px] aspect-[3/4] relative rounded-[2rem] overflow-hidden shadow-2xl ring-2 ring-floral-soya-bean/20 group">
              <Image
                src="/images/julia-florist.jpg"
                alt="Hiểu Anh - Nghệ sĩ hoa sáng tạo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-floral-soya-bean/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Decorative Quote */}
          <div className="w-full max-w-[800px] text-center pt-8">
            <p className="text-lg md:text-xl font-fraunces text-floral-soya-bean/80 italic leading-relaxed">
              "Blooming Moments - Nở rộ từng khoảnh khắc, lưu giữ yêu thương mãi mãi"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 