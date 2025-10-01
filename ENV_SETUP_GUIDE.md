# Environment Setup Guide - Ying Floral

## 🌸 Mock Data Mode (Khuyên dùng cho Production)

### Tại sao dùng Mock Data?
- ✅ **Không cần Medusa backend** - Deploy dễ dàng hơn
- ✅ **Nhanh hơn** - Không cần API calls
- ✅ **Ổn định hơn** - Không phụ thuộc external services
- ✅ **Miễn phí hosting** - Chỉ cần host frontend

### Cách bật Mock Data Mode:

```bash
# Trong file .env.production hoặc .env.local
NEXT_PUBLIC_USE_MOCK_DATA=true
```

## 🔧 Backend Mode

### Khi nào dùng Backend?
- Cần quản lý products động
- Cần cart/checkout thật
- Cần inventory management
- Cần customer management

### Cách bật Backend Mode:

```bash
# Trong file .env.local
NEXT_PUBLIC_USE_MOCK_DATA=false
MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_your_key_here
```

## 📦 Deployment

### Vercel Deployment:
```bash
# 1. Set environment variable trong Vercel Dashboard:
NEXT_PUBLIC_USE_MOCK_DATA=true

# 2. Deploy:
npx vercel --prod
```

### Render Deployment:
```bash
# 1. Push code lên Git
git add .
git commit -m "Add mock data mode"
git push

# 2. Connect repository với Render
# 3. Set environment variable:
NEXT_PUBLIC_USE_MOCK_DATA=true
```

## 🧪 Testing

### Test với Mock Data:
```bash
NEXT_PUBLIC_USE_MOCK_DATA=true npm run dev
```

### Test với Backend:
```bash
# Đảm bảo Medusa backend đang chạy trên port 9000
NEXT_PUBLIC_USE_MOCK_DATA=false npm run dev
```

## 📝 Mock Data Location

Mock products được định nghĩa tại:
```
src/lib/data/mock-products.ts
```

Bạn có thể customize mock data tại file này!

---

Made with 🌸 by Hiểu Anh
