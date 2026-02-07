<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | The 100-Year Pulse` : 'The 100-Year Pulse | Molecular Longevity Meets Purposeful Living'
  },
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: 'Master the science of longevity with The 100-Year Pulse. A comprehensive guide combining molecular biochemistry with Ikigai philosophy to extend your biological lifespan.' },
    { name: 'keywords', content: 'longevity, biohacking, molecular biology, ikigai, anti-aging, health optimization, telomeres, autophagy' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
