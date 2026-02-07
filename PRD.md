# Product Requirements Document (PRD)
## The 100-Year Pulse - Landing Page

**Versi:** 1.0  
**Tanggal:** 8 Februari 2026  
**Status:** Draft  
**Platform Target:** Nuxt 3 + Vue 3 + Tailwind CSS + Nuxt UI

---

## 1. Executive Summary

### 1.1 Visi Produk
**The 100-Year Pulse** adalah sebuah ebook premium yang menggabungkan sains biokimia molekuler dengan filosofi Ikigai untuk memberikan roadmap komprehensif bagi individu yang ingin mengoptimalkan usia biologis mereka. Landing page ini berfungsi sebaSgai gateway utama untuk konversi pengunjung menjadi pembeli di pasar Amerika Utara dan Eropa.

### 1.2 Masalah yang Diselesaikan
Mayoritas content longevity di internet bersifat:
- Terlalu ilmiah hingga tidak actionable
- Terlalu simplistik hingga tidak credible
- Tidak mengintegrasikan aspek mental/emotional (purpose/ikigai)
- Tidak memiliki guidance yang personalizable untuk individu

### 1.3 Solusi yang Ditawarkan
Ebook ini menyediakan:
- Framework berbasis 4 pillar science-backed (mitochondrial, biochemistry, neuro-architecture, epigenetics)
- Pendekatan hybrid: molecular science + Ikigai philosophy
- Actionable protocols yang bisa langsung diterapkan
- Lifetime access dengan update saat research baru muncul

### 1.4 Target Metrics
| Metric | Target | Notes |
|--------|--------|-------|
| Conversion Rate | 3-5% | Above industry average (2.5%) |
| Page Load Speed | <2.5s | Core Web Vitals priority |
| Mobile Conversion | >40% | Majority traffic dari mobile |
| Avg. Time on Page | 4+ min | Indicator of engagement |
| Bounce Rate | <50% | Healthy engagement |

---

## 2. Product Overview

### 2.1 Identitas Buku

| Attribute | Value |
|-----------|-------|
| **Judul** | The 100-Year Pulse |
| **Subtitle** | Molecular Longevity Meets the Art of Purposeful Living |
| **Konsep** | Perpaduan biokimia molekuler (sains) dengan filosofi Ikigai (psikologi) untuk memperpanjang usia biologis |
| **Format** | Digital Ebook (PDF + EPUB + Audio) |
| **Harga** | $29-39 USD (Mid-tier) |
| **Target Market** | USA & Europe (High-End, Data-Driven Consumers) |

### 2.2 Empat Pilar Utama

#### Pilar 1: Mitochondrial Reset
- **Fokus:** Cellular autophagy & energy optimization
- **Scientific Proof:** Yoshinori Ohsumi (Autophagy Mechanism - Nobel Prize 2016)
- **Value Prop:** Reset sistem energi seluler untuk mencegah accelerated aging

#### Pilar 2: Chemical Synergy
- **Fokus:** Nutritional biochemistry & anti-inflammatory food signaling
- **Scientific Proof:** Cell Metabolism Journal research
- **Value Prop:** Memahami bagaimana makanan "berbicara" dengan gen kita

#### Pilar 3: Neuro-Architecture of Purpose
- **Fokus:** Cortisol regulation & Telomere protection through Ikigai
- **Scientific Proof:** Elizabeth Blackburn (Telomere Research - Nobel Prize 2009)
- **Value Prop:** Purpose sebagai biological intervention untuk longevity

#### Pilar 4: Epigenetic Lifestyle
- **Fokus:** Circadian rhythm & environmental gene activation
- **Scientific Proof:** Harvard Medical School Longevity Studies
- **Value Prop:** Mengontrol environmental factors yang mengaktifkan/menonaktifkan gen

### 2.3 Perspektif Unik (Unique Selling Proposition)
Tidak seperti ebook longevity lain yang fokus pada satu aspek (hanya diet, hanya exercise, atau hanya meditation), **The 100-Year Pulse** menawarkan:
- **Integrated Framework:** M + C + N + E = Complete Longevity System
- **East Meets West:** Scientific validation + Ancient wisdom (Ikigai)
- **Biochemistry to Behavior:** Dari molecular level hingga daily habits

---

## 3. Target Audience

### 3.1 Primary Persona: "The Optimizing Professional"

| Attribute | Demografi & Psychografi |
|-----------|------------------------|
| **Usia** | 32-52 tahun |
| **Profesi** | Tech executives, Founders, Healthcare professionals, Successful freelancers |
| **Pendapatan** | $80,000 - $250,000 annually |
| **Pendidikan** | Bachelor's degree minimum, many with advanced degrees |
| **Location** | Tier 1 cities: NYC, SF, LA, London, Berlin, Amsterdam |
| **Pain Points** | Feeling "busy but unproductive", Wanting to perform at peak but experiencing burnout, Interested in biohacking but overwhelmed by conflicting information |
| **Aspirations** | Live to 100 with quality, Maintain cognitive clarity, Outperform peers biologically |
| **Buying Behavior** | Research-heavy, Value premium quality, Trust experts over influencers, Willing to pay for convenience and credibility |
| **Media Consumption** | Podcasts (Huberman, FoundMyFitness), Twitter/X, LinkedIn, Substack, YouTube (long-form) |

### 3.2 Secondary Persona: "The Bio-Curious Achiever"

| Attribute | Demografi & Psychografi |
|-----------|------------------------|
| **Usia** | 25-38 tahun |
| **Profesi** | Mid-level managers, Graduate students, Aspiring entrepreneurs |
| **Pendapatan** | $50,000 - $100,000 annually |
| **Location** | Major metros globally |
| **Pain Points** | Just starting to think about longevity, Wants foundation before spending on supplements/tech, Skeptical but open-minded |
| **Aspirations** | Get ahead of the curve, Build habits now for long-term, Validate claims before investing |
| **Buying Behavior** | Looks for social proof, Values free content as trial, Influenced by community |

### 3.3 Audience Motivations

| Motivation | Priority |
|------------|----------|
| **Longevity Data Credibility** | High - Want science-backed, not snake oil |
| **Actionable Framework** | High - Tired of information overload |
| **Holistic Approach** | Medium - Want body + mind integration |
| **Community/Validation** | Medium - Want to know others are doing this |
| **Investment in Self** | High - View health as ROI |

### 3.4 Objections to Address

| Objection | Mitigation Strategy |
|-----------|-------------------|
| "Another wellness scam?" | Author credibility, scientific citations, free preview/chapter |
| "Too expensive for an ebook" | Value stacking (PDF+EPUB+Audio+Updates), ROI framing |
| "I already know most of this" | Depth guarantee, advanced protocols included |
| "Too scientific/complex" | Accessible writing style, visuals, summaries |
| "Not sure it works for me" | Case studies, testimonials, money-back guarantee |

---

## 4. Design System & UI/UX

### 4.1 Design Philosophy: "Human-Centric Data"

Pendekatan desain ini menyeimbangkan:
- **Data-Driven:** Scientific credibility melalui visualisasi data
- **Human-Centric:** Accessible, warm, tidak intimidating
- **Modern Premium:** Clean aesthetic yang menyampaikan high-value product

**Anti-Patterns yang DIHINDARI:**
- ❌ Purple/blue gradients on white backgrounds (AI slop aesthetic)
- ❌ Generic fonts (Inter, Roboto, Arial)
- ❌ Predictable hero-CTA-features-testimonials templates
- ❌ Generic geometric shapes atau abstract blobs
- ❌ Stock-looking imagery

### 4.2 Color Palette

```css
:root {
  /* Background */
  --color-background: #EFF6FF;        /* Light blue - clean, scientific feel */
  
  /* Primary */
  --color-primary: #1E40AF;            /* Deep blue - trust, science, authority */
  --color-primary-light: #3B82F6;     /* Bright blue - accents, links */
  --color-primary-dark: #1E3A8A;      /* Darker blue - footer, secondary text */
  
  /* Accent */
  --color-accent: #F472B6;            /* Pink - warmth, humanity, approachability */
  --color-accent-light: #F9A8D4;      /* Light pink - hover states */
  
  /* Text */
  --color-text-main: #1E293B;         /* Slate - readable, softer than black */
  --color-text-muted: #64748B;        /* Muted text for subheaders */
  --color-text-inverse: #FFFFFF;      /* White text on dark backgrounds */
  
  /* UI Elements */
  --color-ui-white: #FFFFFF;          /* Card backgrounds */
  --color-border: #CBD5E1;             /* Subtle borders */
  --color-success: #10B981;            /* Trust signals */
  --color-warning: #F59E0B;            /* Urgency elements */
}
```

**Color Psychology:**
- **Blue (#1E40AF):** Science, trust, medical authority - sesuai dengan positioning sebagai science-backed guide
- **Pink (#F472B6):** Warmth, humanity, emotion - menambahkan warmth untuk balance dengan science
- **Light Blue Background:** Clean, clinical yet welcoming, tidak sterile

### 4.3 Typography

```css
:root {
  /* Headings */
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-weight-bold: 800;
  --font-weight-semibold: 700;
  
  /* Body */
  --font-body: 'Outfit', sans-serif;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  
  /* Usage */
  --heading-line-height: 1.1;
  --body-line-height: 1.6;
  --letter-spacing-heading: -0.02em;
  --letter-spacing-body: 0;
}
```

**Typography Hierarchy:**

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| H1 Hero | Plus Jakarta Sans | 56-72px | 800 | #1E293B |
| H2 Section | Plus Jakarta Sans | 36-48px | 800 | #1E293B |
| H3 Subsection | Plus Jakarta Sans | 24-32px | 700 | #1E293B |
| Body Large | Outfit | 20px | 400 | #1E293B |
| Body Normal | Outfit | 16px | 400 | #1E293B |
| Body Small | Outfit | 14px | 400 | #64748B |
| Caption | Outfit | 12px | 500 | #64748B |

**Why This Pairing:**
- **Plus Jakarta Sans:** Modern geometric dengan humanist touches - bold impact untuk headlines, tetap friendly
- **Outfit:** Highly readable, contemporary, excellent screen rendering - perfect untuk body text panjang

### 4.4 Shape & Spacing System

```css
:root {
  /* Border Radius - Super Rounded */
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;      /* Primary cards */
  --radius-xl: 32px;      /* Hero containers */
  --radius-full: 9999px; /* Buttons, pills */
  
  /* Shadows - Soft Indigo */
  --shadow-sm: 0 1px 2px rgba(30, 64, 175, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(30, 64, 175, 0.1), 0 2px 4px -1px rgba(30, 64, 175, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(30, 64, 175, 0.1), 0 4px 6px -2px rgba(30, 64, 175, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(30, 64, 175, 0.1), 0 10px 10px -5px rgba(30, 64, 175, 0.04);
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
}
```

### 4.5 Component States

**Button Primary:**
- Default: Primary Blue background, White text, Rounded-full
- Hover: Slight lift (translateY -2px), Primary Dark Blue
- Active: Press down (translateY 0)
- Focus: Ring outline, Accent Pink

**Button Secondary:**
- Default: White background, Primary Blue border + text
- Hover: Light Blue background
- Active: Slightly darker

**Cards:**
- Default: White background, Rounded-lg, Shadow-md
- Hover: Shadow-lg, Slight scale up (1.02)
- Active: Scale down slightly

**Micro-interaction: Bio-Feedback Pulse:**
- CTA buttons have subtle pulsing animation (3s loop)
- Mimics "heartbeat" - reinforces biological theme
- Rate: 60 BPM equivalent visual pulse

### 4.6 Visual Assets Requirements

| Asset Type | Description | Format |
|------------|-------------|--------|
| Book Cover 3D | Premium 3D render with depth | PNG with transparency |
| Author Photo | Professional headshot | High-res JPG |
| Pillars Icons | Custom icons per pillar (mitochondria, molecules, brain, DNA) | SVG |
| Scientific Diagrams | DNA helix, cellular processes | Animated SVG preferred |
| Social Proof Badges | "As seen in", Logos | SVG |
| Background Textures | Grainy overlay SVG | SVG |
| Pattern Assets | Subtle floating DNA/anatomy | SVG with low opacity |

---

## 5. Technical Requirements

### 5.1 Tech Stack

```json
{
  "framework": "Nuxt 3.14+",
  "language": "TypeScript 5.x",
  "ui_library": "Nuxt UI 2.x (Hero UI based)",
  "styling": "Tailwind CSS 4.x",
  "animations": "GSAP + ScrollTrigger",
  "state_management": "Pinia (built-in Nuxt)",
  "fonts": "@nuxtjs/google-fonts"
}
```

### 5.2 Required Nuxt Modules

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],
  
  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': [400, 500, 700, 800],
      'Outfit': [300, 400, 500, 600]
    },
    display: 'swap',
    preload: true
  },
  
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: false
  },
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1E40AF' }
      ]
    }
  }
})
```

### 5.3 Nuxt UI Configuration

```typescript
// tailwind.config.js (extended for Nuxt UI)
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF', // Primary Blue
          900: '#1E3A8A',
          950: '#172554'
        },
        accent: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6', // Accent Pink
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D'
        }
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Outfit', 'sans-serif']
      },
      borderRadius: {
        'super': '24px'
      }
    }
  }
}
```

### 5.4 Page Architecture

```
src/
├── app.vue                    # Root component
├── assets/
│   ├── css/
│   │   └── tailwind.css       # Tailwind imports + custom utilities
│   └── images/                # Static images
├── components/
│   ├── global/                # Reusable UI components
│   │   ├── UButton.vue
│   │   ├── UCard.vue
│   │   ├── UBadge.vue
│   │   └── UIcon.vue
│   ├── sections/              # Page sections
│   │   ├── TheHeader.vue
│   │   ├── TheHero.vue
│   │   ├── TheProblem.vue
│   │   ├── TheFourPillars.vue
│   │   ├── TheAuthor.vue
│   │   ├── TheSocialProof.vue
│   │   ├── ThePricing.vue
│   │   ├── TheFAQ.vue
│   │   ├── TheNewsletter.vue
│   │   └── TheFooter.vue
│   └── interactive/           # Interactive components
│       ├── AgeCalculator.vue
│       └── PulseAnimation.vue
├── composables/               # Vue composables
│   ├── useIntersectionObserver.ts
│   └── useScrollAnimation.ts
├── layouts/
│   └── default.vue
├── pages/
│   └── index.vue              # Main landing page
├── public/
│   ├── robots.txt
│   └── sitemap.xml
└── nuxt.config.ts
```

### 5.5 Animation Specifications

#### Page Load Sequence (Orchestrated Reveal)

```typescript
// Animation timeline (staggered)
const pageLoadAnimations = [
  { element: '.hero-title', delay: 0, duration: 800, easing: 'power3.out' },
  { element: '.hero-subtitle', delay: 100, duration: 600, easing: 'power2.out' },
  { element: '.hero-cta', delay: 200, duration: 400, easing: 'back.out(1.7)' },
  { element: '.hero-visual', delay: 150, duration: 1000, easing: 'power2.out' },
  { element: '.section-pillar', delay: 400, stagger: 150, duration: 600 }
];
```

#### Scroll Interactions (ScrollTrigger)

| Section | Trigger | Animation | Parallax Speed |
|---------|---------|-----------|----------------|
| Hero | When 20% in viewport | Fade in up | 0.2 |
| Pillars | When 30% in viewport | Stagger reveal | 0.15 |
| Diagrams | Continuous scroll | Parallax movement | 0.3 |
| Footer | When 80% in viewport | Fade in | 0.1 |

#### Micro-interactions

```css
/* CTA Button Pulse - Bio-feedback vibe */
@keyframes bio-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(30, 64, 175, 0.4);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(30, 64, 175, 0);
  }
}

.cta-pulse {
  animation: bio-pulse 2s infinite;
}

/* Hover state dengan magnetic effect */
.btn-cta {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-cta:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(30, 64, 175, 0.2);
}
```

#### Background Ambient Motion

```css
/* Floating DNA/Anatomy outline */
.bg-parallax {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.parallax-layer {
  position: absolute;
  opacity: 0.05;
  will-change: transform;
}

/* Grainy texture overlay */
.texture-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.4;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
```

### 5.6 Performance Requirements

| Metric | Target | Implementation |
|--------|--------|----------------|
| **LCP (Largest Contentful Paint)** | <2.5s | Optimized images, critical CSS inlined |
| **CLS (Cumulative Layout Shift)** | <0.1 | Defined aspect ratios, skeleton loading |
| **FID (First Input Delay)** | <100ms | Minimal JS, defer non-critical |
| **TTFB (Time to First Byte)** | <800ms | Edge deployment (Vercel/Netlify) |
| **Total Blocking Time** | <200ms | Code splitting, lazy loading |

**Optimization Strategies:**
- Dynamic imports untuk heavy components (Age Calculator)
- WebP format untuk images
- SVG inline untuk icons
- GSAP loaded only on client
- Nuxt Image optimization

### 5.7 SEO Requirements

```typescript
// useHead composable for each page
useHead({
  title: 'The 100-Year Pulse | Molecular Longevity Meets Purpose',
  meta: [
    { name: 'description', content: 'Master the science of longevity with The 100-Year Pulse. A comprehensive guide combining molecular biochemistry with Ikigai philosophy to extend your biological lifespan.' },
    { name: 'keywords', content: 'longevity, biohacking, molecular biology, ikigai, anti-aging, health optimization, telomeres, autophagy' },
    { property: 'og:title', content: 'The 100-Year Pulse | Live Better, Longer' },
    { property: 'og:description', content: 'Science-backed longevity framework combining mitochondrial optimization with purpose-driven living.' },
    { property: 'og:image', content: '/images/og-cover.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: 'https://the100yearpulse.com' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Book',
        name: 'The 100-Year Pulse',
        author: {
          '@type': 'Person',
          name: '[Author Name]'
        },
        publisher: {
          '@type': 'Organization',
          name: 'The 100-Year Pulse'
        },
        description: 'Molecular Longevity Meets the Art of Purposeful Living',
        offers: {
          '@type': 'Offer',
          price: '29.00',
          priceCurrency: 'USD'
        }
      })
    }
  ]
})
```

---

## 6. Page Sections

### 6.1 Navigation (Sticky Header)

```vue
<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
          :class="scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'">
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-heading font-bold text-primary-800">
        The 100-Year Pulse
      </NuxtLink>
      
      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#pillars" class="text-sm font-body text-text-muted hover:text-primary-600 transition">
          The Framework
        </a>
        <a href="#author" class="text-sm font-body text-text-muted hover:text-primary-600 transition">
          Author
        </a>
        <a href="#testimonials" class="text-sm font-body text-text-muted hover:text-primary-600 transition">
          Results
        </a>
        <UButton size="lg" color="primary" class="cta-pulse">
          Get the Book
        </UButton>
      </div>
      
      <!-- Mobile Menu Toggle -->
      <UButton icon="i-heroicons-bars-3" color="gray" variant="ghost" @click="isOpen = true" />
    </nav>
  </header>
</template>
```

**Specs:**
- Fixed position dengan blur backdrop saat scroll
- Logo: Text-based, bold, primary color
- CTA Button: Primary Blue dengan pulse animation
- Mobile: Slide-out drawer menu

### 6.2 Hero Section

```vue
<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-b from-light-blue via-white to-light-blue" />
    <div class="absolute inset-0 bg-parallax">
      <img src="/images/dna-outline.svg" class="parallax-layer" data-speed="0.2" alt="" />
    </div>
    
    <div class="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <div class="space-y-8 hero-content">
        <UBadge color="primary" variant="subtle" size="lg">
          Science-Backed Longevity Framework
        </UBadge>
        
        <h1 class="hero-title text-5xl lg:text-7xl font-heading font-bold leading-tight">
          <span class="text-text-main">Live Longer.</span>
          <br />
          <span class="text-primary-800">Live Better.</span>
          <br />
          <span class="text-accent-500">Live With Purpose.</span>
        </h1>
        
        <p class="hero-subtitle text-xl font-body text-text-muted max-w-xl">
          Master the science of biological aging with the first framework that combines 
          <span class="text-primary-600 font-semibold">molecular biochemistry</span> 
          with the Japanese philosophy of 
          <span class="text-primary-600 font-semibold">Ikigai</span>.
        </p>
        
        <div class="hero-cta flex flex-col sm:flex-row gap-4">
          <UButton size="xl" color="primary" class="cta-pulse">
            Start Reading Now - $29
          </UButton>
          <UButton size="xl" variant="outline" color="gray">
            Download Free Chapter
          </UButton>
        </div>
        
        <!-- Trust Signals -->
        <div class="flex items-center gap-6 pt-4">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-success" />
            <span class="text-sm font-body text-text-muted">30-Day Guarantee</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-globe-alt" class="w-5 h-5 text-primary-600" />
            <span class="text-sm font-body text-text-muted">Instant Digital Delivery</span>
          </div>
        </div>
      </div>
      
      <!-- 3D Book Visual -->
      <div class="hero-visual relative">
        <div class="aspect-[3/4] max-w-md mx-auto relative">
          <img src="/images/book-3d-cover.png" alt="The 100-Year Pulse Book Cover" 
               class="w-full h-auto drop-shadow-2xl rotate-y-12" />
          <!-- Floating pill badge -->
          <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center">
              <UIcon name="i-heroicons-book-open" class="w-6 h-6 text-accent-600" />
            </div>
            <div>
              <p class="text-xs font-body text-text-muted">Pages</p>
              <p class="font-bold font-heading text-text-main">320+ Pages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

**Hero Hook Concepts:**
1. **The "What If" Hook:** "What if you could add 20 quality years to your life?"
2. **The Contrast Hook:** "Silicon Valley executives have access to the best longevity protocols. Now you do too."
3. **The Authority Hook:** "Based on Nobel Prize-winning research on autophagy and telomeres."

### 6.3 Problem/Solution Narrative

```vue
<template>
  <section id="problem" class="py-24 bg-white relative">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-4xl lg:text-5xl font-heading font-bold mb-8">
        The Longevity Industry is <span class="text-accent-500">Broken</span>
      </h2>
      
      <div class="grid md:grid-cols-3 gap-8 mt-16">
        <UCard class="p-8 rounded-2xl">
          <UIcon name="i-heroicons-beaker" class="w-12 h-12 text-primary-600 mb-4" />
          <h3 class="text-xl font-heading font-bold mb-2">Too Scientific</h3>
          <p class="text-text-muted font-body">Research papers that never translate into real life advice.</p>
        </UCard>
        
        <UCard class="p-8 rounded-2xl">
          <UIcon name="i-heroicons-sparkles" class="w-12 h-12 text-accent-500 mb-4" />
          <h3 class="text-xl font-heading font-bold mb-2">Too Simplistic</h3>
          <p class="text-text-muted font-body">"Drink more water" advice that ignores molecular mechanisms.</p>
        </UCard>
        
        <UCard class="p-8 rounded-2xl">
          <UIcon name="i-heroicons-face-frown" class="w-12 h-12 text-primary-800 mb-4" />
          <h3 class="text-xl font-heading font-bold mb-2">Too Hollow</h3>
          <p class="text-text-muted font-body">Optimization without purpose leads to longer but meaningless lives.</p>
        </UCard>
      </div>
      
      <div class="mt-16 p-8 bg-light-blue rounded-3xl">
        <p class="text-2xl font-body leading-relaxed">
          <span class="font-bold text-primary-800">The 100-Year Pulse</span> bridges the gap between 
          <span class="italic">Nobel Prize-winning science</span> and <span class="italic">ancient wisdom</span>. 
          We don't just help you live longer—we help you live with <span class="font-bold">purpose</span>.
        </p>
      </div>
    </div>
  </section>
</template>
```

### 6.4 The Four Pillars (Interactive Section)

```vue
<template>
  <section id="pillars" class="py-24 bg-light-blue">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <UBadge color="primary" variant="subtle" size="lg">The Framework</UBadge>
        <h2 class="text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
          Four Pillars of <br /><span class="text-primary-800">Biological Immortality</span>
        </h2>
        <p class="text-xl font-body text-text-muted max-w-2xl mx-auto">
          A science-backed framework that addresses every dimension of aging
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Pilar Cards dengan Hover Reveal -->
        <div v-for="(pillar, index) in pillars" :key="pillar.id"
             class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-50 transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700" />
          
          <div class="relative z-10 flex gap-6">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center"
                   :class="pillar.bgColor">
                <UIcon :name="pillar.icon" class="w-8 h-8" :class="pillar.iconColor" />
              </div>
            </div>
            
            <div class="flex-1">
              <span class="text-xs font-heading font-bold tracking-wider text-primary-600 uppercase">
                Pillar {{ index + 1 }}
              </span>
              <h3 class="text-2xl font-heading font-bold mt-1 mb-2">{{ pillar.title }}</h3>
              <p class="text-text-muted font-body mb-4">{{ pillar.focus }}</p>
              
              <div class="flex items-center gap-2 text-sm">
                <UIcon name="i-heroicons-academic-cap" class="w-4 h-4 text-accent-500" />
                <span class="text-text-muted">{{ pillar.scientificProof }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Interactive Diagram Container -->
      <div class="mt-16 bg-white rounded-3xl p-8 shadow-lg">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-heading font-bold">The Integration</h3>
          <p class="text-text-muted">Hover to see how the pillars connect</p>
        </div>
        <!-- Animated diagram with GSAP -->
        <PillarDiagram />
      </div>
    </div>
  </section>
</template>

<script setup>
const pillars = [
  {
    id: 'mitochondria',
    title: 'Mitochondrial Reset',
    focus: 'Cellular autophagy & energy optimization',
    scientificProof: 'Yoshinori Ohsumi (Nobel 2016)',
    icon: 'i-heroicons-bolt',
    bgColor: 'bg-primary-100',
    iconColor: 'text-primary-700'
  },
  {
    id: 'biochemistry',
    title: 'Chemical Synergy',
    focus: 'Nutritional biochemistry & anti-inflammatory signaling',
    scientificProof: 'Cell Metabolism Journal',
    icon: 'i-heroicons-beaker',
    bgColor: 'bg-accent-100',
    iconColor: 'text-accent-600'
  },
  {
    id: 'ikigai',
    title: 'Neuro-Architecture of Purpose',
    focus: 'Cortisol regulation & Telomere protection',
    scientificProof: 'Elizabeth Blackburn (Nobel 2009)',
    icon: 'i-heroicons-brain',
    bgColor: 'bg-primary-100',
    iconColor: 'text-primary-700'
  },
  {
    id: 'epigenetics',
    title: 'Epigenetic Lifestyle',
    focus: 'Circadian rhythm & environmental gene activation',
    scientificProof: 'Harvard Medical School',
    icon: 'i-heroicons-clock',
    bgColor: 'bg-accent-100',
    iconColor: 'text-accent-600'
  }
]
</script>
```

### 6.5 Author Section

```vue
<template>
  <section id="author" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Author Photo -->
        <div class="relative">
          <div class="aspect-[4/5] rounded-3xl overflow-hidden">
            <img src="/images/author-portrait.jpg" alt="Author Name" 
                 class="w-full h-full object-cover" />
          </div>
          <!-- Credentials badge -->
          <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <UIcon name="i-heroicons-academic-cap" class="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <p class="text-xs text-text-muted">Credentials</p>
                <p class="font-bold font-heading">PhD/MSc/Researcher</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Author Bio -->
        <div>
          <UBadge color="primary" variant="subtle">About the Author</UBadge>
          <h2 class="text-4xl font-heading font-bold mt-4 mb-6">
            Bridging <span class="text-primary-600">Science</span> and <span class="text-accent-500">Wisdom</span>
          </h2>
          
          <div class="space-y-4 font-body text-text-muted">
            <p>
              After 15 years researching cellular aging at [Institution], I discovered a critical gap 
              in the longevity space: we had the science, but we were missing the soul.
            </p>
            <p>
              This book is the culmination of my research at the intersection of molecular biology 
              and purpose-driven living. It's not just about adding years to your life—it's about 
              adding life to your years.
            </p>
            <p>
              My work has been featured in [Publications] and I've helped thousands of people 
              reverse their biological age by 5-15 years.
            </p>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-100">
            <div>
              <p class="text-3xl font-heading font-bold text-primary-800">15+</p>
              <p class="text-sm text-text-muted">Years Research</p>
            </div>
            <div>
              <p class="text-3xl font-heading font-bold text-primary-800">5,000+</p>
              <p class="text-sm text-text-muted">Students Helped</p>
            </div>
            <div>
              <p class="text-3xl font-heading font-bold text-primary-800">-12</p>
              <p class="text-sm text-text-muted">Avg. Bio Age Reduced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

### 6.6 Social Proof & Case Studies

```vue
<template>
  <section id="testimonials" class="py-24 bg-light-blue">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-heading font-bold">
          Real Results. <span class="text-primary-800">Real Science.</span>
        </h2>
      </div>
      
      <!-- Case Study Comparison -->
      <div class="mb-16 bg-white rounded-3xl overflow-hidden shadow-lg">
        <div class="grid md:grid-cols-2">
          <!-- Silicon Valley Executive -->
          <div class="p-8 border-r border-gray-100">
            <div class="flex items-center gap-4 mb-6">
              <img src="/images/avatar-sv.jpg" class="w-16 h-16 rounded-full object-cover" />
              <div>
                <p class="font-bold font-heading">Sarah, 48</p>
                <p class="text-sm text-text-muted">Silicon Valley Executive</p>
              </div>
            </div>
            <h3 class="text-xl font-heading font-bold mb-4">The High-Performance Protocol</h3>
            <ul class="space-y-2 text-text-muted font-body">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-success" />
                <span>Autophagy window optimization</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-success" />
                <span>Circadian-aligned work schedule</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-success" />
                <span>Purpose audit implementation</span>
              </li>
            </ul>
            <div class="mt-6 p-4 bg-primary-50 rounded-xl">
              <p class="text-sm text-primary-800 font-medium">"I have more energy at 48 than I did at 30."</p>
            </div>
          </div>
          
          <!-- Okinawa Centenarian -->
          <div class="p-8">
            <div class="flex items-center gap-4 mb-6">
              <img src="/images/avatar-okinawa.jpg" class="w-16 h-16 rounded-full object-cover" />
              <div>
                <p class="font-bold font-heading">Taro, 94</p>
                <p class="text-sm text-text-muted">Okinawa Fisherman</p>
              </div>
            </div>
            <h3 class="text-xl font-heading font-bold mb-4">The Ikigai Framework</h3>
            <ul class="space-y-2 text-text-muted font-body">
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-success" />
                <span>Daily purposeful activity</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-success" />
                <span>Social connection rituals</span>
              </li>
              <li class="flex items-center gap-2">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-success" />
                <span>Traditional diet patterns</span>
              </li>
            </ul>
            <div class="mt-6 p-4 bg-accent-50 rounded-xl">
              <p class="text-sm text-accent-800 font-medium">"I still fish every morning. That's my medicine."</p>
            </div>
          </div>
        </div>
        <div class="p-6 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
          <p class="text-center font-body">
            <strong>The Insight:</strong> Both approaches lead to the same destination—biological youth. 
            One through molecular optimization, one through purpose. <br />
            <span class="text-primary-200">The 100-Year Pulse combines both.</span>
          </p>
        </div>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <UCard v-for="testimonial in testimonials" :key="testimonial.name"
               class="p-6 rounded-2xl hover:shadow-lg transition-shadow">
          <div class="flex items-center gap-1 mb-4">
            <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid" class="w-5 h-5 text-warning" />
          </div>
          <p class="font-body text-text-muted mb-4">"{{ testimonial.text }}"</p>
          <div class="flex items-center gap-3">
            <img :src="testimonial.avatar" class="w-10 h-10 rounded-full object-cover" />
            <div>
              <p class="font-bold font-heading text-sm">{{ testimonial.name }}</p>
              <p class="text-xs text-text-muted">{{ testimonial.role }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>
```

### 6.7 Interactive Biological Age Calculator (Preview)

```vue
<template>
  <section class="py-24 bg-primary-900 text-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-heading font-bold mb-4">
        What's Your <span class="text-accent-400">Biological Age</span>?
      </h2>
      <p class="text-primary-200 font-body mb-12">
        Take a sneak peek at the assessment inside the book
      </p>
      
      <div class="bg-white rounded-3xl p-8 text-left">
        <AgeCalculatorPreview />
      </div>
      
      <p class="mt-8 text-sm text-primary-300">
        Full assessment included in Chapter 4
      </p>
    </div>
  </section>
</template>
```

### 6.8 Pricing Section

```vue
<template>
  <section id="pricing" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-heading font-bold">
          Invest in Your <span class="text-primary-800">Longest Asset</span>
        </h2>
        <p class="text-xl text-text-muted font-body mt-4">
          One-time payment. Lifetime access. Immediate results.
        </p>
      </div>
      
      <!-- Primary Pricing Card -->
      <div class="max-w-xl mx-auto">
        <div class="relative bg-light-blue rounded-3xl overflow-hidden shadow-2xl">
          <div class="absolute top-0 right-0 bg-accent-500 text-white text-sm font-bold px-4 py-2 rounded-bl-xl">
            BEST VALUE
          </div>
          
          <div class="p-8 text-center border-b border-primary-100">
            <h3 class="text-2xl font-heading font-bold mb-2">The Complete Package</h3>
            <p class="text-text-muted font-body mb-6">
              Everything you need to start your longevity journey
            </p>
            
            <div class="flex items-center justify-center gap-2 mb-4">
              <span class="text-5xl font-heading font-bold text-primary-800">$29</span>
              <span class="text-xl text-text-muted line-through">$49</span>
            </div>
            
            <UButton size="xl" color="primary" block class="cta-pulse">
              Get Instant Access
            </UButton>
            
            <p class="text-xs text-text-muted mt-4">
              30-day money-back guarantee • Instant digital delivery
            </p>
          </div>
          
          <div class="p-8 space-y-4">
            <h4 class="font-bold font-heading mb-4">What's Included:</h4>
            <div v-for="feature in features" :key="feature" 
                 class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-success" />
              <span class="font-body">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Trust Badges -->
      <div class="flex flex-wrap justify-center gap-8 mt-12">
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-shield-check" class="w-6 h-6 text-success" />
          <span class="text-sm font-body text-text-muted">Secure Checkout</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-bi-stripe" class="w-6 h-6 text-primary-600" />
          <span class="text-sm font-body text-text-muted">Powered by Stripe</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-globe-alt" class="w-6 h-6 text-primary-600" />
          <span class="text-sm font-body text-text-muted">Global Shipping</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  '320-page PDF Ebook (optimized for mobile)',
  'EPUB format (works on Kindle, Kobo, iPad)',
  'Audio version (listen while commuting)',
  'Chapter-by-chapter action checklists',
  'Biological Age Self-Assessment Tool',
  '30-Day Implementation Journal',
  'Lifetime free updates as science evolves',
  'Access to private community (coming soon)'
]
</script>
```

### 6.9 FAQ Section

```vue
<template>
  <section id="faq" class="py-24 bg-light-blue">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="text-4xl font-heading font-bold text-center mb-12">
        Common Questions
      </h2>
      
      <div class="space-y-4">
        <UCard v-for="faq in faqs" :key="faq.question" class="overflow-hidden">
          <button @click="toggle(faq.id)" 
                  class="w-full flex items-center justify-between p-6 text-left">
            <span class="font-heading font-bold text-lg">{{ faq.question }}</span>
            <UIcon :name="active === faq.id ? 'i-heroicons-minus' : 'i-heroicons-plus'" 
                   class="w-5 h-5 text-primary-600" />
          </UCard>
          <div v-if="active === faq.id" class="px-6 pb-6">
            <p class="font-body text-text-muted">{{ faq.answer }}</p>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>

<script setup>
const active = ref(null)

const faqs = [
  {
    id: 1,
    question: "Is this suitable for beginners?",
    answer: "Absolutely. The book starts with foundational concepts before building to advanced protocols. Whether you're completely new to longevity science or a seasoned biohacker, you'll find value."
  },
  {
    id: 2,
    question: "How is this different from other longevity books?",
    answer: "Most longevity books focus on either the science (without actionable steps) or the lifestyle (without scientific backing). This book uniquely integrates molecular biochemistry with Ikigai philosophy."
  },
  {
    id: 3,
    question: "Do I need to take supplements?",
    answer: "No. While supplements can accelerate results, the core framework focuses on lifestyle interventions that are completely free—circadian rhythm, fasting windows, exercise, and purpose discovery."
  },
  {
    id: 4,
    question: "What formats are included?",
    answer: "You'll receive a beautifully designed PDF (optimized for mobile reading), an EPUB file for e-readers, and an MP3 audio version for listening on the go."
  },
  {
    id: 5,
    question: "Is there a money-back guarantee?",
    answer: "Yes. Try the first two chapters completely risk-free. If you don't feel the content is worth 10x the price, email us within 30 days for a full refund. No questions asked."
  }
]
</script>
```

### 6.10 Newsletter Capture

```vue
<template>
  <section class="py-20 bg-primary-800 text-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-heading font-bold mb-4">
        Get Free Longevity Tips
      </h2>
      <p class="text-primary-200 font-body mb-8">
        Join 10,000+ subscribers. No spam, just science-backed longevity insights.
      </p>
      
      <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <UInput 
          v-model="email" 
          placeholder="Enter your email" 
          color="white"
          size="lg"
          class="flex-1" 
        />
        <UButton type="submit" color="accent" size="lg">
          Subscribe
        </UButton>
      </form>
      
      <p class="text-xs text-primary-300 mt-4">
        We respect your inbox. Unsubscribe anytime.
      </p>
    </div>
  </section>
</template>
```

### 6.11 Footer

```vue
<template>
  <footer class="bg-primary-950 text-white py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <h3 class="text-2xl font-heading font-bold mb-4">The 100-Year Pulse</h3>
          <p class="text-primary-300 font-body max-w-sm">
            Molecular longevity meets the art of purposeful living. Science-backed. Human-centric.
          </p>
        </div>
        
        <!-- Links -->
        <div>
          <h4 class="font-bold font-heading mb-4">Book</h4>
          <ul class="space-y-2 font-body text-primary-300">
            <li><a href="#" class="hover:text-white transition">About</a></li>
            <li><a href="#" class="hover:text-white transition">Sample Chapter</a></li>
            <li><a href="#" class="hover:text-white transition">Reviews</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold font-heading mb-4">Legal</h4>
          <ul class="space-y-2 font-body text-primary-300">
            <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" class="hover:text-white transition">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Scientific Citations -->
      <div class="border-t border-primary-800 pt-8 mb-8">
        <p class="text-xs text-primary-400 font-body">
          The science presented in this book is based on peer-reviewed research including:
          Ohsumi Y. (2016). Discoveries of mechanisms for autophagy. Nobel Prize in Physiology or Medicine.
          Blackburn EH, Greider CW, Szostak JW. (2009). Telomeres and telomerase. Nobel Prize in Physiology or Medicine.
          Lu C, et al. (2019). Autophagy and Metabolic Disease. Cell Metabolism.
          Harvard Health Publishing. (2023). Longevity Research Updates.
        </p>
      </div>
      
      <!-- Bottom -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-primary-400 font-body">
          © 2026 The 100-Year Pulse. All rights reserved.
        </p>
        
        <!-- Social -->
        <div class="flex gap-4">
          <a href="#" class="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition">
            <UIcon name="i-bi-twitter-x" class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition">
            <UIcon name="i-bi-instagram" class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition">
            <UIcon name="i-bi-linkedin" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
```

---

## 7. Content Strategy

### 7.1 Key Messages by Section

| Section | Primary Message | Emotional Hook |
|---------|----------------|----------------|
| Hero | Science-backed longevity with purpose | Authority + Hope |
| Problem | Current solutions are broken | Frustration validation |
| Four Pillars | Complete, integrated framework | Comprehensive coverage |
| Author | Credible expert with personal journey | Trust + Relatability |
| Social Proof | Real people, real results | Validation + Belonging |
| Pricing | Fair value, risk-free | Confidence + Urgency |
| FAQ | No unanswered questions | Friction removal |

### 7.2 Copywriting Guidelines

**Voice:**
- Professional but accessible
- Confident tanpa arrogant
- Science-backed, not dogmatic
- Warm, encouraging tone

**Word Choice:**
- Use: "discover," "transform," "powerful," "science-backed," "proven," "you"
- Avoid: "guarantee," "secret," "miracle," "revolutionary," hype language

**Sentence Structure:**
- Short paragraphs (2-4 sentences max)
- Bullet points for lists (always include benefit)
- Subheadings untuk scannability

---

## 8. Sales & Marketing Integration

### 8.1 Sales Channels

| Channel | Purpose | Implementation |
|---------|---------|----------------|
| **Gumroad** (Primary) | Primary sales + EU VAT handling | Gumroad embed or direct link |
| **Etsy** (Secondary) | Organic discovery (US market) | Etsy listing with PDF delivery |
| **Direct** (Future) | Highest margin, email list | Stripe checkout link |

### 8.2 Payment Processing

```typescript
// Payment buttons configuration
const paymentButtons = [
  {
    platform: 'Stripe',
    supported: ['Credit Card', 'Apple Pay', 'Google Pay', 'Link'],
    regions: ['US', 'EU', 'Global']
  },
  {
    platform: 'PayPal',
    supported: ['PayPal Balance', 'Credit Card'],
    regions: ['Global', 'EU preferred']
  }
]
```

### 8.3 Conversion Optimization

| Element | Strategy | Implementation |
|---------|----------|----------------|
| Above fold CTA | Always visible on scroll | Sticky header CTA |
| Urgency | Not artificial scarcity | Evidence-based urgency (new research, limited bonuses) |
| Social proof | Proximity to CTAs | Testimonials near pricing |
| Risk reversal | Money-back guarantee | Prominent placement |
| Mobile optimization | Thumb-friendly CTAs | Large touch targets |

### 8.4 Analytics Setup

```typescript
// Analytics events to track
const analyticsEvents = {
  pageView: 'page_view',
  ctaClick: 'cta_click',
  scrollDepth: 'scroll_depth',
  videoPlay: 'video_play',
  formSubmit: 'form_submit',
  purchase: 'purchase',
  checkoutStart: 'checkout_start'
}
```

**Tools:**
- **Google Analytics 4:** Core metrics
- **Hotjar:** Heatmaps, session recordings
- **PostHog:** Product analytics (alternative)

---

## 9. Technical Implementation Phases

### Phase 1: Foundation (Days 1-3)

| Task | Description | Duration |
|------|-------------|----------|
| Project setup | Nuxt 3 + Nuxt UI + Tailwind init | 2 hours |
| Design system | Configure typography, colors, components | 4 hours |
| Layout structure | Header, footer, base layouts | 2 hours |
| Git setup | Repository + branch strategy | 1 hour |

### Phase 2: Core Sections (Days 4-7)

| Task | Description | Duration |
|------|-------------|----------|
| Hero section | Complete with animations | 4 hours |
| Problem section | Narrative layout | 3 hours |
| Four pillars | Interactive cards | 5 hours |
| Author section | Bio + credentials | 3 hours |
| Social proof | Case studies + testimonials | 4 hours |
| Pricing | Conversion-focused cards | 3 hours |
| FAQ | Accordion component | 2 hours |

### Phase 3: Interactive Elements (Days 8-10)

| Task | Description | Duration |
|------|-------------|----------|
| Age calculator | Interactive preview | 6 hours |
| Animations | GSAP ScrollTrigger | 8 hours |
| Parallax assets | Background elements | 4 hours |
| Micro-interactions | Button states, hovers | 3 hours |

### Phase 4: Integrations (Days 11-12)

| Task | Description | Duration |
|------|-------------|----------|
| Payment links | Gumroad, Stripe buttons | 2 hours |
| Newsletter form | Email integration | 2 hours |
| SEO meta | All pages + OG tags | 2 hours |
| Analytics | GA4, GTM setup | 2 hours |

### Phase 5: Optimization (Days 13-14)

| Task | Description | Duration |
|------|-------------|----------|
| Performance | Core Web Vitals check | 3 hours |
| Mobile QA | Responsive testing | 3 hours |
| Accessibility | WCAG compliance check | 2 hours |
| Cross-browser | Chrome, Safari, Firefox | 2 hours |
| Bug fixes | Any issues found | 4 hours |

---

## 10. Launch Checklist

### Technical Readiness
- [ ] All pages load under 3 seconds
- [ ] Mobile layout tested on iOS + Android
- [ ] All forms functional
- [ ] Payment links tested (sandbox mode)
- [ ] Analytics tracking verified
- [ ] SEO meta tags complete
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] 404 page created
- [ ] SSL certificate active

### Content Readiness
- [ ] All copy reviewed and approved
- [ ] Images optimized and loaded
- [ ] Author bio finalized
- [ ] Testimonials approved
- [ ] FAQ reviewed for accuracy
- [ ] Legal pages (privacy, terms) posted

### Launch Day
- [ ] Final backup created
- [ ] CDN cache cleared
- [ ] Monitoring dashboard active
- [ ] Customer support ready
- [ ] Email announcement scheduled
- [ ] Social posts scheduled

---

## 11. Success Metrics & KPIs

### Primary KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Conversion Rate | 3-5% | Purchases / Unique Visitors |
| Average Order Value | $29 | Revenue / Orders |
| Revenue per Visitor | $1.00 | Revenue / Visitors |
| Cart Abandonment | <70% | Started / Completed checkout |

### Engagement Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time on Page | 4+ minutes | GA4 average engagement time |
| Scroll Depth | 60% reach bottom | Scroll tracking |
| CTA Click Rate | 8-12% | CTA clicks / Visitors |
| Email Signup Rate | 3-5% | Subscribes / Visitors |

### Quality Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Net Promoter Score | 50+ | Post-purchase survey |
| Refund Rate | <5% | Refunds / Purchases |
| Customer Support Tickets | <2% | Tickets / Purchases |

---

## 12. Future Enhancements (Post-Launch)

### Version 2.0
- [ ] Interactive course companion
- [ ] Mobile app
- [ ] Community platform
- [ ] Personalized longevity assessment
- [ ] Integration with wearables data

### Monetization Expansion
- [ ] Print edition (hardcover)
- [ ] Audio course
- [ ] Mastermind/coaching program
- [ ] Corporate wellness license
- [ ] Translation rights

---

## Appendix

### A. Glossary
- **Autophagy:** Cellular self-cleaning process
- **Epigenetics:** Study of changes in gene expression
- **Ikigai:** Japanese concept of purpose/life satisfaction
- **Mitochondria:** Cellular energy powerhouses
- **Telomeres:** Protective caps on chromosomes

### B. References
- Ohsumi Y. (2016). Mechanisms of autophagy. Nobel Prize Lecture.
- Blackburn EH. (2009). Telomeres and telomerase. Nobel Prize Lecture.
- Cell Metabolism Journal - Various articles
- Harvard Medical School - Longevity Research

### C. File Naming Convention
- Images: `section-name-descriptive-variant.jpg`
- Icons: `icon-name.svg`
- Components: `ComponentName.vue`
- Pages: `page-name.vue`

---

**Document Version History**
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-02-08 | Product Team | Initial draft |

---

*This PRD is a living document and should be updated as the project evolves.*
