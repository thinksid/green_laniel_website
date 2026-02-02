# Product Viewer 360 - Setup Instructions

## Component Overview

The `ProductViewer360` component is a fully interactive 360-degree product viewer for the Vita 1 sensor, featuring:

- **Drag-to-rotate interaction** (mouse and touch support)
- **Pulsing feature hotspots** with informative tooltips
- **Auto-rotate on load** (subtle demonstration, stops after one rotation or on user interaction)
- **Keyboard navigation** (arrow keys)
- **Responsive design** (mobile-first)
- **Internationalization** (English/Spanish via next-intl)
- **Accessibility** (ARIA labels, keyboard support, semantic HTML)

## Image Setup Required

The component expects images at these paths in the `public` folder:

```
/public/
  ├── vita-1-front.png
  ├── vita-1-right.png
  ├── vita-1-back.png
  └── vita-1-left.png
```

### Steps to Set Up Images

1. **Create public folder** (if it doesn't exist):
   ```bash
   mkdir -p public
   ```

2. **Copy images from reference docs**:
   ```bash
   cp "reference docs/vita 1 front.png" public/vita-1-front.png
   cp "reference docs/vita 1 right.png" public/vita-1-right.png
   cp "reference docs/vita 1 back.png" public/vita-1-back.png
   cp "reference docs/vita 1 left.png" public/vita-1-left.png
   ```

3. **Optional: Optimize images** for web performance:
   ```bash
   # Using ImageMagick or similar tool
   # Resize to max 1200px width, compress quality to 85%
   mogrify -resize '1200x1200>' -quality 85 public/vita-1-*.png
   ```

## Component Location

- **Component**: `/src/components/sections/product-viewer-360.tsx`
- **Integration**: `/src/app/[locale]/vita-1/page.tsx` (between UseCases and Service sections)
- **Translations**: `/src/messages/en.json` and `/src/messages/es.json` under `vita1.viewer360`

## Feature Hotspots Configured

### Front View
- Transparent weatherproof enclosure (50%, 35%)
- QR code & serial number (50%, 15%)
- Internal circuitry visible (50%, 55%)

### Right View
- Green plant attachment clips (50%, 50%)
- Elongated tube design (50%, 25%)

### Back View
- Green PCB visible (50%, 45%)
- Mounting bracket (50%, 75%)

### Left View
- Wire connection point (45%, 80%)
- Compact form factor (50%, 45%)

## Usage

The component is automatically included in the Vita 1 page. No additional configuration needed.

```tsx
import { ProductViewer360 } from '@/components/sections/product-viewer-360';

// In your page:
<ProductViewer360 />
```

## Customization

### Adjust Auto-Rotate Timing

In `product-viewer-360.tsx`:

```typescript
const AUTO_ROTATE_DURATION = 8000; // ms for one full rotation (default: 8s)
const AUTO_ROTATE_DELAY = 1000; // ms before starting (default: 1s)
```

### Adjust Drag Sensitivity

```typescript
const SENSITIVITY = 30; // pixels needed to change view (default: 30px)
```

### Modify Feature Hotspots

Edit the `FEATURES` array to adjust positions or add/remove hotspots:

```typescript
const FEATURES: Feature[] = [
  {
    view: 0, // 0: front, 1: right, 2: back, 3: left
    position: { x: 50, y: 35 }, // percentage-based (0-100)
    labelKey: 'enclosure', // translation key under features
    descriptionKey: 'enclosure'
  },
  // ... more features
];
```

## Translation Keys

All text is internationalized. To modify text, edit `/src/messages/en.json` and `/src/messages/es.json`:

```json
{
  "vita1": {
    "viewer360": {
      "heading": "Explore the Vita 1",
      "subtitle": "Drag to rotate and explore the sensor's design and features",
      "views": {
        "front": "Front View",
        "right": "Right View",
        "back": "Back View",
        "left": "Left View"
      },
      "features": {
        "enclosure": {
          "label": "Transparent Weatherproof Enclosure",
          "description": "..."
        }
      }
    }
  }
}
```

## Accessibility Features

- **Keyboard Navigation**: Arrow keys (← →) rotate the viewer
- **ARIA Labels**: Each view and hotspot has descriptive labels
- **Focus Management**: Keyboard-accessible hotspots and view indicators
- **Screen Reader Support**: Announces current view on rotation
- **Touch-Friendly**: Large tap targets for mobile users

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled
- Uses Framer Motion for animations (already in project dependencies)

## Performance Considerations

- **Image Preloading**: All 4 images preloaded on component mount
- **Loading State**: Shows spinner while images load
- **Smooth Transitions**: GPU-accelerated animations via Framer Motion
- **No Heavy Libraries**: Uses existing Framer Motion dependency only

## Troubleshooting

### Images not appearing
- Verify images are in `/public/` folder with correct filenames
- Check browser console for 404 errors
- Ensure Next.js dev server is running

### Auto-rotate not working
- Check that images have finished preloading (loading spinner disappears)
- Verify `imagesLoaded` state is true
- Look for JavaScript errors in console

### Hotspots not showing
- Ensure tooltips are within viewport bounds
- Check translation keys exist in messages files
- Verify `currentView` matches feature view indices

### Performance issues
- Optimize image file sizes (recommended: <500KB each)
- Reduce image dimensions (recommended: 1200x1200px max)
- Check for console warnings about re-renders

## Next Steps

1. Copy images to public folder (see "Image Setup Required" above)
2. Test in browser: `npm run dev`
3. Navigate to `/en/vita-1` or `/es/vita-1`
4. Verify:
   - Images load correctly
   - Auto-rotate works (stops after one rotation)
   - Drag interaction works (mouse and touch)
   - Hotspots appear and tooltips show on hover/click
   - Keyboard navigation works (arrow keys)
   - View indicator dots work
   - All text appears in both English and Spanish

## Future Enhancement Ideas

- Add zoom functionality (pinch/scroll)
- Support for more views (top, bottom, angled)
- Video mode showing rotation animation
- AR view integration
- Full-screen mode
- Share/embed functionality
