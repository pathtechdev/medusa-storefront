# 🚀 Quick Reference - Ying Floral

## ⚡ Development

### Start Dev Server
```bash
npm run dev
# or
yarn dev
```

### Build Production
```bash
npm run build
npm start
```

---

## 🎨 Design Tokens

### Colors
```javascript
// Tailwind classes
bg-floral-pearl-bush      // #EFEAE2 - Soft cream background
bg-floral-spring-wood     // #F8F5F2 - Light warm white
text-floral-soya-bean     // #6A644F - Elegant olive (brand color)
text-floral-cod-gray      // #111111 - Rich black text
```

### Typography
```javascript
font-fraunces            // Elegant serif for headings
font-raleway             // Sans-serif for body
font-space-grotesk       // Display font

// Heading classes
heading-hero             // Hero title
heading-2                // Section titles
heading-3                // Subsection titles
body-text-upper          // Uppercase labels
link-text                // Body text with link styling
```

### Rounded Corners (Soft & Feminine)
```javascript
rounded-2xl              // 16px - Buttons, cards
rounded-3xl              // 24px - Large cards, images
rounded-[3rem]           // 48px - Extra soft
rounded-full             // Circle - Badges, social icons
```

### Shadows & Effects
```javascript
shadow-xl                // Standard elevation
shadow-2xl               // Emphasized cards
ring-2 ring-floral-soya-bean/10   // Subtle border ring

// Hover states
hover:scale-105          // Buttons
hover:scale-110          // Images
hover:shadow-2xl         // Cards
```

---

## 📂 File Structure

```
src/
├── modules/
│   ├── home/components/
│   │   ├── hero/                    ✨ Whispers of Blooms
│   │   ├── services-section/        🎵 Symphony in Flowers
│   │   ├── portfolio-section/       💐 Whispers of Blooms
│   │   ├── testimonials-section/    🌸 Blooming Moments
│   │   ├── about-section/           👩‍🎨 Nghệ sĩ Ying
│   │   ├── faqs-section/            ❓ FAQs tiếng Việt
│   │   └── cta-section/             📞 Call to Action
│   │
│   └── layout/
│       ├── components/
│       │   └── logo/                🌟 Logo component
│       └── templates/
│           ├── nav/                 🧭 Navigation tiếng Việt
│           └── footer/              🔗 Footer hoàn chỉnh
│
└── lib/data/
    └── content.ts                   📊 Data fetching từ Medusa
```

---

## 🌸 3 Brand Concepts

### 1. Whispers of Blooms (Lời Thì Thầm)
**Use in**: Hero, Portfolio
**Tone**: Poetic, Emotional, Intimate
**Keywords**: lời thì thầm, trái tim, cảm xúc

### 2. Symphony in Flowers (Giao Hưởng)
**Use in**: Services, Brand positioning
**Tone**: Artistic, Sophisticated, Luxurious
**Keywords**: giao hưởng, nghệ thuật, sang trọng

### 3. Blooming Moments (Nở Rộ)
**Use in**: Testimonials, Marketing
**Tone**: Warm, Joyful, Memorable
**Keywords**: nở rộ, khoảnh khắc, yêu thương

---

## 🔍 SEO Keywords (Vietnamese)

### Primary Keywords
- shop hoa cao cấp
- hoa cưới cao cấp TP.HCM
- tiệm hoa sang trọng
- nghệ thuật cắm hoa

### Secondary Keywords
- dịch vụ hoa tươi
- hoa sinh nhật
- hoa kỷ niệm
- hoa sự kiện
- thiết kế hoa độc quyền
- bó hoa cầm tay cô dâu

### Long-tail Keywords
- shop hoa cưới cao cấp TPHCM
- dịch vụ trang trí hoa sự kiện
- thiết kế hoa cưới độc đáo
- nghệ sĩ cắm hoa chuyên nghiệp

---

## 🖼️ Images Required

### Logo
- `public/images/logo.png` - Transparent PNG, 400x200px recommended

### Hero Section
- `public/images/hero-bg.jpg` - 1920x1200px, floral background
- `public/images/portfolio-preview.jpg` - 232x163px, portfolio showcase
- `public/images/services-preview.jpg` - 232x163px, services showcase

### Services (Aspect ratio 3:4)
- `public/images/wedding-flowers.jpg`
- `public/images/special-occasions.jpg`
- `public/images/corporate-events.jpg`

### Portfolio (Aspect ratio 3:4)
- `public/images/portfolio-1.jpg`
- `public/images/portfolio-2.jpg`
- `public/images/portfolio-3.jpg`

### About & CTA
- `public/images/julia-florist.jpg` - 380x507px (3:4 ratio)
- `public/images/cta-flower.jpg` - Square aspect ratio

---

## 🎯 Common Tasks

### Add New Service
```typescript
// In src/lib/data/content.ts
// Create collection in Medusa Admin with metadata:
{
  "service_type": "true",
  "image_url": "/images/your-service.jpg",
  "description": "Your description"
}
```

### Add New Portfolio Item
```typescript
// Create product in Medusa Admin with:
- Tag: "portfolio"
- Metadata: { "couple_names": "Name 1 & Name 2" }
- Featured image
```

### Add New Testimonial
```typescript
// Create product in Medusa Admin with:
- Tag: "testimonial"
- Title: Customer names
- Description: Review text
```

### Update Logo
```bash
# Replace file at:
public/images/logo.png

# Logo specs:
- Format: PNG with transparent background
- Size: ~400x200px (2:1 ratio)
- Max file size: 100KB for optimal loading
```

---

## 🌐 Medusa Integration

### Environment Variables
```bash
NEXT_PUBLIC_MEDUSA_BACKEND_URL=your-medusa-url
NEXT_PUBLIC_BASE_URL=your-frontend-url
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your-publishable-key
```

### Data Fetching Pattern
```typescript
// Server Component (async)
import { getHomeServices } from "@lib/data/content"

const ServicesSection = async () => {
  const services = await getHomeServices()
  // Use services data...
}
```

---

## 📱 Responsive Breakpoints

```javascript
// Tailwind breakpoints
sm:   640px   // Small devices
md:   768px   // Medium devices
lg:   1024px  // Large devices
xl:   1280px  // Extra large
2xl:  1536px  // 2X extra large

// Common patterns
className="flex-col lg:flex-row"      // Stack mobile, row desktop
className="w-full lg:w-1/2"           // Full width mobile, half desktop
className="px-4 lg:px-[60px]"         // Smaller padding mobile
```

---

## 🎨 Animation Classes

```javascript
// Transitions
duration-300          // Fast (buttons)
duration-500          // Medium (cards)
duration-700          // Slow (images)

// Hover Effects
hover:scale-105       // Subtle grow
hover:scale-110       // Moderate grow
hover:shadow-2xl      // Elevation increase
hover:opacity-80      // Fade slightly

// Fades
animate-fade-in-top   // Fade in from top
opacity-0 group-hover:opacity-100   // Show on hover
```

---

## ✅ Pre-Launch Checklist

### Content
- [ ] Replace all placeholder images
- [ ] Update contact info in footer
- [ ] Add real social media links
- [ ] Create Medusa collections
- [ ] Add products/portfolio items
- [ ] Set up FAQs in Medusa

### SEO
- [ ] Verify meta tags
- [ ] Submit sitemap to Google
- [ ] Set up Google Analytics
- [ ] Configure Google Search Console
- [ ] Test mobile responsiveness
- [ ] Check page load speed

### Technical
- [ ] Test all forms
- [ ] Verify cart functionality
- [ ] Check payment integration
- [ ] Test on multiple browsers
- [ ] Optimize images
- [ ] Enable caching

---

## 🆘 Troubleshooting

### Images Not Loading
```bash
# Check file exists:
ls public/images/logo.png

# Correct path in code:
src="/images/logo.png"  ✅
src="images/logo.png"   ❌
```

### Build Errors
```bash
# Clear cache and rebuild:
rm -rf .next
npm run build
```

### Medusa Connection Issues
```bash
# Check environment variables
# Verify NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY is set
# Test backend URL is accessible
```

---

## 📞 Support

**Documentation**: `YING-FLORAL-VIETNAMESE-SEO.md`
**Images Guide**: `LOGO-SETUP.md`
**Medusa Setup**: `QUICK-START-SEED-DATA.md`

---

**Version**: 1.0
**Last Updated**: 2024
**Status**: ✅ Production Ready 