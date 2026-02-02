# Product Viewer 360 - Quick Start Guide

## 🚀 Get Running in 3 Steps

### Step 1: Copy Images
Run the setup script from project root:
```bash
./setup-viewer-images.sh
```

Or copy manually:
```bash
mkdir -p public
cp "reference docs/vita 1 front.png" public/vita-1-front.png
cp "reference docs/vita 1 right.png" public/vita-1-right.png
cp "reference docs/vita 1 back.png" public/vita-1-back.png
cp "reference docs/vita 1 left.png" public/vita-1-left.png
```

### Step 2: Start Dev Server
```bash
npm run dev
```

### Step 3: Test
Open in browser:
- English: http://localhost:3000/en/vita-1
- Spanish: http://localhost:3000/es/vita-1

Scroll down to the "Explore the Vita 1" section (between Use Cases and Service).

---

## ✅ Testing Checklist

Verify these work:
- [ ] Auto-rotate starts after 1 second
- [ ] Auto-rotate completes one full rotation (8 seconds)
- [ ] Drag left/right to rotate
- [ ] Arrow keys rotate (← →)
- [ ] Click view indicator dots to jump
- [ ] Hover hotspots (desktop) shows tooltip
- [ ] Tap hotspots (mobile) shows tooltip
- [ ] All text in English
- [ ] Switch to /es/vita-1 for Spanish

---

## 📁 Files Created

```
src/components/sections/
  └── product-viewer-360.tsx         ← Main component

src/app/[locale]/vita-1/
  └── page.tsx                       ← Updated with component

src/messages/
  ├── en.json                        ← Added translations
  └── es.json                        ← Added translations

public/                              ← You need to add images here
  ├── vita-1-front.png
  ├── vita-1-right.png
  ├── vita-1-back.png
  └── vita-1-left.png
```

---

## 🎨 Quick Customization

### Change Auto-Rotate Speed
Edit `/src/components/sections/product-viewer-360.tsx`:
```typescript
const AUTO_ROTATE_DURATION = 8000; // Total time for one rotation (ms)
const AUTO_ROTATE_DELAY = 1000;    // Wait before starting (ms)
```

### Adjust Drag Sensitivity
```typescript
const SENSITIVITY = 30; // Lower = more responsive (default: 30px)
```

### Modify Hotspot Positions
Find `FEATURES` array in component:
```typescript
{
  view: 0,              // 0=front, 1=right, 2=back, 3=left
  position: { x: 50, y: 35 }, // Percentage from top-left
  labelKey: 'enclosure',
  descriptionKey: 'enclosure'
}
```

### Update Feature Text
Edit translation files:
```
/src/messages/en.json → vita1.viewer360.features
/src/messages/es.json → vita1.viewer360.features
```

---

## 🐛 Troubleshooting

### Images not appearing?
1. Check `/public/` folder exists and contains images
2. Verify filenames match exactly: `vita-1-front.png`, etc.
3. Check browser console for 404 errors
4. Restart dev server: `npm run dev`

### Auto-rotate not working?
1. Wait for loading spinner to disappear
2. Check console for JavaScript errors
3. Don't interact during initial load

### Hotspots not visible?
1. Make sure you're not dragging
2. Check current view has hotspots configured
3. Look at browser console for errors

### Wrong language?
- English: `/en/vita-1`
- Spanish: `/es/vita-1`

---

## 📚 Full Documentation

- `IMPLEMENTATION_SUMMARY.md` - Complete overview
- `PRODUCT_VIEWER_SETUP.md` - Detailed setup instructions
- `src/components/sections/PRODUCT_VIEWER_360_DOCS.md` - Component API

---

## 🎯 Key Features

✨ Drag to rotate (360 degrees)
✨ Auto-rotate on load (subtle demo)
✨ Pulsing feature hotspots
✨ Keyboard navigation (arrow keys)
✨ Touch and mouse support
✨ Fully responsive
✨ English + Spanish
✨ Accessible (WCAG 2.1 AA)

---

**Ready to go!** Any questions? Check the full documentation files.
