<template>
  <div>
    <!-- Hero Section -->
    <TheHero />
    
    <!-- Problem Section -->
    <TheProblem />
    
    <!-- Four Pillars Section -->
    <ThePillars />
    
    <!-- Author Section -->
    <TheAuthor />
    
    <!-- Social Proof Section -->
    <TheTestimonials />
    
    <!-- Biological Age Preview -->
    <TheAgePreview />
    
    <!-- Pricing Section -->
    <ThePricing />
    
    <!-- FAQ Section -->
    <TheFAQ />
    
    <!-- Newsletter Section -->
    <TheNewsletter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'The 100-Year Pulse | Molecular Longevity Meets Purposeful Living',
  meta: [
    { name: 'description', content: 'Master the science of biological aging with The 100-Year Pulse. A comprehensive guide combining molecular biochemistry with Ikigai philosophy to extend your biological lifespan.' },
    { name: 'keywords', content: 'longevity, biohacking, molecular biology, ikigai, anti-aging, health optimization, telomeres, autophagy' },
    { property: 'og:title', content: 'The 100-Year Pulse | Molecular Longevity Meets Purposeful Living' },
    { property: 'og:description', content: 'Science-backed longevity framework combining mitochondrial optimization with purpose-driven living.' },
    { property: 'og:image', content: '/images/og-cover.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'The 100-Year Pulse - Live Longer, Live Better' },
    { name: 'twitter:description', content: 'Molecular longevity meets the art of purposeful living.' },
    { name: 'twitter:image', content: '/images/og-cover.jpg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Book',
        name: 'The 100-Year Pulse',
        alternateName: '100 Year Pulse',
        author: {
          '@type': 'Person',
          name: 'Author Name',
          jobTitle: 'Longevity Researcher'
        },
        publisher: {
          '@type': 'Organization',
          name: 'The 100-Year Pulse'
        },
        datePublished: '2026-02-01',
        dateModified: '2026-02-08',
        description: 'Molecular Longevity Meets the Art of Purposeful Living. A science-backed guide to extending your biological lifespan.',
        genre: ['Health & Wellness', 'Self-Help', 'Science'],
        about: ['Longevity', 'Biohacking', 'Molecular Biology', 'Ikigai', 'Healthy Aging'],
        offers: {
          '@type': 'Offer',
          price: '29.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          validFrom: '2026-02-01'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '127',
          bestRating: '5'
        }
      })
    }
  ]
})
</script>
