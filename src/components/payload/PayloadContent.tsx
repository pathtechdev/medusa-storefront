import { payloadService, PayloadPage } from '@/lib/payload'

interface PayloadContentProps {
  slug: string
  fallback?: React.ReactNode
}

export default async function PayloadContent({ slug, fallback }: PayloadContentProps) {
  try {
    const page = await payloadService.getPageBySlug(slug)
    
    if (!page) {
      return fallback || <div>Content not found</div>
    }

    return (
      <div className="payload-content">
        <h1 className="text-3xl font-bold mb-6">{page.title}</h1>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    )
  } catch (error) {
    console.error('Error loading Payload content:', error)
    return fallback || <div>Error loading content</div>
  }
}
