# Component: ProductViewer360

## Purpose
Interactive 360-degree product viewer for the Vita 1 sensor. Allows users to explore the device from all angles with drag/pan interaction and discover salient features through pulsing hotspots.

## Location
`/src/components/sections/product-viewer-360.tsx`

## Usage
```tsx
import { ProductViewer360 } from '@/components/sections/product-viewer-360';

<ProductViewer360 />
```

## Props
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| className | string | No | undefined | Additional CSS classes for Section wrapper |

## Component Structure

```
ProductViewer360
├── Section (UI component, default variant)
│   ├── SectionHeader
│   │   ├── SectionTitle ("Explore the Vita 1")
│   │   └── SectionSubtitle ("Drag to rotate...")
│   └── Card (lg padding)
│       ├── Loading State (conditional)
│       ├── Image Viewer (drag-enabled motion.div)
│       │   ├── Current Image (animated)
│       │   ├── Feature Hotspots (FeatureHotspot × N)
│       │   └── Drag Instruction Overlay (conditional)
│       ├── View Indicator Dots (button × 4)
│       ├── View Label (animated text)
│       └── Keyboard Hint
└── FeatureHotspot (sub-component)
    ├── Pulsing Dot (animated)
    └── Tooltip (conditional on hover/click)
```

## States

### Loading
- Shows animated spinner with forest-themed gradient background
- Text: "Loading 3D viewer..." (internationalized)
- Transitions to interactive view once all images preloaded

### Auto-Rotating (Initial)
- Automatically rotates through all 4 views once (8 seconds total, 2s per view)
- Starts 1 second after images load
- Shows "Drag to rotate" overlay hint
- Stops on user interaction (drag, click, keyboard)

### Interactive
- User can drag horizontally to rotate
- Arrow keys (← →) also rotate
- Pulsing hotspots visible (when not dragging)
- Hotspot tooltips on hover (desktop) or click (mobile)

### Dragging
- Cursor changes to "grabbing"
- Hotspots temporarily hidden for clean interaction
- Smooth resistance/elastic feel

## Feature Hotspots

Hotspots are positioned via percentage-based coordinates (x, y from 0-100) relative to the image container.

| View | Feature | Position | Translation Key |
|------|---------|----------|-----------------|
| Front (0) | Transparent Enclosure | 50%, 35% | enclosure |
| Front (0) | QR Code/Serial | 50%, 15% | qrCode |
| Front (0) | Internal Circuitry | 50%, 55% | circuitry |
| Right (1) | Plant Clips | 50%, 50% | clips |
| Right (1) | Tube Design | 50%, 25% | tube |
| Back (2) | Green PCB | 50%, 45% | pcb |
| Back (2) | Mounting Bracket | 50%, 75% | bracket |
| Left (3) | Wire Connection | 45%, 80% | wire |
| Left (3) | Form Factor | 50%, 45% | formFactor |

### FeatureHotspot Sub-Component

**Visual Design:**
- Outer pulse ring (24px, forest-500, infinite pulse animation)
- Inner dot (16px, forest-600, white border, shadow)
- Tooltip (white card, shadow-xl, positioned below hotspot)

**Interaction:**
- Desktop: Hover to show tooltip
- Mobile: Tap to toggle tooltip
- Scale animation on hover/tap
- Auto-detects touch capability

**Accessibility:**
- Button element with ARIA label
- Keyboard focusable
- Clear visual feedback

## Interaction Details

### Drag Mechanics
- **Sensitivity**: 30px of horizontal drag = 1 view change
- **Direction**: Drag right = rotate counter-clockwise (← view), Drag left = rotate clockwise (→ view)
- **Wrapping**: Infinite rotation in both directions (modulo arithmetic)
- **Constraints**: Drag locked to horizontal axis only
- **Elastic**: Framer Motion dragElastic={0.1} for natural feel

### Keyboard Navigation
- **Arrow Left (←)**: Previous view (counter-clockwise)
- **Arrow Right (→)**: Next view (clockwise)
- **Wrapping**: Infinite in both directions
- **User Interaction Flag**: Stops auto-rotate

### View Indicators
- 4 dots representing each view
- Active dot: wider (w-8), forest-600
- Inactive dots: small (w-3), forest-200, hover to forest-300
- Clickable to jump directly to view
- ARIA role="tablist" for accessibility

## Animations

| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Section entrance | Fade up (y: 20→0, opacity: 0→1) | whileInView | 0.6s |
| Image transition | Fade scale (opacity: 0→1, scale: 0.95→1) | View change | 0.3s |
| Hotspot entrance | Spring scale (scale: 0→1, opacity: 0→1) | Image load | Delay 0.2s |
| Pulse ring | Scale + opacity cycle (1→1.8→1) | Continuous | 2s loop |
| Tooltip | Fade scale (y: 10→0) | Hover/click | 0.2s |
| View label | Fade slide (y: -10→0, opacity: 0→1) | View change | Default |

## Responsive Design

### Mobile (<768px)
- Touch drag optimized
- Larger tap targets for hotspots
- Tooltips positioned carefully to stay in viewport
- Single column layout
- Instruction text adapted for touch

### Tablet (768px-1024px)
- Hybrid touch/mouse support
- Medium sizing
- Optimal hotspot spacing

### Desktop (>1024px)
- Mouse drag with cursor feedback
- Hover-based tooltip activation
- Larger viewport for detail visibility
- Keyboard hints prominent

## Accessibility Notes

### Keyboard Behavior
- Arrow keys rotate viewer
- Tab focuses on view indicator buttons
- Hotspots are keyboard-focusable buttons
- Enter/Space activates hotspot tooltips

### ARIA Attributes
- Main viewer: `role="img"`, `aria-label` with current view
- View indicators: `role="tablist"`, each button has `aria-label` and `aria-selected`
- Hotspots: `aria-label` with feature name

### Screen Reader Considerations
- Announces current view on rotation
- Hotspot labels clearly describe features
- Descriptive button text for view indicators
- Loading state announced

### Keyboard Navigation Flow
1. Tab to viewer container (can use arrow keys)
2. Tab to view indicator buttons
3. Tab to hotspot buttons
4. Tab to keyboard hint text

## Translation Keys Structure

All under `vita1.viewer360`:

```typescript
{
  heading: string
  subtitle: string
  loading: string
  dragToRotate: string
  keyboardHint: string
  views: {
    front: string
    right: string
    back: string
    left: string
  }
  features: {
    [featureKey]: {
      label: string
      description: string
    }
  }
}
```

## Performance Optimizations

1. **Image Preloading**: All 4 images preloaded on mount to prevent flicker
2. **Conditional Rendering**: Hotspots hidden during drag for smooth interaction
3. **Motion Values**: Framer Motion's useMotionValue for efficient drag tracking
4. **useEffect Dependencies**: Carefully managed to prevent unnecessary re-renders
5. **Event Cleanup**: All intervals and timeouts properly cleared on unmount

## Browser Compatibility

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features Used**:
  - Framer Motion (already in dependencies)
  - CSS Grid & Flexbox
  - Modern ES6+ features
  - Pointer Events API

## Configuration Constants

Located at top of component file:

```typescript
const VIEWS = ['front', 'right', 'back', 'left'] as const;
const SENSITIVITY = 30; // pixels to change view
const AUTO_ROTATE_DURATION = 8000; // ms for full rotation
const AUTO_ROTATE_DELAY = 1000; // ms before auto-rotate starts
```

## Testing Checklist

- [ ] Images preload without errors
- [ ] Auto-rotate starts after 1s, completes one rotation (8s)
- [ ] Auto-rotate stops on drag interaction
- [ ] Auto-rotate stops on keyboard interaction
- [ ] Auto-rotate stops on click interaction
- [ ] Drag left rotates clockwise
- [ ] Drag right rotates counter-clockwise
- [ ] Rotation wraps infinitely in both directions
- [ ] Arrow left key rotates counter-clockwise
- [ ] Arrow right key rotates clockwise
- [ ] View indicator dots show correct active state
- [ ] Clicking view indicator jumps to that view
- [ ] Hotspots appear on correct views
- [ ] Hotspots positioned correctly
- [ ] Desktop: Hotspot tooltips show on hover
- [ ] Mobile: Hotspot tooltips toggle on tap
- [ ] Tooltips stay within viewport bounds
- [ ] All text appears in English
- [ ] All text appears in Spanish (when locale is 'es')
- [ ] Component is responsive across breakpoints
- [ ] No console errors
- [ ] Smooth 60fps animations
- [ ] Graceful loading state

## Common Issues & Solutions

### Issue: Images not loading
**Solution**: Verify images are in `/public/` folder with correct filenames. Check browser Network tab for 404s.

### Issue: Auto-rotate not stopping
**Solution**: Ensure `setUserInteracted(true)` is called in all interaction handlers. Check interval cleanup.

### Issue: Hotspots misaligned
**Solution**: Adjust position percentages in `FEATURES` array. Remember coordinates are relative to container, not image.

### Issue: Tooltips cut off on mobile
**Solution**: Tooltip uses `translate-x-1/2` to center. May need viewport-aware positioning for edge cases.

### Issue: Drag feels unresponsive
**Solution**: Reduce `SENSITIVITY` constant (lower value = more responsive).

### Issue: Translation keys missing
**Solution**: Verify all keys exist in both `/src/messages/en.json` and `/src/messages/es.json` under `vita1.viewer360`.

## Future Enhancements

- [ ] Add Next.js Image component support for optimization
- [ ] Implement zoom functionality (pinch/scroll)
- [ ] Add fullscreen mode
- [ ] Support vertical swipe for additional views (top/bottom)
- [ ] Add shareable URL with view parameter
- [ ] Implement comparison mode (side-by-side views)
- [ ] Add video mode showing continuous rotation
- [ ] WebGL-based renderer for smoother transitions at scale
- [ ] AR mode integration for mobile devices
