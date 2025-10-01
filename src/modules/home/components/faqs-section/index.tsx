"use client"

import { useState } from "react"
import Link from "next/link"

interface FAQ {
  question: string
  answer: string
  order?: number
}

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0)

  // Mock data - no backend needed
  const faqs: FAQ[] = [
    {
      question: "Bạn sử dụng loại hoa gì?",
      answer:
        "Chúng tôi sử dụng hoa tươi cao cấp được tuyển chọn cẩn thận từ các vườn hoa uy tín. Mỗi loại hoa đều được chọn lọc kỹ lưỡng để đảm bảo độ tươi mới, màu sắc rực rỡ và hương thơm tự nhiên. Chúng tôi cũng cung cấp các thiết kế với hoa lụa cao cấp cho những dịp đặc biệt cần độ bền lâu dài.",
    },
    {
      question: "Khu vực phục vụ của bạn ở đâu?",
      answer: "Chúng tôi phục vụ trên toàn khu vực TP.HCM và các tỉnh lân cận. Với những sự kiện đặc biệt như đám cưới, chúng tôi sẵn sàng di chuyển đến mọi nơi bạn cần.",
    },
    {
      question: "Bạn có làm việc với các wedding planner không?",
      answer: "Có, chúng tôi rất vui được hợp tác với các wedding planner và event stylist chuyên nghiệp. Chúng tôi hiểu tầm quan trọng của sự đồng bộ và phối hợp nhịp nhàng để tạo nên những sự kiện hoàn hảo.",
    },
    {
      question: "Nên đặt hoa trước bao lâu?",
      answer:
        "Chúng tôi khuyến nghị đặt trước 3-6 tháng cho đám cưới và các sự kiện lớn để đảm bảo có đủ thời gian tư vấn, thiết kế và chuẩn bị. Đối với những dịp nhỏ hơn, 1-2 tuần là hợp lý. Tuy nhiên, chúng tôi luôn cố gắng hết sức để đáp ứng mọi nhu cầu khẩn cấp của bạn.",
    },
  ]

  return (
    <section className="py-[100px] bg-gradient-to-b from-floral-spring-wood to-floral-pearl-bush">
      <div className="max-w-[1440px] mx-auto px-8 md:px-[60px]">
        <div className="flex flex-col items-center gap-[60px]">
          {/* Title Section - Refined & Elegant */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[900px]">
              <div className="flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-fraunces font-medium text-floral-soya-bean text-center pb-1">
                  Câu Hỏi Thường Gặp
                </h2>
                <p className="text-xs text-floral-cod-gray/60 text-center italic tracking-wider uppercase">
                  FAQs
                </p>
              </div>
            </div>
          </div>

          {/* FAQs List - Clean accordion design */}
          <div className="w-full max-w-[880px] flex flex-col gap-5">
            {faqs.map((faq: FAQ, index: number) => (
              <div
                key={index}
                className="rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-floral-soya-bean/20 hover:border-floral-soya-bean/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex justify-between items-center gap-4 text-left p-6 group"
                >
                  <span className="text-sm uppercase tracking-wider text-floral-cod-gray group-hover:text-floral-soya-bean transition-colors duration-300 font-medium">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-floral-soya-bean/30 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? "rotate-180 bg-floral-soya-bean/10" : "group-hover:border-floral-soya-bean/50"
                  }`}>
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-3 h-0.5 bg-floral-soya-bean rounded-full" />
                      <div className={`w-0.5 h-3 bg-floral-soya-bean rounded-full -mt-1.5 transition-all duration-300 ${
                        openIndex === index ? "opacity-0 scale-0" : "opacity-100 scale-100"
                      }`} />
                    </div>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0 animate-fade-in-top">
                    <div className="h-[1px] w-12 bg-floral-soya-bean/30 rounded-full mb-4" />
                    <p className="text-base leading-relaxed text-floral-cod-gray/90">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Link with elegant design */}
          <div className="w-full flex justify-center pt-8">
            <Link
              href="/store"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/60 backdrop-blur-sm border-2 border-floral-soya-bean hover:bg-floral-soya-bean hover:border-floral-soya-bean group transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="text-sm text-floral-cod-gray group-hover:text-white transition-colors duration-300 font-medium">
                Có Thêm Câu Hỏi?
              </span>
              <span className="text-sm text-floral-soya-bean group-hover:text-white transition-colors duration-300 font-medium">
                Liên Hệ Ngay
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQsSection 