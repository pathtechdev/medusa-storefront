# Quick Start: Seed Ying Floral Data

Hiện tại backend **CHƯA CÓ** data cho Services, Testimonials, Portfolio, FAQs.  
Frontend đang dùng **fallback data** (hardcoded).

## 🎯 Mục Tiêu

Thêm data vào Medusa backend để frontend hiển thị data thực tế.

## 🚀 Cách 1: Manual qua Medusa Admin (Nhanh nhất)

### Bước 1: Truy cập Medusa Admin

1. Mở: `http://localhost:9000/app` (hoặc `http://localhost:7001/app` nếu admin riêng port)
2. Đăng nhập với credentials của bạn

### Bước 2: Tạo Collections (Services)

**Đi tới**: Products > Collections > Create Collection

#### Collection 1: Wedding Flowers
```
Title: Wedding Flowers
Handle: wedding-flowers

Metadata (Click "+ Add Metadata"):
- service_type: wedding
- featured_image: https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80
- description: Beautiful floral arrangements for your special day
```

#### Collection 2: Special Occasions
```
Title: Special Occasions
Handle: special-occasions

Metadata:
- service_type: special-occasions
- featured_image: https://images.unsplash.com/photo-1522057384400-681b421cfebc?w=800&q=80
- description: Elegant flowers for birthdays, anniversaries, and more
```

#### Collection 3: Corporate Events
```
Title: Corporate Events
Handle: corporate-events

Metadata:
- service_type: corporate
- featured_image: https://images.unsplash.com/photo-1519167758481-83f29da8c0b0?w=800&q=80
- description: Professional floral design for corporate settings
```

### Bước 3: Tạo Tags

**Đi tới**: Products > Product Tags (hoặc Settings > Product Tags)

Tạo 3 tags:
- `testimonial`
- `portfolio`
- `faq`

### Bước 4: Tạo Testimonials

**Đi tới**: Products > Create Product

#### Testimonial 1:
```
Title: Carla & Rakan
Handle: testimonial-carla-rakan
Status: Published
Description: Absolutely breathtaking! The flowers for our wedding were beyond anything we could have imagined.

Tags: testimonial

Metadata:
- customer_name: Carla & Rakan
- review_text: Absolutely breathtaking! The flowers for our wedding were beyond anything we could have imagined. Every detail was perfect!
- rating: 5
```

#### Testimonial 2:
```
Title: Louise & John
Handle: testimonial-louise-john
Status: Published
Description: I was blown away by the creativity and attention to detail!

Tags: testimonial

Metadata:
- customer_name: Louise & John
- review_text: I was blown away by the creativity and attention to detail! Every arrangement felt personal and thoughtfully crafted.
- rating: 5
```

#### Testimonial 3:
```
Title: Kylie & Dustin
Handle: testimonial-kylie-dustin
Status: Published
Description: My best wedding decision!

Tags: testimonial

Metadata:
- customer_name: Kylie & Dustin
- review_text: My best wedding decision was giving her the reigns for full creative control because she has the talent.
- rating: 5
```

### Bước 5: Tạo Portfolio Items

**Đi tới**: Products > Create Product

#### Portfolio 1:
```
Title: Ena & Robert
Handle: portfolio-ena-robert
Status: Published
Description: Wedding flowers portfolio piece
Thumbnail: Upload hoặc URL: https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80

Tags: portfolio

Metadata:
- couple_names: Ena & Robert
- is_rounded: true
```

#### Portfolio 2:
```
Title: Clara & Max
Handle: portfolio-clara-max
Status: Published
Description: Special occasion flowers portfolio piece
Thumbnail: https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=800&q=80

Tags: portfolio

Metadata:
- couple_names: Clara & Max
- is_rounded: false
```

#### Portfolio 3:
```
Title: Anne & Sven
Handle: portfolio-anne-sven
Status: Published
Description: Corporate event flowers portfolio piece
Thumbnail: https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80

Tags: portfolio

Metadata:
- couple_names: Anne & Sven
- is_rounded: true
```

### Bước 6: Tạo FAQs

**Đi tới**: Products > Create Product

#### FAQ 1:
```
Title: What types of flowers do you use?
Handle: faq-flower-types
Status: Published
Description: We use a curated mix of real-touch, silk, and velvet flowers

Tags: faq

Metadata:
- question: What types of flowers do you use?
- answer: We use a curated mix of real-touch, silk, and velvet flowers—the highest quality faux florals available. These premium materials ensure that every design is incredibly lifelike, creating a breathtaking look without the fragility of fresh flowers.
- order: 1
```

#### FAQ 2:
```
Title: Where do you provide services?
Handle: faq-service-area
Status: Published
Description: We provide services across the entire region

Tags: faq

Metadata:
- question: Where do you provide services?
- answer: We provide services across the entire region.
- order: 2
```

#### FAQ 3:
```
Title: Do you work with event planners or stylists?
Handle: faq-event-planners
Status: Published
Description: Yes, we collaborate with event planners and stylists

Tags: faq

Metadata:
- question: Do you work with event planners or stylists?
- answer: Yes, we collaborate with event planners and stylists.
- order: 3
```

#### FAQ 4:
```
Title: How far in advance should I book?
Handle: faq-booking-advance
Status: Published
Description: We recommend booking at least 3-6 months in advance

Tags: faq

Metadata:
- question: How far in advance should I book?
- answer: We recommend booking at least 3-6 months in advance for weddings and major events.
- order: 4
```

### Bước 7: Verify Data

Test API để xem data đã có chưa:

```bash
# Check Collections
curl -H "x-publishable-api-key: YOUR_KEY" "http://localhost:9000/store/collections?fields=*products,+metadata"

# Check Products with tags
curl -H "x-publishable-api-key: YOUR_KEY" "http://localhost:9000/store/products?fields=+metadata,+tags"
```

### Bước 8: Restart Frontend

```bash
# Kill dev server (Ctrl+C)
rm -rf .next  # Clear cache
npm run dev
```

Visit: `http://localhost:3000/gb`

## 🔧 Cách 2: Script Tự Động (Nếu có credentials)

Nếu bạn biết admin email và password:

```bash
# Thêm vào .env.local
MEDUSA_ADMIN_EMAIL=your-email@example.com
MEDUSA_ADMIN_PASSWORD=your-password

# Chạy script
node seed-ying-floral-data.js
```

## 📝 Lấy Admin Credentials

### Option 1: Check file seed của backend
```bash
cd ../medusa-backend  # Hoặc đường dẫn backend của bạn
cat .env | grep ADMIN
```

### Option 2: Reset password qua Medusa CLI
```bash
cd ../medusa-backend
npx medusa user -e admin@medusa-test.com -p newsecretpassword
```

### Option 3: Tạo user mới
```bash
cd ../medusa-backend
npx medusa user -e admin@example.com -p yourpassword --invite
```

## ✅ Kiểm Tra Thành Công

Sau khi seed data, bạn sẽ thấy:

- ✅ **Services Section**: Hiển thị 3 services từ Collections
- ✅ **Testimonials**: Hiển thị 3 customer reviews
- ✅ **Portfolio**: Hiển thị 3 portfolio items với images
- ✅ **FAQs**: Hiển thị 4 questions với answers

## 🐛 Troubleshooting

### Data không hiển thị?

1. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

2. **Hard refresh browser**: `Ctrl+Shift+R` hoặc `Cmd+Shift+R`

3. **Check API Response**:
   ```bash
   curl -H "x-publishable-api-key: pk_66873ecea7f15e17d39b9d8f8d5904cfae85ebd07b3d7b1e08ece1ffbfadac5b" \
     "http://localhost:9000/store/collections?fields=+metadata" | python3 -m json.tool
   ```

4. **Verify tags trong Products**: Đảm bảo products có đúng tags (`testimonial`, `portfolio`, `faq`)

5. **Check Metadata format**: Metadata phải là key-value pairs, không phải nested objects

## 📚 Reference

- Full documentation: `MEDUSA-DATA-SETUP.md`
- Integration guide: `INTEGRATION-SUMMARY.md` 