"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface LogoProps {
  variant?: "light" | "dark"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const Logo = ({ variant = "dark", size = "md", className = "" }: LogoProps) => {
  const [imageError, setImageError] = useState(false)
  
  const sizeClasses = {
    sm: "h-10 w-auto",
    md: "h-14 w-auto",
    lg: "h-20 w-auto",
    xl: "h-28 w-auto",
  }

  const textColor = variant === "light" ? "text-white" : "text-floral-cod-gray"

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center">
        {!imageError ? (
          <Image
            src="/images/logo.png"
            alt="Ying Floral"
            width={
              size === "sm" ? 100 :
              size === "md" ? 140 :
              size === "lg" ? 200 :
              280
            }
            height={
              size === "sm" ? 40 :
              size === "md" ? 56 :
              size === "lg" ? 80 :
              112
            }
            className={`${sizeClasses[size]} object-contain`}
            onError={() => setImageError(true)}
            priority={size === "lg" || size === "xl"}
          />
        ) : (
          <span className={`font-fraunces font-medium ${textColor} ${
            size === "sm" ? "text-xl" :
            size === "md" ? "text-2xl" :
            size === "lg" ? "text-4xl" :
            "text-5xl"
          }`}>
            Ying Floral
          </span>
        )}
      </div>
    </Link>
  )
}

export default Logo 