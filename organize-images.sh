#!/bin/bash

echo "🖼️  Organizing Ying Floral Images"
echo "=================================="

# Create organized structure
mkdir -p public/images/{hero,services,portfolio,about,cta}

# Count and prepare
FOLDER1="public/Hiểu Anh [30-09-2025 21_50]"
FOLDER2="public/Hiểu Anh [30-09-2025 21_50] (1)"
FOLDER3="public/Hiểu Anh [30-09-2025 21_50] (2)"

echo ""
echo "📂 Source folders:"
echo "   Folder 1: $(ls -1 "$FOLDER1" | wc -l) images"
echo "   Folder 2: $(ls -1 "$FOLDER2" | wc -l) images"
echo "   Folder 3: $(ls -1 "$FOLDER3" | wc -l) images"

# Get all images as arrays
folder1_images=($(ls -1 "$FOLDER1"/*.jpg 2>/dev/null | sort))
folder2_images=($(ls -1 "$FOLDER2"/*.jpg 2>/dev/null | sort))
folder3_images=($(ls -1 "$FOLDER3"/*.jpg 2>/dev/null | sort))

echo ""
echo "🎨 Organizing images..."

# Hero (1 image - pick the best one)
if [ ${#folder2_images[@]} -gt 0 ]; then
    cp "${folder2_images[0]}" public/images/hero/hero-bg.jpg
    echo "✅ Hero background: hero-bg.jpg"
fi

# Services (3 images)
if [ ${#folder1_images[@]} -ge 3 ]; then
    cp "${folder1_images[0]}" public/images/services/wedding-flowers.jpg
    cp "${folder1_images[1]}" public/images/services/special-occasions.jpg
    cp "${folder1_images[2]}" public/images/services/corporate-events.jpg
    echo "✅ Services: 3 images"
elif [ ${#folder1_images[@]} -gt 0 ]; then
    # Use what we have
    for i in "${!folder1_images[@]}"; do
        case $i in
            0) cp "${folder1_images[$i]}" public/images/services/wedding-flowers.jpg ;;
            1) cp "${folder1_images[$i]}" public/images/services/special-occasions.jpg ;;
            2) cp "${folder1_images[$i]}" public/images/services/corporate-events.jpg ;;
        esac
    done
    echo "✅ Services: ${#folder1_images[@]} images"
fi

# Portfolio (3 images)
if [ ${#folder3_images[@]} -ge 3 ]; then
    cp "${folder3_images[0]}" public/images/portfolio/portfolio-1.jpg
    cp "${folder3_images[1]}" public/images/portfolio/portfolio-2.jpg
    cp "${folder3_images[2]}" public/images/portfolio/portfolio-3.jpg
    echo "✅ Portfolio: 3 images"
fi

# About/Julia (1 image)
if [ ${#folder2_images[@]} -gt 1 ]; then
    cp "${folder2_images[1]}" public/images/about/julia-florist.jpg
    echo "✅ About: julia-florist.jpg"
fi

# CTA (1 image)
if [ ${#folder2_images[@]} -gt 2 ]; then
    cp "${folder2_images[2]}" public/images/cta/cta-flower.jpg
    echo "✅ CTA: cta-flower.jpg"
fi

# Copy remaining images for portfolio/gallery
counter=4
for img in "${folder2_images[@]:3}"; do
    cp "$img" "public/images/portfolio/portfolio-$counter.jpg"
    ((counter++))
done

echo ""
echo "✨ Image organization complete!"
echo ""
echo "📊 Summary:"
echo "   Hero: $(ls -1 public/images/hero/*.jpg 2>/dev/null | wc -l) image(s)"
echo "   Services: $(ls -1 public/images/services/*.jpg 2>/dev/null | wc -l) image(s)"
echo "   Portfolio: $(ls -1 public/images/portfolio/*.jpg 2>/dev/null | wc -l) image(s)"
echo "   About: $(ls -1 public/images/about/*.jpg 2>/dev/null | wc -l) image(s)"
echo "   CTA: $(ls -1 public/images/cta/*.jpg 2>/dev/null | wc -l) image(s)"

