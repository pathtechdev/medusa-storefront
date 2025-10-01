// Payload CMS integration service
const PAYLOAD_API_URL = process.env.PAYLOAD_API_URL || 'http://localhost:3001/api'

export interface PayloadPage {
  id: string
  title: string
  content: any
  slug: string
  meta?: {
    title?: string
    description?: string
  }
}

export interface PayloadPost {
  id: string
  title: string
  content: any
  slug: string
  publishedDate: string
  featuredImage?: {
    url: string
    alt: string
  }
}

class PayloadService {
  private async fetchFromPayload(endpoint: string) {
    try {
      const response = await fetch(`${PAYLOAD_API_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 } // Cache for 1 minute
      })
      
      if (!response.ok) {
        throw new Error(`Payload API error: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('Payload fetch error:', error)
      return null
    }
  }

  // Get all pages
  async getPages(): Promise<PayloadPage[]> {
    const data = await this.fetchFromPayload('/pages')
    return data?.docs || []
  }

  // Get page by slug
  async getPageBySlug(slug: string): Promise<PayloadPage | null> {
    const data = await this.fetchFromPayload(`/pages?where[slug][equals]=${slug}`)
    return data?.docs?.[0] || null
  }

  // Get all blog posts
  async getPosts(): Promise<PayloadPost[]> {
    const data = await this.fetchFromPayload('/posts?sort=-publishedDate')
    return data?.docs || []
  }

  // Get post by slug
  async getPostBySlug(slug: string): Promise<PayloadPost | null> {
    const data = await this.fetchFromPayload(`/posts?where[slug][equals]=${slug}`)
    return data?.docs?.[0] || null
  }

  // Get homepage content
  async getHomepageContent() {
    return await this.getPageBySlug('homepage')
  }
}

export const payloadService = new PayloadService()
