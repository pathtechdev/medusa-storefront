#!/usr/bin/env node

/**
 * Seed script to populate Ying Floral data into Medusa backend
 * Run: node seed-ying-floral-data.js
 */

const MEDUSA_BACKEND_URL = process.env.MEDUSA_BACKEND_URL || 'http://localhost:9000'
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || 'pk_66873ecea7f15e17d39b9d8f8d5904cfae85ebd07b3d7b1e08ece1ffbfadac5b'

// You need admin API key - get from Medusa Admin Settings
const ADMIN_API_KEY = process.env.MEDUSA_ADMIN_API_KEY || ''
const ADMIN_EMAIL = process.env.MEDUSA_ADMIN_EMAIL || 'admin@medusa-test.com'
const ADMIN_PASSWORD = process.env.MEDUSA_ADMIN_PASSWORD || 'supersecret'

let adminToken = ''

// Helper function to make authenticated API calls
async function apiCall(endpoint, method = 'GET', body = null, useAdminAuth = true) {
  const headers = {
    'Content-Type': 'application/json',
  }

  if (useAdminAuth && adminToken) {
    headers['Authorization'] = `Bearer ${adminToken}`
  } else {
    headers['x-publishable-api-key'] = PUBLISHABLE_KEY
  }

  const options = {
    method,
    headers,
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  const response = await fetch(`${MEDUSA_BACKEND_URL}${endpoint}`, options)
  const data = await response.json()
  
  if (!response.ok) {
    console.error(`API Error: ${response.status}`, data)
    throw new Error(`API call failed: ${data.message || response.statusText}`)
  }

  return data
}

// Login as admin
async function loginAdmin() {
  try {
    console.log('🔐 Logging in as admin...')
    const response = await fetch(`${MEDUSA_BACKEND_URL}/admin/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
      }),
    })

    if (!response.ok) {
      throw new Error('Admin login failed. Check credentials in .env.local')
    }

    const data = await response.json()
    adminToken = data.access_token
    console.log('✅ Admin login successful')
  } catch (error) {
    console.error('❌ Admin login failed:', error.message)
    console.log('\nPlease ensure:')
    console.log('1. Medusa backend is running on', MEDUSA_BACKEND_URL)
    console.log('2. Admin credentials are correct')
    console.log('   Set in environment: MEDUSA_ADMIN_EMAIL and MEDUSA_ADMIN_PASSWORD')
    process.exit(1)
  }
}

// Create Collections for Services
async function createCollections() {
  console.log('\n📦 Creating Collections (Services)...')
  
  const collections = [
    {
      title: 'Wedding Flowers',
      handle: 'wedding-flowers',
      metadata: {
        service_type: 'wedding',
        featured_image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
        description: 'Beautiful floral arrangements for your special day'
      }
    },
    {
      title: 'Special Occasions',
      handle: 'special-occasions',
      metadata: {
        service_type: 'special-occasions',
        featured_image: 'https://images.unsplash.com/photo-1522057384400-681b421cfebc?w=800&q=80',
        description: 'Elegant flowers for birthdays, anniversaries, and more'
      }
    },
    {
      title: 'Corporate Events',
      handle: 'corporate-events',
      metadata: {
        service_type: 'corporate',
        featured_image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c0b0?w=800&q=80',
        description: 'Professional floral design for corporate settings'
      }
    }
  ]

  for (const collection of collections) {
    try {
      const result = await apiCall('/admin/collections', 'POST', collection)
      console.log(`✅ Created collection: ${collection.title}`)
    } catch (error) {
      console.log(`⚠️  Collection ${collection.title} might already exist`)
    }
  }
}

// Create Tags
async function createTags() {
  console.log('\n🏷️  Creating Tags...')
  
  const tags = ['testimonial', 'portfolio', 'faq']
  
  for (const tagValue of tags) {
    try {
      await apiCall('/admin/product-tags', 'POST', { value: tagValue })
      console.log(`✅ Created tag: ${tagValue}`)
    } catch (error) {
      console.log(`⚠️  Tag ${tagValue} might already exist`)
    }
  }
}

// Create Testimonial Products
async function createTestimonials() {
  console.log('\n💬 Creating Testimonials...')
  
  const testimonials = [
    {
      title: 'Carla & Rakan',
      description: 'Absolutely breathtaking! The flowers for our wedding were beyond anything we could have imagined.',
      handle: 'testimonial-carla-rakan',
      is_giftcard: false,
      status: 'published',
      metadata: {
        customer_name: 'Carla & Rakan',
        review_text: 'Absolutely breathtaking! The flowers for our wedding were beyond anything we could have imagined. Every detail was perfect, from the lush bouquets to the stunning ceremony arrangements. Our guests couldn\'t stop talking about how beautiful everything looked!',
        rating: '5'
      }
    },
    {
      title: 'Louise & John',
      description: 'I was blown away by the creativity and attention to detail!',
      handle: 'testimonial-louise-john',
      is_giftcard: false,
      status: 'published',
      metadata: {
        customer_name: 'Louise & John',
        review_text: 'I was blown away by the creativity and attention to detail! The floral designs brought so much elegance and charm to our event. Every arrangement felt personal and thoughtfully crafted. I can\'t recommend this florist enough!',
        rating: '5'
      }
    },
    {
      title: 'Kylie & Dustin',
      description: 'My best wedding decision!',
      handle: 'testimonial-kylie-dustin',
      is_giftcard: false,
      status: 'published',
      metadata: {
        customer_name: 'Kylie & Dustin',
        review_text: 'My best wedding decision was giving her the reigns for full creative control because she has the talent.',
        rating: '5'
      }
    }
  ]

  // Get testimonial tag
  const tags = await apiCall('/admin/product-tags')
  const testimonialTag = tags.product_tags?.find(t => t.value === 'testimonial')

  for (const testimonial of testimonials) {
    try {
      const productData = {
        ...testimonial,
        tags: testimonialTag ? [{ id: testimonialTag.id }] : []
      }
      
      await apiCall('/admin/products', 'POST', productData)
      console.log(`✅ Created testimonial: ${testimonial.title}`)
    } catch (error) {
      console.log(`⚠️  Testimonial ${testimonial.title} might already exist`)
    }
  }
}

// Create Portfolio Products
async function createPortfolio() {
  console.log('\n🖼️  Creating Portfolio Items...')
  
  const portfolioItems = [
    {
      title: 'Ena & Robert',
      description: 'Wedding flowers portfolio piece',
      handle: 'portfolio-ena-robert',
      is_giftcard: false,
      status: 'published',
      thumbnail: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
      metadata: {
        couple_names: 'Ena & Robert',
        is_rounded: 'true'
      }
    },
    {
      title: 'Clara & Max',
      description: 'Special occasion flowers portfolio piece',
      handle: 'portfolio-clara-max',
      is_giftcard: false,
      status: 'published',
      thumbnail: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=800&q=80',
      metadata: {
        couple_names: 'Clara & Max',
        is_rounded: 'false'
      }
    },
    {
      title: 'Anne & Sven',
      description: 'Corporate event flowers portfolio piece',
      handle: 'portfolio-anne-sven',
      is_giftcard: false,
      status: 'published',
      thumbnail: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80',
      metadata: {
        couple_names: 'Anne & Sven',
        is_rounded: 'true'
      }
    }
  ]

  // Get portfolio tag
  const tags = await apiCall('/admin/product-tags')
  const portfolioTag = tags.product_tags?.find(t => t.value === 'portfolio')

  for (const item of portfolioItems) {
    try {
      const productData = {
        ...item,
        tags: portfolioTag ? [{ id: portfolioTag.id }] : []
      }
      
      await apiCall('/admin/products', 'POST', productData)
      console.log(`✅ Created portfolio: ${item.title}`)
    } catch (error) {
      console.log(`⚠️  Portfolio ${item.title} might already exist`)
    }
  }
}

// Create FAQ Products
async function createFAQs() {
  console.log('\n❓ Creating FAQs...')
  
  const faqs = [
    {
      title: 'What types of flowers do you use?',
      description: 'We use a curated mix of real-touch, silk, and velvet flowers—the highest quality faux florals available.',
      handle: 'faq-flower-types',
      is_giftcard: false,
      status: 'published',
      metadata: {
        question: 'What types of flowers do you use?',
        answer: 'We use a curated mix of real-touch, silk, and velvet flowers—the highest quality faux florals available. These premium materials ensure that every design is incredibly lifelike, creating a breathtaking look without the fragility of fresh flowers.',
        order: '1'
      }
    },
    {
      title: 'Where do you provide services?',
      description: 'We provide services across the entire region.',
      handle: 'faq-service-area',
      is_giftcard: false,
      status: 'published',
      metadata: {
        question: 'Where do you provide services?',
        answer: 'We provide services across the entire region.',
        order: '2'
      }
    },
    {
      title: 'Do you work with event planners or stylists?',
      description: 'Yes, we collaborate with event planners and stylists.',
      handle: 'faq-event-planners',
      is_giftcard: false,
      status: 'published',
      metadata: {
        question: 'Do you work with event planners or stylists?',
        answer: 'Yes, we collaborate with event planners and stylists.',
        order: '3'
      }
    },
    {
      title: 'How far in advance should I book?',
      description: 'We recommend booking at least 3-6 months in advance.',
      handle: 'faq-booking-advance',
      is_giftcard: false,
      status: 'published',
      metadata: {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking at least 3-6 months in advance for weddings and major events.',
        order: '4'
      }
    }
  ]

  // Get faq tag
  const tags = await apiCall('/admin/product-tags')
  const faqTag = tags.product_tags?.find(t => t.value === 'faq')

  for (const faq of faqs) {
    try {
      const productData = {
        ...faq,
        tags: faqTag ? [{ id: faqTag.id }] : []
      }
      
      await apiCall('/admin/products', 'POST', productData)
      console.log(`✅ Created FAQ: ${faq.title}`)
    } catch (error) {
      console.log(`⚠️  FAQ ${faq.title} might already exist`)
    }
  }
}

// Main function
async function main() {
  console.log('🌸 Ying Floral Data Seeder')
  console.log('==========================\n')
  console.log('Backend URL:', MEDUSA_BACKEND_URL)
  
  try {
    await loginAdmin()
    await createTags()
    await createCollections()
    await createTestimonials()
    await createPortfolio()
    await createFAQs()
    
    console.log('\n✅ All data seeded successfully!')
    console.log('\nNext steps:')
    console.log('1. Restart your frontend: npm run dev')
    console.log('2. Visit http://localhost:3000/gb')
    console.log('3. Your content should now load from Medusa backend!')
  } catch (error) {
    console.error('\n❌ Error:', error.message)
    process.exit(1)
  }
}

main() 