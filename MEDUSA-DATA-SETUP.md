# Medusa Backend Data Setup for Ying Floral

This guide explains how to setup your Medusa backend to properly supply data to the Ying Floral frontend.

## Architecture Overview

The frontend fetches dynamic content from Medusa using:
- **Collections** with metadata for Services
- **Products** with tags and metadata for Testimonials, Portfolio, FAQs
- **Product Catalog** for actual floral products

## 1. Setting Up Services

Services are stored as **Collections** with custom metadata.

### Steps in Medusa Admin:

1. Go to **Products > Collections**
2. Create a new Collection for each service:

#### Wedding Flowers Collection
- **Title**: `Wedding Flowers`
- **Handle**: `wedding-flowers`
- **Metadata**:
  ```json
  {
    "service_type": "wedding",
    "featured_image": "https://your-cdn.com/images/wedding-flowers.jpg",
    "description": "Beautiful floral arrangements for your special day"
  }
  ```

#### Special Occasions Collection
- **Title**: `Special Occasions`
- **Handle**: `special-occasions`
- **Metadata**:
  ```json
  {
    "service_type": "special-occasions",
    "featured_image": "https://your-cdn.com/images/special-occasions.jpg",
    "description": "Elegant flowers for birthdays, anniversaries, and more"
  }
  ```

#### Corporate Events Collection
- **Title**: `Corporate Events`
- **Handle**: `corporate-events`
- **Metadata**:
  ```json
  {
    "service_type": "corporate",
    "featured_image": "https://your-cdn.com/images/corporate-events.jpg",
    "description": "Professional floral design for corporate settings"
  }
  ```

## 2. Setting Up Testimonials

Testimonials are stored as **Products** with the tag `testimonial`.

### Steps in Medusa Admin:

1. Go to **Products**
2. Create a new Product for each testimonial:

#### Example Testimonial
- **Title**: `Carla & Rakan` (customer name)
- **Description**: (The testimonial quote)
- **Tags**: Add tag with value `testimonial`
- **Metadata**:
  ```json
  {
    "customer_name": "Carla & Rakan",
    "review_text": "Absolutely breathtaking! The flowers for our wedding were beyond anything we could have imagined...",
    "rating": "5"
  }
  ```

**Note**: You don't need to add variants or pricing for testimonial products.

## 3. Setting Up Portfolio Items

Portfolio items are stored as **Products** with the tag `portfolio`.

### Steps in Medusa Admin:

1. Go to **Products**
2. Create a new Product for each portfolio item:

#### Example Portfolio Item
- **Title**: `Ena & Robert` (couple names)
- **Thumbnail**: Upload the portfolio image
- **Tags**: Add tag with value `portfolio`
- **Metadata**:
  ```json
  {
    "couple_names": "Ena & Robert",
    "is_rounded": "true"
  }
  ```

**Options for `is_rounded`**:
- `"true"` - Image will be displayed in a circular/rounded shape
- `"false"` - Image will be displayed in a rectangular shape

## 4. Setting Up FAQs

FAQs are stored as **Products** with the tag `faq`.

### Steps in Medusa Admin:

1. Go to **Products**
2. Create a new Product for each FAQ:

#### Example FAQ
- **Title**: (The question)
- **Description**: (The answer)
- **Tags**: Add tag with value `faq`
- **Metadata**:
  ```json
  {
    "question": "What types of flowers do you use?",
    "answer": "We use a curated mix of real-touch, silk, and velvet flowers...",
    "order": "1"
  }
  ```

**Note**: The `order` field controls the display order (lowest number first).

## 5. Setting Up Featured Products

Featured products are regular Medusa products organized in Collections.

### Steps:

1. Create your floral products with proper:
   - Images
   - Variants (sizes, colors, etc.)
   - Pricing
   - Descriptions
   
2. Add products to appropriate Collections (wedding-flowers, special-occasions, corporate-events)

3. The frontend will automatically display featured products from these collections

## 6. Images and Media

### Image Storage Options:

1. **Medusa's Default Storage**: Upload directly in admin
2. **S3/MinIO**: Configure in Medusa for better performance
3. **CDN**: Use absolute URLs in metadata for external images

### Recommended Image Sizes:

- **Services**: 448x597px (portrait)
- **Portfolio**: 440x586px (portrait or square)
- **Products**: 800x800px (square)
- **Hero Background**: 1920x1200px (landscape)

## 7. Caching

The frontend uses Next.js caching with Medusa's recommended patterns:

```typescript
next: {
  revalidate: 60 // Cache for 1 minute
}
```

To force refresh:
- Clear Next.js cache: `rm -rf .next`
- Update content in Medusa admin
- Content will automatically update within 1 minute

## 8. Fallback Data

If no data is configured in Medusa, the frontend will display default placeholder content. This ensures the site always works even without backend configuration.

## 9. Testing Your Setup

### Check Services:
```bash
curl "http://localhost:9000/store/collections?fields=*products,+metadata"
```

### Check Testimonials:
```bash
curl "http://localhost:9000/store/products?fields=+metadata,+tags"
```

Look for products with `testimonial`, `portfolio`, or `faq` tags.

## 10. API Endpoints Used

The frontend fetches data from these Medusa Store API endpoints:

- **Collections**: `/store/collections`
- **Products**: `/store/products`
- **Regions**: `/store/regions`

All endpoints use Medusa's standard authentication and follow best practices from the official documentation.

## Next Steps

1. **Add Real Products**: Create your floral product catalog
2. **Upload Images**: Use high-quality images for better presentation
3. **Configure Metadata**: Add custom metadata to Collections and Products
4. **Test Frontend**: Check that data displays correctly
5. **Optimize**: Enable CDN and optimize images for production

## Support

For issues or questions:
- Medusa Documentation: https://docs.medusajs.com/
- Frontend customization: Check `src/lib/data/content.ts` 