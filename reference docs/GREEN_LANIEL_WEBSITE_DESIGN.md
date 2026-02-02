# GREEN LANIEL WEBSITE - DESIGN & BUILD SPECIFICATION

**Version:** 1.0  
**Date:** January 28, 2026  
**Status:** Ready for Development

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Technical Stack](#2-technical-stack)
3. [Design System](#3-design-system)
4. [Site Architecture](#4-site-architecture)
5. [Component Library](#5-component-library)
6. [Page Specifications](#6-page-specifications)
7. [Internationalization](#7-internationalization-en--es)
8. [Assets Checklist](#8-assets-checklist)
9. [Implementation Notes](#9-implementation-notes)

---

## 1. PROJECT OVERVIEW

### 1.1 Business Context

**Company:** Green Laniel  
**Product:** Vita 1 (plant biosignal monitoring system)  
**Identity:** "The Bridge" — translating Swiss precision into American field reality  
**Target Audience:** Mid-tech growers (2-50 hectares) managing high-value crops

### 1.2 Website Goals

1. **Primary:** Generate qualified consultation calls
2. **Secondary:** Establish credibility and differentiate from generic agtech
3. **Tertiary:** Educate visitors on plant biosignal technology

### 1.3 Target Customer Archetypes

| Archetype | Description | Key Message |
|-----------|-------------|-------------|
| **Risk-Aware Protectors** | Potato storage operators, greenhouse managers worried about equipment failure | "Catch disasters before they happen" |
| **Performance-Seekers** | Berry growers, premium crop producers optimizing quality | "Optimize yields with plant-level insights" |

### 1.4 Reference Site

**Inspiration:** [aydi.com](https://aydi.com/)
- Clean, modern aesthetic
- Bold typography
- Language toggle (EN/ES)
- Emotional storytelling
- Clear product differentiation

---

## 2. TECHNICAL STACK

### 2.1 Recommended Stack

```
Framework:      Next.js 14+ (App Router)
Language:       TypeScript
Styling:        Tailwind CSS
i18n:           next-intl
Forms:          Formspree or Netlify Forms
Hosting:        Vercel or Netlify
```

### 2.2 Project Structure

```
/green-laniel-website
├── /public
│   ├── /images
│   │   ├── hero-greenhouse.jpg
│   │   ├── hero-potato-storage.jpg
│   │   ├── vita1-sensor.jpg
│   │   ├── mauricio-field.jpg
│   │   ├── texas-greenhouse.jpg
│   │   ├── potato-facility.jpg
│   │   └── colombia-blueberries.jpg
│   ├── /logos
│   │   ├── green-laniel.svg
│   │   ├── vivent.svg
│   │   ├── b-corp.svg
│   │   ├── agroscope.svg
│   │   └── pepsico.svg
│   └── /icons
│       └── (custom icons if needed)
├── /src
│   ├── /app
│   │   ├── /[locale]
│   │   │   ├── page.tsx              # Home
│   │   │   ├── /vita-1
│   │   │   │   └── page.tsx          # Product page
│   │   │   ├── /about
│   │   │   │   └── page.tsx          # About page
│   │   │   └── /contact
│   │   │       └── page.tsx          # Contact page
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── /components
│   │   ├── /layout
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LanguageToggle.tsx
│   │   ├── /sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Stakes.tsx
│   │   │   ├── ValueProp.tsx
│   │   │   ├── Guide.tsx
│   │   │   ├── Plan.tsx
│   │   │   ├── CaseStudyCarousel.tsx
│   │   │   ├── Explainer.tsx
│   │   │   ├── Specs.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── FinalCTA.tsx
│   │   └── /ui
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Tab.tsx
│   │       └── Accordion.tsx
│   ├── /lib
│   │   └── utils.ts
│   └── /messages
│       ├── en.json
│       └── es.json
├── tailwind.config.ts
├── next.config.js
└── package.json
```

### 2.3 Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next-intl": "^3.0.0",
    "lucide-react": "^0.263.1",
    "framer-motion": "^10.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0"
  }
}
```

---

## 3. DESIGN SYSTEM

### 3.1 Color Palette

**Design Direction:** Organic/agricultural meets modern technology. Grounded, trustworthy, professional.

```css
:root {
  /* Primary - Deep Forest Green */
  --color-primary-900: #0D2818;
  --color-primary-800: #1B4332;
  --color-primary-700: #2D6A4F;
  --color-primary-600: #40916C;
  --color-primary-500: #52B788;
  --color-primary-400: #74C69D;
  --color-primary-300: #95D5B2;
  --color-primary-200: #B7E4C7;
  --color-primary-100: #D8F3DC;
  
  /* Accent - Warm Earth */
  --color-accent-600: #9C6644;
  --color-accent-500: #B07D56;
  --color-accent-400: #C49A6C;
  
  /* Neutrals - Warm Gray */
  --color-neutral-950: #0F0F0F;
  --color-neutral-900: #1A1A1A;
  --color-neutral-800: #2D2D2D;
  --color-neutral-700: #404040;
  --color-neutral-600: #525252;
  --color-neutral-500: #737373;
  --color-neutral-400: #A3A3A3;
  --color-neutral-300: #D4D4D4;
  --color-neutral-200: #E5E5E5;
  --color-neutral-100: #F5F5F5;
  --color-neutral-50: #FAFAFA;
  
  /* Semantic */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  
  /* Background */
  --color-bg-primary: #FDFCFB;      /* Warm off-white */
  --color-bg-secondary: #F7F5F3;    /* Light warm gray */
  --color-bg-dark: #1B4332;         /* Dark green sections */
}
```

**Tailwind Config Extension:**

```javascript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      forest: {
        900: '#0D2818',
        800: '#1B4332',
        700: '#2D6A4F',
        600: '#40916C',
        500: '#52B788',
        400: '#74C69D',
        300: '#95D5B2',
        200: '#B7E4C7',
        100: '#D8F3DC',
      },
      earth: {
        600: '#9C6644',
        500: '#B07D56',
        400: '#C49A6C',
      },
      cream: '#FDFCFB',
      warmgray: '#F7F5F3',
    }
  }
}
```

### 3.2 Typography

**Design Direction:** Distinctive but readable. Editorial quality without being pretentious.

**Font Pairing:**

```css
/* Display/Headings - DM Serif Display (Google Fonts) */
/* Alternative: Playfair Display, Lora */
--font-display: 'DM Serif Display', Georgia, serif;

/* Body/UI - DM Sans (Google Fonts) */
/* Alternative: Source Sans 3, IBM Plex Sans */
--font-body: 'DM Sans', -apple-system, sans-serif;

/* Mono (for specs/technical) - JetBrains Mono */
--font-mono: 'JetBrains Mono', monospace;
```

**Type Scale:**

```css
/* Headings */
.text-display-xl {
  font-family: var(--font-display);
  font-size: 4.5rem;      /* 72px */
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.text-display-lg {
  font-family: var(--font-display);
  font-size: 3.5rem;      /* 56px */
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.text-display-md {
  font-family: var(--font-display);
  font-size: 2.5rem;      /* 40px */
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.text-display-sm {
  font-family: var(--font-display);
  font-size: 1.875rem;    /* 30px */
  line-height: 1.25;
}

/* Body */
.text-body-xl {
  font-family: var(--font-body);
  font-size: 1.5rem;      /* 24px */
  line-height: 1.5;
}

.text-body-lg {
  font-family: var(--font-body);
  font-size: 1.25rem;     /* 20px */
  line-height: 1.6;
}

.text-body-md {
  font-family: var(--font-body);
  font-size: 1rem;        /* 16px */
  line-height: 1.6;
}

.text-body-sm {
  font-family: var(--font-body);
  font-size: 0.875rem;    /* 14px */
  line-height: 1.5;
}

/* Labels/Buttons */
.text-label {
  font-family: var(--font-body);
  font-size: 0.875rem;    /* 14px */
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
```

**Tailwind Config:**

```javascript
// tailwind.config.ts
theme: {
  extend: {
    fontFamily: {
      display: ['DM Serif Display', 'Georgia', 'serif'],
      body: ['DM Sans', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      'display-sm': ['1.875rem', { lineHeight: '1.25' }],
    }
  }
}
```

### 3.3 Spacing System

Use Tailwind's default spacing scale (4px base):

```
4:   1rem  (16px)  - Base unit
8:   2rem  (32px)  - Section padding (mobile)
12:  3rem  (48px)  - Component gaps
16:  4rem  (64px)  - Section padding (tablet)
20:  5rem  (80px)  - Section padding (desktop)
24:  6rem  (96px)  - Large section gaps
32:  8rem  (128px) - Hero spacing
```

**Section Padding Pattern:**

```css
/* Standard section */
.section {
  @apply py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16;
}

/* Constrained content */
.container-content {
  @apply max-w-7xl mx-auto;
}

/* Narrow content (text-focused) */
.container-narrow {
  @apply max-w-3xl mx-auto;
}
```

### 3.4 Component Styles

#### Buttons

```css
/* Primary Button */
.btn-primary {
  @apply 
    inline-flex items-center justify-center
    px-6 py-3
    bg-forest-800 text-white
    font-body font-medium text-base
    rounded-lg
    transition-all duration-200
    hover:bg-forest-700 hover:shadow-lg hover:-translate-y-0.5
    focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2
    active:translate-y-0;
}

/* Secondary Button */
.btn-secondary {
  @apply
    inline-flex items-center justify-center
    px-6 py-3
    bg-transparent text-forest-800
    font-body font-medium text-base
    rounded-lg
    border-2 border-forest-800
    transition-all duration-200
    hover:bg-forest-800 hover:text-white
    focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2;
}

/* Ghost Button (for nav) */
.btn-ghost {
  @apply
    inline-flex items-center justify-center
    px-4 py-2
    text-neutral-700
    font-body font-medium text-base
    rounded-lg
    transition-colors duration-200
    hover:text-forest-700 hover:bg-forest-100;
}
```

#### Cards

```css
/* Standard Card */
.card {
  @apply
    bg-white
    rounded-2xl
    border border-neutral-200
    p-6 md:p-8
    shadow-sm
    transition-shadow duration-200
    hover:shadow-md;
}

/* Featured Card (dark background) */
.card-featured {
  @apply
    bg-forest-800
    text-white
    rounded-2xl
    p-6 md:p-8
    shadow-lg;
}

/* Stat Card */
.card-stat {
  @apply
    text-center
    p-6
    bg-warmgray
    rounded-xl;
}
```

#### Form Elements

```css
/* Input */
.input {
  @apply
    w-full
    px-4 py-3
    bg-white
    border border-neutral-300
    rounded-lg
    font-body text-base text-neutral-900
    placeholder:text-neutral-400
    transition-all duration-200
    focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20;
}

/* Select */
.select {
  @apply
    input
    appearance-none
    bg-[url('data:image/svg+xml,...')] bg-no-repeat bg-right-4;
}

/* Textarea */
.textarea {
  @apply
    input
    min-h-[120px]
    resize-y;
}

/* Label */
.label {
  @apply
    block
    font-body font-medium text-sm text-neutral-700
    mb-2;
}
```

### 3.5 Motion & Animation

**Principles:**
- Subtle, purposeful animations
- Page load: staggered fade-up reveals
- Hover states: gentle lifts and color transitions
- No excessive motion (respect reduced-motion preferences)

```css
/* Fade up on scroll */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.6s ease-out forwards;
}

/* Stagger delays */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

**Framer Motion Presets:**

```typescript
// src/lib/animations.ts
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 17 }
};
```

### 3.6 Iconography

**Icon Library:** Lucide React (consistent with aydi aesthetic)

**Common Icons Used:**

```typescript
import {
  Eye,           // "Blind" problem
  Clock,         // "Late" problem
  DollarSign,    // "Losing" problem
  Wrench,        // Installation
  MessageSquare, // Alerts
  BarChart3,     // ROI
  Phone,         // Contact
  Mail,          // Email
  MapPin,        // Location
  ChevronRight,  // Links
  ChevronDown,   // Accordions
  Globe,         // Language
  Menu,          // Mobile nav
  X,             // Close
  Check,         // Checkmarks
  ArrowRight,    // CTAs
  Thermometer,   // Temperature
  Droplets,      // Water/irrigation
  Leaf,          // Plants
  Shield,        // Protection
  TrendingUp,    // Performance
} from 'lucide-react';
```

**Icon Sizing:**

```css
/* In text */
.icon-inline { @apply w-4 h-4; }

/* Buttons */
.icon-btn { @apply w-5 h-5; }

/* Cards/Features */
.icon-feature { @apply w-8 h-8; }

/* Large decorative */
.icon-hero { @apply w-12 h-12; }
```

---

## 4. SITE ARCHITECTURE

### 4.1 Navigation Structure

```
greenlaniel.com/
├── Home (/)
├── Vita 1 (/vita-1)
├── About (/about)
├── Contact (/contact)
└── [Language: /es/* for Spanish versions]
```

### 4.2 URL Patterns (with i18n)

```
English (default):
/                    → Home
/vita-1              → Product page
/about               → About page
/contact             → Contact page

Spanish:
/es                  → Home (Spanish)
/es/vita-1           → Product page (Spanish)
/es/about            → About page (Spanish)
/es/contact          → Contact page (Spanish)
```

### 4.3 Page Hierarchy

| Page | Purpose | Primary CTA | Sections |
|------|---------|-------------|----------|
| Home | Convert visitors to calls | Schedule a Call | Hero, Stakes, ValueProp, Guide, Plan, CaseStudies, Explainer, FinalCTA |
| Vita 1 | Deep product information | Schedule a Call | Hero, Stakes, UseCases (tabs), Service, HowItWorks, Specs, CaseStudies, FAQ, FinalCTA |
| About | Build trust & credibility | Schedule a Call | Hero, Mauricio, FourBridges, Vivent, CTA |
| Contact | Capture leads | Form Submit | Hero, Form, Info |

---

## 5. COMPONENT LIBRARY

### 5.1 Layout Components

#### Navbar

```typescript
// src/components/layout/Navbar.tsx

interface NavbarProps {
  locale: 'en' | 'es';
}

/**
 * Fixed top navigation bar
 * 
 * Structure:
 * - Logo (left)
 * - Nav links (center/right): Vita 1, About, Contact
 * - Language toggle (right)
 * - CTA button (right)
 * 
 * Behavior:
 * - Transparent on hero, white bg on scroll
 * - Mobile: hamburger menu
 */
```

**Desktop Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  [LOGO]              Vita 1    About    Contact    [EN|ES]  [Schedule] │
└─────────────────────────────────────────────────────────────────────────┘
```

**Mobile Layout:**
```
┌───────────────────────────────────┐
│  [LOGO]                    [≡]   │
└───────────────────────────────────┘
```

#### Footer

```typescript
// src/components/layout/Footer.tsx

/**
 * Site footer
 * 
 * Structure:
 * - Logo + tagline
 * - Navigation links
 * - Contact info
 * - Social links (LinkedIn)
 * - Copyright + Vivent attribution
 */
```

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│  [LOGO]                                                                 │
│  Green Laniel                                                           │
│  The Bridge to Better Growing                                           │
│                                                                         │
│  Navigation          Contact              Follow Us                     │
│  Vita 1              info@greenlaniel.com [LinkedIn]                    │
│  About               North & South America                              │
│  Contact             English & Spanish                                  │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│  © 2026 Green Laniel. Exclusive distributor of Vivent technology.      │
└─────────────────────────────────────────────────────────────────────────┘
```

#### LanguageToggle

```typescript
// src/components/layout/LanguageToggle.tsx

/**
 * Language switcher
 * 
 * Design: Simple text toggle "EN | ES"
 * - Current language: bold/active state
 * - Other language: muted, clickable
 * - Preserves current path when switching
 */
```

### 5.2 Section Components

#### Hero

```typescript
// src/components/sections/Hero.tsx

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  backgroundImage: string;
  trustLogos?: { src: string; alt: string }[];
}

/**
 * Full-viewport hero section
 * 
 * Layout:
 * - Background: Static image with dark overlay
 * - Content: Left-aligned on desktop, centered on mobile
 * - Trust bar: Logo strip at bottom
 */
```

#### Stakes

```typescript
// src/components/sections/Stakes.tsx

interface StakesProps {
  heading: string;
  problems: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
  quote?: {
    text: string;
    attribution: string;
  };
}

/**
 * Problem/pain section (3-column)
 * 
 * Layout:
 * - Section heading
 * - 3 problem cards in row (stack on mobile)
 * - Optional quote below
 */
```

#### ValueProp

```typescript
// src/components/sections/ValueProp.tsx

interface ValuePropProps {
  heading: string;
  mockup: {
    image: string;
    alt: string;
    notification?: string;
  };
  benefits: {
    column: 'protectors' | 'optimizers';
    items: string[];
  }[];
  cta: { label: string; href: string };
}

/**
 * Value proposition section
 * 
 * Layout:
 * - Heading
 * - Phone mockup with notification
 * - Two-column benefit lists
 * - CTA button
 */
```

#### Guide

```typescript
// src/components/sections/Guide.tsx

interface GuideProps {
  heading: string;
  subheading: string;
  testimonial: {
    image: string;
    quote: string;
    name: string;
    title: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
}

/**
 * Credibility/guide section
 * 
 * Layout:
 * - Heading + subheading
 * - Testimonial card with photo
 * - Stats row (4 items)
 */
```

#### Plan

```typescript
// src/components/sections/Plan.tsx

interface PlanProps {
  heading: string;
  steps: {
    number: number;
    title: string;
    description: string;
  }[];
  cta: { label: string; href: string };
}

/**
 * Process/plan section (4 steps)
 * 
 * Layout:
 * - Heading
 * - 4 numbered steps with arrows between
 * - CTA button
 */
```

#### CaseStudyCarousel

```typescript
// src/components/sections/CaseStudyCarousel.tsx

interface CaseStudy {
  image: string;
  quote: string;
  summary: string;
  tags: { crop: string; size: string; useCase: string };
  ctaLabel: string;
}

interface CaseStudyCarouselProps {
  heading: string;
  studies: CaseStudy[];
}

/**
 * Carousel of case study cards
 * 
 * Layout:
 * - Section heading
 * - Carousel with left/right arrows
 * - Dot indicators
 * - Cards show image, quote, summary, tags
 */
```

#### Explainer

```typescript
// src/components/sections/Explainer.tsx

interface ExplainerProps {
  heading: string;
  diagram: string;
  paragraphs: string[];
  cta: { label: string; href: string };
}

/**
 * Technical explanation section
 * 
 * Layout:
 * - Heading
 * - Diagram/illustration
 * - Explanatory paragraphs
 * - CTA link
 */
```

#### Specs

```typescript
// src/components/sections/Specs.tsx

interface SpecsProps {
  heading: string;
  pricing: {
    year1: { price: string; includes: string[] };
    year2: { price: string; includes: string[] };
  };
  roiQuote: string;
  cta: { label: string; href: string };
}

/**
 * Pricing & specifications section
 * 
 * Layout:
 * - Heading
 * - Two pricing cards side by side
 * - ROI quote
 * - CTA button
 */
```

#### FAQ

```typescript
// src/components/sections/FAQ.tsx

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  heading: string;
  items: FAQItem[];
}

/**
 * Accordion FAQ section
 * 
 * Layout:
 * - Section heading
 * - Accordion items (expand/collapse)
 */
```

#### FinalCTA

```typescript
// src/components/sections/FinalCTA.tsx

interface FinalCTAProps {
  headline: string;
  subheadline: string;
  cta: { label: string; href: string };
  variant?: 'light' | 'dark';
}

/**
 * Final call-to-action banner
 * 
 * Layout:
 * - Full-width colored band
 * - Centered text + button
 * - Light variant: cream bg, dark text
 * - Dark variant: forest bg, white text
 */
```

### 5.3 UI Components

#### Button

```typescript
// src/components/ui/Button.tsx

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
}
```

#### Card

```typescript
// src/components/ui/Card.tsx

interface CardProps {
  variant?: 'default' | 'featured' | 'stat';
  padding?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}
```

#### Tab

```typescript
// src/components/ui/Tab.tsx

interface TabProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onChange: (id: string) => void;
}

interface TabPanelProps {
  id: string;
  activeTab: string;
  children: ReactNode;
}
```

#### Accordion

```typescript
// src/components/ui/Accordion.tsx

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: { title: string; content: ReactNode }[];
  allowMultiple?: boolean;
}
```

---

## 6. PAGE SPECIFICATIONS

### 6.1 HOME PAGE

#### Section Order
1. Navbar (fixed)
2. Hero
3. Stakes
4. Value Proposition
5. Guide
6. Plan
7. Case Studies Carousel
8. Explainer
9. Final CTA
10. Footer

#### Section 1: Hero

**Layout:** Full viewport height, image background with overlay

**Content (EN):**
```
Headline:     Your Plants Are Talking.
              Are You Listening?

Subheadline:  Catch stress 24-48 hours before visible symptoms.
              Protect your operation. Optimize your yields.

Primary CTA:  Schedule a Call
Secondary CTA: See How It Works (scrolls to Explainer)

Trust Logos:  Vivent | B-Corp | Agroscope | PepsiCo
```

**Content (ES):**
```
Headline:     Tus Plantas Están Hablando.
              ¿Las Estás Escuchando?

Subheadline:  Detecta el estrés 24-48 horas antes de los síntomas visibles.
              Protege tu operación. Optimiza tus rendimientos.

Primary CTA:  Agenda una Llamada
Secondary CTA: Ver Cómo Funciona
```

**Image:** Greenhouse interior with sensor visible on plant

---

#### Section 2: Stakes

**Layout:** Centered heading + 3-column cards + quote

**Content (EN):**
```
Heading: The Problem With How You Monitor Today

Card 1:
  Icon:  Eye (crossed out or muted)
  Title: You're Blind
  Text:  Environmental sensors show what's around your plants—not inside them.

Card 2:
  Icon:  Clock
  Title: You're Late
  Text:  By the time you SEE the problem, the damage is already done.

Card 3:
  Icon:  DollarSign
  Title: You're Losing
  Text:  One undetected stress event can cost more than your annual monitoring investment.

Quote: "I never know until it's too late."
Attribution: — What we hear from growers every week
```

**Content (ES):**
```
Heading: El Problema Con Tu Monitoreo Actual

Card 1:
  Icon:  Eye
  Title: Estás Ciego
  Text:  Los sensores ambientales muestran lo que hay alrededor de tus plantas—no dentro de ellas.

Card 2:
  Icon:  Clock
  Title: Llegas Tarde
  Text:  Cuando VES el problema, el daño ya está hecho.

Card 3:
  Icon:  DollarSign
  Title: Estás Perdiendo
  Text:  Un evento de estrés no detectado puede costar más que tu inversión anual en monitoreo.

Quote: "Nunca lo sé hasta que es demasiado tarde."
Attribution: — Lo que escuchamos de productores cada semana
```

---

#### Section 3: Value Proposition

**Layout:** Heading + phone mockup + two-column benefits + CTA

**Content (EN):**
```
Heading: What If Your Plants Could Text You?

Mockup Notification:
  "🌱 Alert: Cold stress detected in Zone 3.
   Plants experiencing 35°F. Equipment check recommended."

Left Column - FOR PROTECTORS:
  • Catch equipment failures before catastrophic loss
  • Detect invisible cold/heat stress
  • Prevent spoilage in storage

Right Column - FOR OPTIMIZERS:
  • Forecast stress events weeks in advance
  • Reduce input costs 30-50%
  • Improve quality consistency

CTA: Schedule a Call
```

**Content (ES):**
```
Heading: ¿Qué Pasaría Si Tus Plantas Pudieran Escribirte?

Mockup Notification:
  "🌱 Alerta: Estrés por frío detectado en Zona 3.
   Plantas a 2°C. Se recomienda revisar equipos."

Left Column - PARA PROTECTORES:
  • Detecta fallas de equipos antes de pérdidas catastróficas
  • Identifica estrés por frío/calor invisible
  • Previene deterioro en almacenamiento

Right Column - PARA OPTIMIZADORES:
  • Pronostica eventos de estrés con semanas de anticipación
  • Reduce costos de insumos 30-50%
  • Mejora la consistencia de calidad

CTA: Agenda una Llamada
```

---

#### Section 4: Guide

**Layout:** Heading + subheading + testimonial card + stats row

**Content (EN):**
```
Heading:    Swiss Precision. American Service.
Subheading: We're not another agtech company shipping you a box
            and wishing you luck. We're the bridge.

Testimonial:
  Photo: mauricio-field.jpg
  Quote: "I've spent 30 years in fields from Colombia to Canada.
          I know what growers need isn't more data—it's the
          right data, at the right time, in plain language."
  Name:  Mauricio Manotas
  Title: CEO, Green Laniel

Stats:
  1. "1,000+" / "European installations"
  2. "Validated with" / "Agroscope Switzerland"
  3. "Response in" / "hours, not days"
  4. "B-Corp" / "Certified"
```

**Content (ES):**
```
Heading:    Precisión Suiza. Servicio Americano.
Subheading: No somos otra empresa de agtech que te envía una caja
            y te desea suerte. Somos el puente.

Testimonial:
  Quote: "He pasado 30 años en campos desde Colombia hasta Canadá.
          Sé que los productores no necesitan más datos—necesitan
          los datos correctos, en el momento correcto, en lenguaje claro."
  Name:  Mauricio Manotas
  Title: CEO, Green Laniel

Stats:
  1. "1,000+" / "instalaciones europeas"
  2. "Validado con" / "Agroscope Suiza"
  3. "Respuesta en" / "horas, no días"
  4. "Certificación" / "B-Corp"
```

---

#### Section 5: Plan

**Layout:** Heading + 4 numbered steps + CTA

**Content (EN):**
```
Heading: Getting Started Is Simple

Step 1:
  Title: Schedule a Call
  Text:  We assess your fit together

Step 2:
  Title: Pilot Install
  Text:  We handle everything

Step 3:
  Title: Monitor Season
  Text:  Weekly check-ins

Step 4:
  Title: Review ROI
  Text:  Quantify value created

CTA: Schedule a Call
```

**Content (ES):**
```
Heading: Empezar Es Simple

Step 1:
  Title: Agenda una Llamada
  Text:  Evaluamos tu caso juntos

Step 2:
  Title: Instalación Piloto
  Text:  Nosotros nos encargamos de todo

Step 3:
  Title: Temporada de Monitoreo
  Text:  Revisiones semanales

Step 4:
  Title: Revisión de ROI
  Text:  Cuantificamos el valor creado

CTA: Agenda una Llamada
```

---

#### Section 6: Case Studies Carousel

**Layout:** Heading + horizontal carousel + dots

**Content (EN):**

```
Heading: Real Results From Real Growers

Card 1 - Texas Greenhouse:
  Image: texas-greenhouse.jpg
  Quote: "The heaters said 60°F. The plants were at 35°F."
  Summary: A Texas greenhouse caught an equipment malfunction
           that sensors missed—preventing catastrophic crop loss.
  Tags: Tomatoes | ~5-10ha | Equipment failure
  CTA: Request Full Case Study

Card 2 - Frito-Lay/PepsiCo:
  Image: potato-facility.jpg
  Quote: "We now forecast sprouting 2-3 weeks ahead."
  Summary: 30-50% reduction in anti-sprouting chemical costs,
           zero spoilage, confident delivery schedules.
  Tags: Potato Storage | Large facility | Forecasting
  CTA: Request Full Case Study

Card 3 - Colombia Blueberries:
  Image: colombia-blueberries.jpg
  Quote: "Calls every other day asking how to get Vita 1."
  Summary: Viral word-of-mouth from single installation;
           invited to national conference.
  Tags: Blueberries | ~5-10ha | Quality consistency
  CTA: Request Full Case Study
```

**Content (ES):**

```
Heading: Resultados Reales de Productores Reales

Card 1 - Invernadero en Texas:
  Quote: "Los calentadores marcaban 15°C. Las plantas estaban a 2°C."
  Summary: Un invernadero en Texas detectó una falla de equipo que
           los sensores no vieron—previniendo una pérdida catastrófica.
  Tags: Tomates | ~5-10ha | Falla de equipos

Card 2 - Frito-Lay/PepsiCo:
  Quote: "Ahora pronosticamos la brotación con 2-3 semanas de anticipación."
  Summary: Reducción del 30-50% en costos de químicos anti-brotación,
           cero deterioro, cronogramas de entrega confiables.
  Tags: Almacén de Papa | Gran instalación | Pronóstico

Card 3 - Arándanos Colombia:
  Quote: "Llamadas cada dos días preguntando cómo obtener Vita 1."
  Summary: Recomendación viral de boca en boca desde una sola instalación;
           invitados a conferencia nacional.
  Tags: Arándanos | ~5-10ha | Consistencia de calidad
```

---

#### Section 7: Explainer

**Layout:** Heading + diagram + paragraphs + link

**Content (EN):**
```
Heading: How Vita 1 Actually Works

Diagram: Simple flow showing sensor → plant → signal → phone

Paragraph 1:
Vita 1 measures what's happening INSIDE your plants—not around them.

Paragraph 2:
Traditional sensors tell you the air is 60°F. Vita 1 tells you your
plants are experiencing cold stress because the heater failed.
Traditional monitoring shows humidity is normal. Vita 1 catches the
water stress your plants feel before leaves show symptoms.

Paragraph 3:
It's the difference between knowing the weather forecast and knowing
how your body actually feels. Your plants now have a voice.

CTA Link: Learn More → (links to /vita-1)
```

**Content (ES):**
```
Heading: Cómo Funciona Vita 1 Realmente

Paragraph 1:
Vita 1 mide lo que está pasando DENTRO de tus plantas—no alrededor de ellas.

Paragraph 2:
Los sensores tradicionales te dicen que el aire está a 15°C. Vita 1 te dice
que tus plantas están experimentando estrés por frío porque el calentador falló.
El monitoreo tradicional muestra que la humedad es normal. Vita 1 detecta el
estrés hídrico que sienten tus plantas antes de que las hojas muestren síntomas.

Paragraph 3:
Es la diferencia entre conocer el pronóstico del tiempo y saber
cómo se siente realmente tu cuerpo. Tus plantas ahora tienen voz.

CTA Link: Saber Más →
```

---

#### Section 8: Final CTA

**Layout:** Full-width band, dark background, centered content

**Content (EN):**
```
Headline:    Stop Guessing. Start Listening.
Subheadline: Schedule a 15-minute call to see if Vita 1
             is right for your operation.
CTA:         Schedule a Call
```

**Content (ES):**
```
Headline:    Deja de Adivinar. Empieza a Escuchar.
Subheadline: Agenda una llamada de 15 minutos para ver si Vita 1
             es adecuado para tu operación.
CTA:         Agenda una Llamada
```

---

### 6.2 VITA 1 PRODUCT PAGE

#### Section Order
1. Navbar (fixed)
2. Hero (product-specific)
3. Stakes (environmental sensors blind spot)
4. Use Cases (tabbed: Greenhouses, Potato Storage, Open Field)
5. Service (we don't ship and wish luck)
6. How It Works (diagram)
7. Specs & Pricing
8. Case Studies Carousel (reuse)
9. FAQ
10. Final CTA
11. Footer

#### Section: Use Cases (Tabbed)

**Tabs:** Greenhouses | Potato Storage | Open Field (Berries)

**Tab 1 - Greenhouses (EN):**
```
Image: greenhouse interior with sensor

Title: GREENHOUSE / HIGH TUNNEL

Key Applications:
• Equipment failure detection (heaters, fans, irrigation)
• Cold/heat stress alerts before visible damage
• Irrigation optimization based on actual plant needs

Typical Setup: 8 sensors per hectare
Best For: Tomatoes, peppers, berries, cannabis

Featured Result:
"Sensors said 60°F. Plants experiencing 35°F for 10+ hours.
Caught heater failure before catastrophic loss."
— Texas Greenhouse
```

**Tab 2 - Potato Storage (EN):**
```
Image: potato storage facility

Title: POTATO STORAGE

Key Applications:
• Sprouting forecasting 2-3 weeks in advance
• Anti-sprouting chemical (ASC) optimization
• Confident shipping schedule planning

Typical Setup: 1-2 sensors per 2 hectares
Best For: Seed potatoes, processing potatoes, table stock

Featured Result:
"30-50% reduction in ASC costs. Zero spoilage.
We now ship with confidence."
— Frito-Lay/PepsiCo
```

**Tab 3 - Open Field Berries (EN):**
```
Image: berry field

Title: OPEN FIELD (BERRIES)

Key Applications:
• Humidity stress monitoring
• Pest pressure correlation
• Quality consistency for premium pricing

Typical Setup: 8 sensors per hectare
Best For: Blueberries, strawberries

Featured Result:
"Word spread so fast we get calls every other day.
Invited to present at national conference."
— Colombia Blueberry Grower
```

---

#### Section: Specs & Pricing

**Content (EN):**
```
Heading: Investment & Specifications

Card 1 - YEAR 1:
  Price: $7,000
  Includes:
  • Hardware (sensors + gateway)
  • 12-month data subscription
  • Professional installation
  • Training (1-2 hours)
  • Ongoing support

Card 2 - YEAR 2+:
  Price: $1,000/year
  Includes:
  • Data subscription
  • Ongoing support
  • Software updates
  
  Note: Hardware lifespan: 3-4 seasons

Quote: "What did your last undetected stress event cost you?
        Vita 1 pays for itself with one save."

CTA: Schedule a Call
```

---

#### Section: FAQ

**Questions & Answers (EN):**

```
Q: I already have soil and temperature sensors. Why do I need Vita 1?
A: Environmental sensors show what's AROUND plants. Vita 1 shows what's
   INSIDE. In Texas, sensors said 60°F—plants were experiencing 35°F
   because the heater failed. That's the gap Vita 1 fills.

Q: How do I know it works for my specific crop?
A: We only deploy for validated crops. If you're growing berries, tomatoes,
   peppers, or storing potatoes, we have proven results. For other crops,
   we'll be honest about what we know and offer a pilot if there's potential.

Q: Is it complicated to use?
A: We install it. Alerts come in plain English text messages. Training
   takes 1-2 hours. If you can read a text, you can use Vita 1.

Q: What's the ROI?
A: One prevented disaster typically exceeds the annual investment. A Texas
   greenhouse saved a crop worth far more than $7K. Frito-Lay reduced
   chemical costs 30-50%. We'll calculate your specific ROI potential
   on our call.

Q: Can I try it before committing?
A: Yes. We offer pilot installations (2-4 sensors, one season). If Vita 1
   doesn't catch stress you wouldn't have seen otherwise, you'll know.
```

---

### 6.3 ABOUT PAGE

#### Section Order
1. Navbar
2. Hero (We Are The Bridge)
3. Mauricio Section
4. Four Bridges
5. Vivent Partnership
6. CTA
7. Footer

**Content - Mauricio Section (EN):**
```
Image: mauricio-field.jpg (large)

Name: MAURICIO MANOTAS, CEO

Bio: 30 years in agriculture across North America, Latin America, and
     Europe. From the flower fields of Colombia to greenhouses in Canada.
     Bilingual. Field-tested in 35°C and -10°C.

Quote: "I've seen too many growers buy expensive equipment that ends up
        collecting dust because no one helped them actually use it.
        That's not how we work."
```

**Content - Four Bridges (EN):**
```
Heading: The Four Bridges We Serve

Bridge 1 - Technology:
  From: Swiss lab precision
  To:   Muddy field reality

Bridge 2 - Culture:
  From: European engineering
  To:   North American pragmatism

Bridge 3 - Generational:
  From: "Grandpa's way"
  To:   Data-driven decisions

Bridge 4 - Service:
  From: European product
  To:   American response times
```

**Content - Vivent Partnership (EN):**
```
Heading: Our Technology Partner: Vivent

Logo: vivent.svg

Text: Vivent Biosignals is the world leader in plant electrophysiology,
      headquartered in Switzerland. 1,000+ installations across Europe.
      Validated with Agroscope (Swiss federal agricultural research).
      B-Corp certified.

      Green Laniel is the exclusive Americas distributor, providing
      localized installation, training, and support.
```

---

### 6.4 CONTACT PAGE

#### Layout
- Two-column on desktop (form left, info right)
- Stacked on mobile (info then form)

**Content (EN):**
```
Heading: Let's Talk

Subheading: Schedule a 15-minute call to see if Vita 1 is right
            for your operation.

Form Fields:
- Name* (text input)
- Email* (email input)
- Operation Type (dropdown: Greenhouse, High Tunnel, Potato Storage, Open Field, Other)
- Primary Crop (text input)
- Hectares (text input)
- Message (textarea)
- Submit button: "Send Message"

Info Panel:
  Email: info@greenlaniel.com
  Serving: North & South America
  Languages: English & Spanish

Note: We respond within 24 hours. Usually much faster.
```

**Content (ES):**
```
Heading: Hablemos

Subheading: Agenda una llamada de 15 minutos para ver si Vita 1
            es adecuado para tu operación.

Form Fields:
- Nombre* 
- Correo Electrónico*
- Tipo de Operación (Invernadero, Túnel Alto, Almacén de Papa, Campo Abierto, Otro)
- Cultivo Principal
- Hectáreas
- Mensaje
- Botón: "Enviar Mensaje"

Info Panel:
  Correo: info@greenlaniel.com
  Servicio: Norte y Sur América
  Idiomas: Inglés y Español

Note: Respondemos en menos de 24 horas. Usualmente mucho más rápido.
```

---

## 7. INTERNATIONALIZATION (EN / ES)

### 7.1 Implementation with next-intl

**File Structure:**
```
/src/messages/
├── en.json
└── es.json
```

### 7.2 Message Keys Structure

```json
// src/messages/en.json
{
  "nav": {
    "vita1": "Vita 1",
    "about": "About",
    "contact": "Contact",
    "cta": "Schedule a Call"
  },
  "home": {
    "hero": {
      "headline": "Your Plants Are Talking.\nAre You Listening?",
      "subheadline": "Catch stress 24-48 hours before visible symptoms. Protect your operation. Optimize your yields.",
      "primaryCta": "Schedule a Call",
      "secondaryCta": "See How It Works"
    },
    "stakes": {
      "heading": "The Problem With How You Monitor Today",
      "blind": {
        "title": "You're Blind",
        "text": "Environmental sensors show what's around your plants—not inside them."
      },
      "late": {
        "title": "You're Late",
        "text": "By the time you SEE the problem, the damage is already done."
      },
      "losing": {
        "title": "You're Losing",
        "text": "One undetected stress event can cost more than your annual monitoring investment."
      },
      "quote": "\"I never know until it's too late.\"",
      "quoteAttribution": "— What we hear from growers every week"
    },
    // ... continue for all sections
  },
  "vita1": {
    // Product page content
  },
  "about": {
    // About page content
  },
  "contact": {
    // Contact page content
  },
  "footer": {
    "tagline": "The Bridge to Better Growing",
    "copyright": "© 2026 Green Laniel. All rights reserved.",
    "viventNote": "Exclusive distributor of Vivent Biosignals technology in The Americas."
  }
}
```

### 7.3 Language Detection & Routing

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed' // Only add /es/ prefix for Spanish
});

export const config = {
  matcher: ['/', '/(en|es)/:path*']
};
```

---

## 8. ASSETS CHECKLIST

### 8.1 Images Required

| Asset | Description | Dimensions | Notes |
|-------|-------------|------------|-------|
| `hero-greenhouse.jpg` | Greenhouse interior with visible sensor | 1920x1080 min | Dark enough for text overlay |
| `vita1-sensor.jpg` | Close-up of Vita 1 sensor on plant | 800x600 | Product shot |
| `mauricio-field.jpg` | Mauricio in agricultural setting | 800x800 | Professional but approachable |
| `texas-greenhouse.jpg` | Greenhouse interior | 800x600 | Case study |
| `potato-facility.jpg` | Potato storage facility | 800x600 | Case study |
| `colombia-blueberries.jpg` | Blueberry field/plants | 800x600 | Case study |
| `phone-mockup.png` | iPhone showing notification | 400x800 | Can be created digitally |
| `diagram-how-it-works.svg` | Sensor → plant → signal → phone flow | Vector | Create in design tool |

### 8.2 Logos Required

| Logo | Format | Notes |
|------|--------|-------|
| `green-laniel.svg` | SVG | Primary logo, horizontal |
| `green-laniel-icon.svg` | SVG | Icon only (for favicon, mobile) |
| `vivent.svg` | SVG | Partner logo |
| `b-corp.svg` | SVG | Certification badge |
| `agroscope.svg` | SVG | Partner logo |
| `pepsico.svg` | SVG | Customer logo (get permission) |

### 8.3 Fonts (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display&display=swap" rel="stylesheet">
```

---

## 9. IMPLEMENTATION NOTES

### 9.1 SEO Considerations

```typescript
// Each page should have unique metadata
export const metadata: Metadata = {
  title: 'Green Laniel | Plant Biosignal Monitoring',
  description: 'Catch plant stress 24-48 hours before visible symptoms. Swiss precision, American service.',
  openGraph: {
    title: 'Green Laniel | Plant Biosignal Monitoring',
    description: 'Your plants are talking. Are you listening?',
    images: ['/og-image.jpg'],
  },
};
```

### 9.2 Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

### 9.3 Accessibility Requirements

- WCAG 2.1 AA compliance
- All images have alt text
- Color contrast ratios meet standards
- Keyboard navigation works
- Focus states visible
- Reduced motion support

### 9.4 Form Submission

**Option 1: Formspree**
```html
<form action="https://formspree.io/f/{form-id}" method="POST">
```

**Option 2: Netlify Forms**
```html
<form name="contact" netlify>
```

### 9.5 Analytics

Recommend adding:
- Google Analytics 4 (or Plausible for privacy)
- Event tracking for:
  - CTA clicks
  - Form submissions
  - Language toggles
  - Case study requests

### 9.6 Deployment Checklist

- [ ] Environment variables set (form endpoints)
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Redirects configured (www → non-www)
- [ ] 404 page created
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Google Search Console verified
- [ ] Analytics installed

---

## APPENDIX: CONTENT SUMMARY BY PAGE

### Quick Reference - All CTAs

| Page | Section | CTA Text (EN) | CTA Text (ES) | Destination |
|------|---------|---------------|---------------|-------------|
| Home | Hero | Schedule a Call | Agenda una Llamada | /contact |
| Home | Hero Secondary | See How It Works | Ver Cómo Funciona | #explainer |
| Home | Value Prop | Schedule a Call | Agenda una Llamada | /contact |
| Home | Plan | Schedule a Call | Agenda una Llamada | /contact |
| Home | Explainer | Learn More → | Saber Más → | /vita-1 |
| Home | Final CTA | Schedule a Call | Agenda una Llamada | /contact |
| Vita 1 | Hero | Schedule a Call | Agenda una Llamada | /contact |
| Vita 1 | Specs | Schedule a Call | Agenda una Llamada | /contact |
| Vita 1 | Final CTA | Schedule a Call | Agenda una Llamada | /contact |
| About | CTA | Schedule a Call | Agenda una Llamada | /contact |
| Contact | Form | Send Message | Enviar Mensaje | Form submit |

---

*Document Version: 1.0*
*Last Updated: January 28, 2026*
*Ready for Claude Code implementation*
