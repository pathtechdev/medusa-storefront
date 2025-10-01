# Ying Floral Theme Setup Guide

## Overview
This theme has been updated to match the Figma design for Ying Floral - a bespoke floral design shop.

## Color Scheme
- **Pearl Bush**: `#EFEAE2` - Main background color
- **Soya Bean**: `#6A644F` - Primary accent color
- **Cod Gray**: `#111111` - Text color
- **Spring Wood**: `#F8F5F2` - Secondary background
- **White**: `#FFFFFF`

## Typography
- **Headings**: Fraunces (serif)
- **Body Text**: Raleway (sans-serif)
- **Links**: Space Grotesk (sans-serif, bold)

## Required Images

Place the following images in the `/public/images/` directory:

### Hero Section
- `hero-bg.jpg` - Background image for the hero section (1920x1200px)
- `portfolio-preview.jpg` - Preview image for portfolio button (232x163px)
- `services-preview.jpg` - Preview image for services button (219x204px)
- `about-preview.jpg` - Preview image for about button (219x141px)

### Services Section
- `wedding-flowers.jpg` - Wedding flowers service image (448x597px)
- `special-occasions.png` - Special occasions service image (448x597px)
- `corporate-events.jpg` - Corporate events service image (448x597px)

### Portfolio Section
- `portfolio-1.jpg` - Ena & Robert portfolio (395x593px, rounded top)
- `portfolio-2.jpg` - Clara & Max portfolio (553x830px)
- `portfolio-3.jpg` - Anne & Sven portfolio (395x593px, rounded top)

### About Section
- `about-julia.jpg` - Photo of Julia the florist (690x812px)

### CTA Section
- `cta-flower.png` - Floral arrangement for CTA section (349x376px)

## Sections Implemented

1. **Hero Section** - Large "FLORALY" text with navigation buttons
2. **Services Section** - Three service categories with images
3. **Portfolio Section** - Customer portfolio gallery
4. **Testimonials Section** - Customer reviews
5. **About Section** - About Julia the florist
6. **FAQs Section** - Accordion-style frequently asked questions
7. **CTA Section** - Call-to-action for getting quotes

## Component Structure

```
src/modules/home/components/
├── hero/
│   └── index.tsx
├── services-section/
│   └── index.tsx
├── portfolio-section/
│   └── index.tsx
├── testimonials-section/
│   └── index.tsx
├── about-section/
│   └── index.tsx
├── faqs-section/
│   └── index.tsx
└── cta-section/
    └── index.tsx
```

## Next Steps

1. Add the required images to `/public/images/`
2. Customize the text content for your specific needs
3. Update links in navigation buttons to point to actual pages
4. Add footer component matching the Figma design
5. Update the navigation header to match the Figma design

## Notes

- All images should be optimized for web (compressed)
- The design is responsive and follows the Figma specifications
- Colors and fonts are defined in `tailwind.config.js` and `globals.css`
- The FAQs section has accordion functionality (first item open by default) 