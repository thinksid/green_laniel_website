# Image Optimization & Alt Text Audit

## Overview
This document provides recommendations for optimizing images and implementing proper alt text across the Green Laniel website for better SEO and accessibility.

## Image Optimization Checklist

### ✅ Completed
- [x] Next.js Image component configuration in next.config.mjs
- [x] AVIF and WebP format support enabled
- [x] Responsive image sizes configured
- [x] Image caching settings (60s TTL)

### ⚠️ Needs Attention
- [ ] Convert large PNG files to WebP/AVIF for better compression
- [ ] Optimize image file sizes (some may be too large)
- [ ] Add proper alt text to all images in components
- [ ] Create missing OG images for social sharing
- [ ] Consider lazy loading for below-the-fold images

---

## Image Inventory & Recommendations

### 1. Hero & Marketing Images

#### `/images/vita1-hero.jpg`
**Current:** Hero image for Vita 1 product page
**Recommended Alt Text:** "Vita 1 plant biosignal sensor attached to greenhouse plant stem monitoring plant health"
**Optimization:**
- Compress to < 200KB
- Consider creating WebP version
- Optimize for mobile (consider different crops for mobile/desktop)

#### `/images/mauricio-portrait.png`
**Current:** CEO portrait
**Recommended Alt Text:** "Mauricio Manotas, CEO of Green Laniel, in agricultural field"
**Optimization:**
- Convert PNG to JPG (portraits don't need transparency)
- Target file size: < 100KB
- Consider adding this to About page hero

### 2. Case Study Images

#### `/images/case-ornamentals.jpg|png`
**Recommended Alt Text:** "Texas greenhouse growing ornamental plants protected by Vita 1 monitoring system"
**Optimization:**
- Remove duplicate (both .jpg and .png exist)
- Keep JPG version, optimize to < 150KB

#### `/images/case-blueberries.png`
**Recommended Alt Text:** "Blueberry farm in Colombia using Vita 1 biosignal monitoring technology"
**Optimization:**
- Convert to JPG (no transparency needed)
- Target: < 150KB

#### `/images/case-potato.png`
**Recommended Alt Text:** "Potato storage facility with Vita 1 sensors for sprouting prediction and quality control"
**Optimization:**
- Convert to JPG
- Target: < 150KB

#### `/images/case-berries.jpeg|jpg`
**Recommended Alt Text:** "Berry crop field with precision agriculture monitoring using Vita 1 technology"
**Optimization:**
- Remove duplicate
- Keep one version, optimize to < 150KB

#### `/images/case-tomatoes.jpeg`
**Recommended Alt Text:** "Greenhouse tomato production with Vita 1 plant stress detection system"
**Optimization:**
- Compress to < 150KB

### 3. Mockup Images

#### `/images/laptop_mockup2.png`
**Recommended Alt Text:** "Vita 1 dashboard displaying real-time plant biosignal data and stress alerts"
**Optimization:**
- Large PNG - consider WebP conversion
- Target: < 250KB
- Important for Product page, prioritize optimization

#### `/images/alert-cold.png`
**Recommended Alt Text:** "Mobile alert notification showing cold stress detected in greenhouse plants"
**Optimization:**
- Small mockup, keep as PNG for quality
- Optimize to < 50KB

#### `/images/alert-water.png`
**Recommended Alt Text:** "Mobile alert notification showing water stress detected in crops"
**Optimization:**
- Optimize to < 50KB

#### `/images/alert-p.png`
**Recommended Alt Text:** "Mobile alert notification showing plant nutrient stress detection"
**Optimization:**
- Optimize to < 50KB

### 4. Diagrams

#### `/images/diagram.png`
**Recommended Alt Text:** "Technical diagram showing how Vita 1 measures plant biosignals from sensor to dashboard alert"
**Optimization:**
- Important for understanding product
- Optimize to < 200KB
- Consider SVG version for better scaling

#### `/images/diagram-es.png`
**Recommended Alt Text:** "Diagrama técnico mostrando cómo Vita 1 mide bioseñales vegetales desde el sensor hasta alertas"
**Optimization:**
- Optimize to < 200KB
- Consider SVG version

### 5. Product Images

#### `/vita-1-front.png`
**Recommended Alt Text:** "Vita 1 plant biosignal sensor front view showing transparent weatherproof enclosure and green attachment clips"
**Optimization:**
- Large PNG - 264KB currently
- Convert to WebP: should reduce to ~150KB
- Keep PNG as fallback

#### `/vita-1-back.png`
**Recommended Alt Text:** "Vita 1 sensor back view showing QR code, serial number, and internal circuitry"
**Optimization:**
- 233KB currently
- Convert to WebP: target ~130KB

#### `/vita-1-left.png`
**Recommended Alt Text:** "Vita 1 sensor left side view showing compact form factor and mounting bracket"
**Optimization:**
- 146KB currently
- Convert to WebP: target ~80KB

#### `/vita-1-right.png`
**Recommended Alt Text:** "Vita 1 sensor right side view showing elongated tube design and wire connection point"
**Optimization:**
- 145KB currently
- Convert to WebP: target ~80KB

### 6. Icons

#### `/icons/icon_flower.png`
**Recommended Alt Text:** "Flower icon representing ornamental plant monitoring"
**Optimization:**
- Consider converting to SVG for better scaling
- Or optimize PNG to < 10KB

#### `/icons/icon_fruits.png`
**Recommended Alt Text:** "Fruit icon representing berry and fruit crop monitoring"
**Optimization:**
- Convert to SVG or optimize to < 10KB

#### `/icons/icon_greenhouse.png`
**Recommended Alt Text:** "Greenhouse icon representing controlled environment agriculture"
**Optimization:**
- Convert to SVG or optimize to < 10KB

#### `/icons/icon_plants.png`
**Recommended Alt Text:** "Plant icon representing general crop monitoring"
**Optimization:**
- Convert to SVG or optimize to < 10KB

### 7. Logo Files

#### `/logos/logo-green.png`
**Recommended Alt Text:** "Green Laniel logo - Plant biosignal monitoring for precision agriculture"
**Optimization:**
- Convert to SVG (vector format ideal for logos)
- If keeping PNG, optimize to < 20KB

#### `/logos/logo-white-transparent.png`
**Recommended Alt Text:** "Green Laniel logo white version"
**Optimization:**
- Convert to SVG or optimize PNG

#### `/logos/isotype-*.png`
**Recommended Alt Text:** "Green Laniel icon mark"
**Optimization:**
- Convert all logo variations to SVG
- Much better for responsive design and SEO

### 8. Partner Logos

#### `/images/partners/vivent-logo.png`
**Recommended Alt Text:** "Vivent Biosignals logo - Swiss plant biosignal technology partner"
**Optimization:**
- Request SVG from partner
- Or optimize PNG to < 20KB

#### `/images/partners/agroscope-logo.png`
**Recommended Alt Text:** "Agroscope logo - Swiss federal agricultural research center validating Vita 1"
**Optimization:**
- Request SVG or optimize PNG

#### `/images/partners/bcorp-logo.png`
**Recommended Alt Text:** "B Corporation certified logo - Green Laniel meets highest social and environmental standards"
**Optimization:**
- Request official SVG from B Lab
- Or optimize PNG to < 20KB

#### `/images/partners/greenspec-logo.svg`
**Recommended Alt Text:** "GreenSpec partner logo"
**Status:** ✅ Already SVG - Good!

---

## Implementation Guide

### Using Next.js Image Component

Replace standard `<img>` tags with Next.js `<Image>` component:

```tsx
import Image from 'next/image';

// Before
<img src="/images/vita1-hero.jpg" alt="Hero image" />

// After
<Image
  src="/images/vita1-hero.jpg"
  alt="Vita 1 plant biosignal sensor attached to greenhouse plant stem monitoring plant health"
  width={1920}
  height={1080}
  priority={true} // For above-the-fold images
  quality={85} // Default is 75
/>
```

### Lazy Loading

For images below the fold, Next.js automatically lazy loads them. No need to add loading="lazy".

### Priority Images

Mark above-the-fold images as priority:
- Hero images on all pages
- Logo in navbar
- First case study image

```tsx
<Image src="/hero.jpg" alt="..." priority />
```

### Responsive Images

Next.js automatically generates responsive images. To specify different images for mobile:

```tsx
<picture>
  <source media="(max-width: 768px)" srcSet="/hero-mobile.jpg" />
  <Image src="/hero-desktop.jpg" alt="..." />
</picture>
```

---

## Alt Text Best Practices

### ✅ Good Alt Text Examples
- "Vita 1 plant biosignal sensor attached to tomato plant stem in greenhouse"
- "Mauricio Manotas, CEO of Green Laniel, inspecting blueberry crops in Colombia"
- "Real-time dashboard showing plant water stress alerts for potato storage facility"

### ❌ Bad Alt Text Examples
- "Image" (too generic)
- "hero-image.jpg" (filename, not descriptive)
- "" (empty, fails accessibility)
- "Click here" (not descriptive)

### Alt Text Guidelines
1. **Be descriptive but concise** (aim for 125 characters or less)
2. **Include relevant keywords naturally** (don't keyword stuff)
3. **Don't start with "Image of" or "Picture of"** (screen readers announce it's an image)
4. **For decorative images**, use empty alt="" (not null)
5. **For complex diagrams**, consider longer descriptions or aria-describedby

---

## SEO Image Optimization Checklist

- [ ] All images have descriptive, keyword-rich alt text
- [ ] File names are descriptive (e.g., `vita-1-sensor-greenhouse.jpg` not `IMG_1234.jpg`)
- [ ] Images are compressed (target: <200KB for photos, <50KB for graphics)
- [ ] WebP/AVIF formats generated for modern browsers
- [ ] Proper image dimensions specified (width/height to prevent CLS)
- [ ] Critical images have `priority` flag
- [ ] Images are served via Next.js Image component for optimization
- [ ] Responsive images for mobile devices
- [ ] OG images created for social sharing (1200x630px)
- [ ] Image sitemap added to sitemap.xml (optional but helpful)

---

## Performance Targets

Based on Google's Core Web Vitals:

- **LCP (Largest Contentful Paint)**: < 2.5 seconds
  - Optimize hero images
  - Use priority loading for above-fold images

- **CLS (Cumulative Layout Shift)**: < 0.1
  - Always specify width and height
  - Reserve space for images before they load

- **FID (First Input Delay)**: < 100ms
  - Defer loading of below-fold images
  - Lazy load non-critical images

---

## Tools for Image Optimization

### Online Tools
- **TinyPNG**: https://tinypng.com/ (PNG/JPG compression)
- **Squoosh**: https://squoosh.app/ (WebP/AVIF conversion)
- **SVGOMG**: https://jakearchibald.github.io/svgomg/ (SVG optimization)

### Command Line Tools
```bash
# Convert PNG to WebP
npx @squoosh/cli --webp auto *.png

# Optimize JPG
npx @squoosh/cli --mozjpeg auto *.jpg

# Optimize PNG
pngquant --quality=65-80 *.png
```

### Automation
Consider adding image optimization to your build process:
```bash
npm install --save-dev next-optimized-images imagemin
```

---

## Next Steps

1. **Immediate (High Priority)**
   - Add alt text to all images in React components
   - Convert logos to SVG format
   - Create missing OG images (og-default.jpg, og-vita-1.jpg, etc.)

2. **Short-term (Medium Priority)**
   - Compress all product images (vita-1-*.png)
   - Optimize case study images
   - Convert icons to SVG

3. **Long-term (Nice to Have)**
   - Set up automated image optimization pipeline
   - Create responsive image variants
   - Add image sitemap
   - Monitor Core Web Vitals in Google Search Console

---

## Testing

After implementing optimizations, test with:
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+
