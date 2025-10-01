# 🌸 Ying Floral - Routes Guide

## 📋 **Main Routes Structure**

Tất cả routes đều có prefix `[countryCode]` (ví dụ: `/vn`, `/us`, `/dk`)

### **Homepage Routes**
```
/ (hoặc /[countryCode])
├── Hero Section
│   ├── /store (Bộ Sưu Tập)
│   ├── /store (Dịch Vụ)
│   └── /store (Liên Hệ)
│
├── Services Section
│   └── /store (All services link to store)
│
├── Portfolio Section
│   └── /store (Gallery button)
│
├── About Section
│   └── /store (CTA button)
│
├── FAQs Section
│   └── /store (Contact button)
│
└── CTA Section
    ├── /store (Liên Hệ Ngay)
    └── /store (Xem Bộ Sưu Tập)
```

### **Navigation Routes**
```
Header Navigation:
├── / (Logo - về homepage)
├── /search (Tìm Kiếm) - if NEXT_PUBLIC_FEATURE_SEARCH_ENABLED
├── /store (Cửa Hàng)
├── /account (Tài Khoản)
└── /cart (Giỏ Hàng)
```

### **Store & Products**
```
/store                              → Store listing page
/categories/[...category]           → Category pages
  ├── /categories/fresh-cut-flowers
  ├── /categories/wedding-flowers
  ├── /categories/bouquets-arrangements
  └── ...
  
/collections/[handle]               → Collection pages
  ├── /collections/wedding-flowers
  ├── /collections/special-occasions
  └── /collections/corporate-events
  
/products/[handle]                  → Individual product pages
  └── /products/premium-rose-bouquet
```

### **Account Routes**
```
/account                            → Account dashboard
/account/profile                    → Profile settings
/account/addresses                  → Address management
/account/orders                     → Order history
/account/orders/details/[id]        → Order details
```

### **Checkout & Cart**
```
/cart                               → Shopping cart
/checkout                           → Checkout flow
/order/[id]/confirmed               → Order confirmation
/order/[id]/transfer/[token]        → Order transfer
  ├── /order/[id]/transfer/[token]/accept
  └── /order/[id]/transfer/[token]/decline
```

### **Footer Routes**
```
Footer Links:
├── Categories (Dynamic from backend)
├── Collections (Dynamic from backend)
├── /store (Cửa Hàng)
├── /account (Tài Khoản)
├── /cart (Giỏ Hàng)
└── Social Media (External links - Facebook, Instagram, WhatsApp)
```

---

## 🎯 **Route Mappings for Ying Floral**

### **Vietnamese Text → Route**
```
"Bộ Sưu Tập"      → /store
"Dịch Vụ"         → /store
"Liên Hệ"         → /store
"Cửa Hàng"        → /store
"Tài Khoản"       → /account
"Giỏ Hàng"        → /cart
"Tìm Kiếm"        → /search
"Xem Thư Viện"    → /store
"Khám Phá..."     → /store
"Tìm Hiểu Thêm"   → /store
```

---

## 🔧 **Technical Details**

### **LocalizedClientLink Component**
- Tự động thêm `countryCode` prefix
- Sử dụng: `<LocalizedClientLink href="/store">`
- Kết quả: `/vn/store` (hoặc country code hiện tại)

### **Region Detection**
- Default region: `dk` (Denmark)
- Có thể config trong Medusa backend
- Region affects: currency, language, available products

### **Dynamic Routes**
All routes với `[handle]` hoặc `[...category]` là dynamic:
- Generated at build time (Static Site Generation)
- Data fetched from Medusa backend
- Use `generateStaticParams` for pre-rendering

---

## ✅ **Current Status**

### **✓ Implemented Routes**
- ✅ Homepage (`/`)
- ✅ Store listing (`/store`)
- ✅ Product details (`/products/[handle]`)
- ✅ Collections (`/collections/[handle]`)
- ✅ Categories (`/categories/[...category]`)
- ✅ Cart (`/cart`)
- ✅ Checkout (`/checkout`)
- ✅ Account pages (`/account/*`)
- ✅ Order confirmation (`/order/[id]/confirmed`)

### **📝 Future Routes (Optional)**
- 🔄 `/services` - Dedicated services page
- 🔄 `/portfolio` - Full portfolio gallery
- 🔄 `/about` - About Hiểu Anh page
- 🔄 `/contact` - Contact form page
- 🔄 `/blog` - Blog/news section

---

## 🚀 **Quick Reference**

### **Common Patterns**
```typescript
// Link to store
<LocalizedClientLink href="/store">Cửa Hàng</LocalizedClientLink>

// Link to specific collection
<LocalizedClientLink href={`/collections/${slug}`}>
  {collectionName}
</LocalizedClientLink>

// Link to product
<LocalizedClientLink href={`/products/${handle}`}>
  {productName}
</LocalizedClientLink>

// Link to account
<LocalizedClientLink href="/account">Tài Khoản</LocalizedClientLink>
```

### **Navigation Best Practices**
1. Always use `LocalizedClientLink` for internal navigation
2. Use regular `<a>` tag for external links (social media)
3. Add `data-testid` for E2E testing
4. Include hover states for better UX
5. Use semantic HTML (`<nav>`, `<footer>`)

---

**Last Updated**: October 2025  
**By**: Hiểu Anh - Nghệ Sĩ Hoa Sáng Tạo 🌸 