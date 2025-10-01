interface Testimonial {
  name: string
  quote: string
  rating?: number
}

const TestimonialsSection = () => {
  // Mock data - no backend needed
  const testimonials: Testimonial[] = [
    {
      name: "Linh & Bảo",
      quote:
        "Tuyệt vời không thể diễn tả được! Hoa cưới của chúng tôi đẹp hơn tất cả những gì chúng tôi từng tưởng tượng. Mỗi chi tiết đều hoàn hảo, từ những bó hoa cầm tay sang trọng đến những bộ hoa trang trí lễ đường lộng lẫy. Khách mời không ngừng khen ngợi về vẻ đẹp tuyệt vời của hoa! Một giao hưởng hoa thực sự.",
    },
    {
      name: "Hương & Nam",
      quote:
        "Tôi choáng ngợp trước sự sáng tạo và sự tỉ mỉ trong từng chi tiết! Thiết kế hoa mang đến quá nhiều sự thanh lịch và quyến rũ cho sự kiện của chúng tôi. Mỗi bố cục hoa đều cảm thấy mang tính cá nhân và được chế tác chu đáo. Tôi không thể nào giới thiệu tiệm hoa này đủ!",
    },
    {
      name: "Mai & Tuấn",
      quote:
        "Quyết định tốt nhất cho đám cưới của tôi là trao toàn quyền sáng tạo cho Hiểu Anh vì cô ấy thực sự tài năng. Những đóa hoa thì thầm từ trái tim đến trái tim, tạo nên những khoảnh khắc nở rộ không bao giờ quên.",
    },
  ]

  return (
    <section className="py-[100px] bg-gradient-to-b from-floral-pearl-bush to-floral-spring-wood">
      <div className="max-w-[1440px] mx-auto px-8 md:px-[60px]">
        <div className="flex flex-col items-center gap-[60px]">
          {/* Title Section - Refined & Elegant */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[900px]">
              <div className="flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-fraunces font-medium text-floral-soya-bean text-center pb-1">
                  Khách Hàng Hạnh Phúc
                </h2>
                <p className="text-xs text-floral-cod-gray/60 text-center italic tracking-wider uppercase">
                  Blooming Moments
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Grid - Elegant card design */}
          <div className="w-full flex justify-center gap-[60px] flex-wrap">
            {testimonials.slice(0, 3).map((testimonial: Testimonial, index: number) => (
              <div key={index} className="w-full md:w-[440px]">
                <div className="flex flex-col gap-5 p-8 rounded-3xl bg-white/60 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-floral-soya-bean/20 hover:border-floral-soya-bean/40 group relative overflow-hidden">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-floral-soya-bean/5 rounded-bl-full" />
                  
                  <div className="flex flex-col gap-4 relative z-10">
                    <p className="text-base leading-relaxed italic text-floral-cod-gray/90">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  {/* Customer info */}
                  <div className="flex items-center justify-between pt-3 border-t-2 border-floral-soya-bean/10">
                    <p className="text-sm uppercase tracking-wider text-floral-soya-bean font-medium">
                      {testimonial.name}
                    </p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className="w-2 h-2 rounded-full bg-floral-soya-bean"
                        />
                      ))}
                    </div>
                  </div>

                  {/* By Hiểu Anh watermark */}
                  <div className="text-xs text-floral-cod-gray/40 italic">
                    by Hiểu Anh
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative tagline */}
          <div className="w-full max-w-[600px] text-center pt-8">
            <p className="text-base md:text-lg font-fraunces text-floral-soya-bean/70 italic leading-relaxed">
              Những khoảnh khắc nở rộ, những lời thì thầm từ trái tim
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 