<template>
  <div ref="containerRef" class="parallax-bg-container fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div 
      ref="layer1Ref"
      class="absolute inset-0 opacity-[0.03]"
    >
      <svg viewBox="0 0 100 100" class="w-full h-full">
        <pattern id="dna-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M10 0 Q15 10 10 20 Q5 30 10 40" stroke="currentColor" fill="none" stroke-width="0.5" class="text-primary-800"/>
          <path d="M15 0 Q10 10 15 20 Q20 30 15 40" stroke="currentColor" fill="none" stroke-width="0.5" class="text-primary-600"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#dna-pattern)"/>
      </svg>
    </div>
    <div 
      ref="layer2Ref"
      class="absolute inset-0 opacity-[0.02]"
    >
      <svg viewBox="0 0 100 100" class="w-full h-full">
        <circle cx="50" cy="50" r="40" stroke="currentColor" fill="none" stroke-width="0.3" class="text-accent-500"/>
        <circle cx="50" cy="50" r="25" stroke="currentColor" fill="none" stroke-width="0.2" class="text-primary-600"/>
        <circle cx="50" cy="50" r="10" fill="currentColor" class="text-primary-800"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const { gsap } = useGSAP()
const containerRef = ref<HTMLElement | null>(null)
const layer1Ref = ref<HTMLElement | null>(null)
const layer2Ref = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!layer1Ref.value || !layer2Ref.value) return
  
  const updateParallax = () => {
    const scrollY = window.scrollY
    gsap.to(layer1Ref.value, {
      y: scrollY * 0.3,
      ease: 'none',
      overwrite: true
    })
    gsap.to(layer2Ref.value, {
      y: scrollY * 0.5,
      ease: 'none',
      overwrite: true
    })
  }
  
  window.addEventListener('scroll', updateParallax, { passive: true })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateParallax)
  })
})
</script>

<style scoped>
.parallax-bg-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}
</style>
