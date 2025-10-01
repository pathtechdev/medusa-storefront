# Ying Floral Logo Setup Guide

## 📍 Current Status

The website is configured to use **"Ying Floral"** branding with your custom logo.

## 🎨 Logo Integration

### Where Logo is Used:

1. **Navigation Header** - Top of every page
2. **Hero Section** - Large display on homepage
3. **Footer** - Bottom of every page

### Logo File Setup:

**Required file**: `public/images/logo.jpg`

The logo file you provided needs to be copied to:
```
public/images/logo.jpg
```

## 📋 Step-by-Step Instructions

### Option 1: Copy Logo File

If you have the logo file (logo.jpg), copy it to the correct location:

```bash
# From your terminal:
cp /path/to/your/logo.jpg public/images/logo.jpg
```

### Option 2: Manual Copy

1. Locate your logo file (the signature-style "Ying" with flower image)
2. Rename it to: `logo.jpg`
3. Copy to: `medusa-storefront/public/images/` directory

### Option 3: Download from Chat

If the logo was attached in the chat:
1. Download the logo image from the conversation
2. Save as `logo.jpg`
3. Place in `public/images/` folder

## ✨ Logo Specifications

### Current Logo Design:
- **Style**: Hand-written "Ying" text with floral illustration
- **Format**: JPG (can also use PNG with transparency)
- **Colors**: Black/dark on light background

### Recommended Sizes:
- **Navigation**: 120x48px (auto-scaled)
- **Hero Section**: 400x200px (auto-scaled)
- **Mobile**: Responsive, scales automatically

### File Formats Supported:
- `.jpg` / `.jpeg` - Recommended
- `.png` - For transparency (better quality)
- `.svg` - Vector (best for scaling)

## 🔄 Fallback System

If `logo.jpg` is not found, the system will:
1. Display "Ying Floral" as text logo
2. Use Fraunces font (elegant serif)
3. Maintain brand consistency

**This means the site will work even without the logo file!**

## 🚀 After Adding Logo

### 1. Clear Build Cache:
```bash
rm -rf .next
```

### 2. Rebuild:
```bash
npm run build
```

### 3. Start Dev Server:
```bash
npm run dev
```

### 4. Check Browser:
Visit `http://localhost:3000/gb` and verify logo appears in:
- Header navigation
- Hero section
- Footer

## 📐 Logo Optimization Tips

### For Best Results:

1. **Transparent Background**: Use PNG with transparent background
   ```bash
   cp logo.png public/images/logo.png
   # Then update Logo component to use .png
   ```

2. **High Resolution**: Use at least 400x200px for hero section

3. **File Size**: Optimize to < 100KB
   - Use tools like TinyPNG, ImageOptim
   - Or online: https://tinypng.com/

4. **Multiple Versions**:
   ```
   public/images/
   ├── logo.jpg          # Main logo
   ├── logo-light.png    # Light version for dark backgrounds
   ├── logo-dark.png     # Dark version for light backgrounds
   └── logo-icon.png     # Square icon for mobile
   ```

## 🎨 Customizing Logo Display

### Change Logo Size in Navigation:

Edit `src/modules/layout/templates/nav/index.tsx`:
```tsx
<Logo size="sm" variant="dark" />  // Small
<Logo size="md" variant="dark" />  // Medium (default)
<Logo size="lg" variant="dark" />  // Large
```

### Change Logo Style:

Edit `src/modules/layout/components/logo/index.tsx`:
```tsx
// Adjust width/height:
width={size === "sm" ? 80 : size === "md" ? 120 : 160}
height={size === "sm" ? 32 : size === "md" ? 48 : 64}
```

## 🔍 Troubleshooting

### Logo Not Showing?

1. **Check file location**:
   ```bash
   ls -l public/images/logo.jpg
   ```
   Should show the file exists

2. **Check file permissions**:
   ```bash
   chmod 644 public/images/logo.jpg
   ```

3. **Check browser console** (F12):
   - Look for 404 errors for logo.jpg
   - Check Network tab for image loading

4. **Hard refresh browser**:
   - Chrome/Firefox: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Logo Looks Blurry?

- Use a higher resolution image (at least 2x the display size)
- Use PNG instead of JPG for better quality
- Consider using SVG for perfect scaling

### Logo Has Wrong Colors?

- Ensure logo has transparent background (use PNG)
- Or adjust background in component if using JPG

## 📝 Component Files Updated

Files that use the logo:

1. `src/modules/layout/components/logo/index.tsx` - Logo component
2. `src/modules/layout/templates/nav/index.tsx` - Navigation with logo
3. `src/modules/home/components/hero/index.tsx` - Hero section with large logo
4. `src/modules/layout/templates/footer/index.tsx` - Footer with logo

## ✅ Verification Checklist

After adding logo:

- [ ] Logo file exists at `public/images/logo.jpg`
- [ ] File is readable (not 0 bytes)
- [ ] Build completes without errors
- [ ] Logo appears in navigation header
- [ ] Logo displays in hero section
- [ ] Logo shows in footer
- [ ] Logo scales correctly on mobile
- [ ] No console errors about logo

## 🎯 Next Steps

1. **Add logo file** to `public/images/logo.jpg`
2. **Rebuild** project: `rm -rf .next && npm run build`
3. **Test** on all pages
4. **Optional**: Add multiple logo variants for different backgrounds
5. **Optional**: Optimize logo file size

## 💡 Pro Tips

1. **SVG Format**: Convert to SVG for best quality:
   - Use online tools like vectorizer.io
   - Save as `public/images/logo.svg`
   - Update component to use `.svg`

2. **Brand Colors**: Logo colors already match theme:
   - Pearl Bush: `#EFEAE2`
   - Soya Bean: `#6A644F`
   - Cod Gray: `#111111`

3. **Consistency**: Use same logo across all touchpoints:
   - Website (done!)
   - Social media
   - Business cards
   - Email signatures

---

**Need Help?** Check:
- Image is in correct folder: `public/images/`
- Filename is exactly: `logo.jpg` (lowercase)
- Browser cache is cleared
- Build is fresh (deleted `.next` folder) 