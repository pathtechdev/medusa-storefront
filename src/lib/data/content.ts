"use server"

import { sdk } from "@lib/config"
import { getCacheOptions } from "./cookies"
import { HttpTypes } from "@medusajs/types"

/**
 * Fetch homepage services from Medusa Collections
 * Services should be stored as Collections with metadata containing:
 * - service_type: "wedding" | "special-occasions" | "corporate"
 * - featured_image: URL to service image
 * - description: Service description
 */
export const getHomeServices = async () => {
  const next = {
    ...(await getCacheOptions("collections")),
  }

  try {
    const { collections } = await sdk.client.fetch<HttpTypes.StoreCollectionListResponse>(
      `/store/collections`,
      {
        query: {
          fields: "*products,+metadata",
          limit: 100,
        },
        next,
        cache: "force-cache",
      }
    )

    // Filter collections that have service_type metadata
    const serviceCollections = collections
      ?.filter((col: any) => col.metadata?.service_type)
      ?.map((col: any) => ({
        title: col.title,
        image: col.metadata?.featured_image || "/images/placeholder.jpg",
        slug: col.handle,
        type: col.metadata?.service_type,
        description: col.metadata?.description,
      })) || []

    return serviceCollections
  } catch (error) {
    console.error("Error fetching services:", error)
    return []
  }
}

/**
 * Fetch testimonials from Products with specific tag "testimonial"
 * Testimonials should be Products with metadata:
 * - customer_name: Name of the customer
 * - review_text: Testimonial quote
 * - rating: Optional rating
 */
export const getTestimonials = async () => {
  const next = {
    ...(await getCacheOptions("products")),
  }

  try {
    const response = await sdk.client.fetch<any>(
      `/store/products`,
      {
        query: {
          fields: "+metadata,+tags",
          limit: 100,
        },
        next,
        cache: "force-cache",
      }
    )

    // Filter products that have testimonial tag
    const testimonials = response.products
      ?.filter((product: any) =>
        product.tags?.some((tag: any) => tag.value === "testimonial")
      )
      ?.map((product: any) => ({
        name: product.metadata?.customer_name || product.title,
        quote: product.metadata?.review_text || product.description,
        rating: product.metadata?.rating,
      })) || []

    return testimonials
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

/**
 * Fetch portfolio items from Products with tag "portfolio"
 * Portfolio items should be Products with metadata:
 * - couple_names: Names like "Ena & Robert"
 * - is_rounded: boolean for image style
 */
export const getPortfolioItems = async () => {
  const next = {
    ...(await getCacheOptions("products")),
  }

  try {
    const response = await sdk.client.fetch<any>(
      `/store/products`,
      {
        query: {
          fields: "+metadata,+tags,*images",
          limit: 100,
        },
        next,
        cache: "force-cache",
      }
    )

    // Filter products that have portfolio tag
    const portfolioItems = response.products
      ?.filter((product: any) =>
        product.tags?.some((tag: any) => tag.value === "portfolio")
      )
      ?.map((product: any) => ({
        names: product.metadata?.couple_names || product.title,
        image: product.thumbnail || product.images?.[0]?.url || "/images/placeholder.jpg",
        rounded: product.metadata?.is_rounded === "true" || product.metadata?.is_rounded === true,
      })) || []

    return portfolioItems
  } catch (error) {
    console.error("Error fetching portfolio:", error)
    return []
  }
}

/**
 * Fetch FAQs from Products with tag "faq"
 * FAQs should be Products with metadata:
 * - question: The FAQ question
 * - answer: The FAQ answer
 * - order: Display order
 */
export const getFAQs = async () => {
  const next = {
    ...(await getCacheOptions("products")),
  }

  try {
    const response = await sdk.client.fetch<any>(
      `/store/products`,
      {
        query: {
          fields: "+metadata,+tags",
          limit: 100,
        },
        next,
        cache: "force-cache",
      }
    )

    // Filter products that have faq tag
    const faqs = response.products
      ?.filter((product: any) =>
        product.tags?.some((tag: any) => tag.value === "faq")
      )
      ?.map((product: any) => ({
        question: product.metadata?.question || product.title,
        answer: product.metadata?.answer || product.description,
        order: parseInt(product.metadata?.order || "0"),
      }))
      ?.sort((a: any, b: any) => a.order - b.order) || []

    return faqs
  } catch (error) {
    console.error("Error fetching FAQs:", error)
    return []
  }
}

/**
 * Fetch about/hero content from store settings
 * This can be expanded to fetch from a custom admin API or metadata
 */
export const getAboutContent = async () => {
  // For now, return default content
  // In production, this could fetch from store metadata or a custom endpoint
  return {
    title: "About",
    florist: "Julia",
    description:
      "Hi, I'm Julia, the creative mind behind every petal and stem at Ying Floral. My love for flowers began as a little girl, watching my grandmother tend to her garden—each bloom a story, each arrangement a masterpiece. Over the years, that passion has grown into a craft that brings my heart so much joy and purpose.",
    image: "/images/julia-florist.jpg",
  }
}

/**
 * Fetch hero content
 */
export const getHeroContent = async () => {
  return {
    title: "FLORALY",
    subtitle: "Bespoke Floral Designs",
    backgroundImage: "/images/hero-bg.jpg",
  }
} 