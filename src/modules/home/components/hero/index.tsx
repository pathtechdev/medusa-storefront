"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const Hero = () => {
  const [logoError, setLogoError] = useState(false)
  
  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[900px] bg-gradient-to-b from-floral-pearl-bush to-floral-spring-wood overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hoa tươi trang trí"
          fill
          className="object-cover"
          priority
        />
        {/* Soft Overlay for feminine feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/35" />
      </div>

      {/* Decorative Soft Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-8">
        <div className="max-w-[1200px] w-full">
          {/* Main Heading */}
          <div className="text-center space-y-4 sm:space-y-6">
            {/* Logo - Responsive Size */}
            {!logoError && (
              <div className="flex justify-center mb-4 sm:mb-6 animate-fade-in-top">
                <Image
                  src="/images/logo.png"
                  alt="Ying Floral - Shop Hoa Cao Cấp"
                  width={200}
                  height={100}
                  className="object-contain drop-shadow-2xl w-[160px] h-[80px] sm:w-[200px] sm:h-[100px] md:w-[240px] md:h-[120px]"
                  onError={() => setLogoError(true)}
                  priority
                />
              </div>
            )}
            
            {/* Main Brand Name - Responsive Typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-medium text-white drop-shadow-2xl tracking-wide leading-tight">
              Ying Floral
            </h1>
            
            {/* Subtitle - Refined & Responsive */}
            <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-fraunces text-white/95 drop-shadow-lg leading-relaxed font-light px-4">
                Lời Thì Thầm Từ Những Đóa Hoa
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/80 font-raleway italic drop-shadow-md tracking-wide">
                Bloom your heart, touch your soul
              </p>
            </div>

            {/* Navigation Cards - Mobile First Design */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 pt-8 sm:pt-12 md:pt-16 flex-wrap max-w-4xl mx-auto">
              <Link
                href="/store"
                className="group flex flex-col items-center gap-1 sm:gap-2 hover:scale-105 transition-all duration-300"
              >
                <div className="px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-md hover:bg-white/25 transition-all duration-300 shadow-xl border border-white/20">
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-fraunces text-white drop-shadow-md font-medium whitespace-nowrap">
                    Bộ Sưu Tập
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-white/70 italic drop-shadow-sm">
                  Whispers of Blooms
                </span>
              </Link>

              <Link
                href="/store"
                className="group flex flex-col items-center gap-1 sm:gap-2 hover:scale-105 transition-all duration-300"
              >
                <div className="px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-md hover:bg-white/25 transition-all duration-300 shadow-xl border border-white/20">
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-fraunces text-white drop-shadow-md font-medium whitespace-nowrap">
                    Dịch Vụ
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-white/70 italic drop-shadow-sm">
                  Symphony in Flowers
                </span>
              </Link>

              <Link
                href="/store"
                className="group flex flex-col items-center gap-1 sm:gap-2 hover:scale-105 transition-all duration-300"
              >
                <div className="px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-md hover:bg-white/25 transition-all duration-300 shadow-xl border border-white/20">
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-fraunces text-white drop-shadow-md font-medium whitespace-nowrap">
                    Liên Hệ
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-white/70 italic drop-shadow-sm">
                  Blooming Moments
                </span>
              </Link>
            </div>

            {/* Artist Credit - Responsive & Refined */}
            <div className="pt-6 sm:pt-8 md:pt-12">
              <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-black/10 backdrop-blur-sm border border-white/10">
                <div className="w-1 h-1 rounded-full bg-white/60" />
                <p className="text-xs sm:text-sm text-white/70 italic font-light">
                  by Hiểu Anh
                </p>
                <div className="w-1 h-1 rounded-full bg-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
