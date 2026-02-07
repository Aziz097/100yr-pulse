<template>
  <section ref="heroRef" class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-light-blue">
    <!-- Parallax Background -->
    <ParallaxBackground />
    
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-light-blue via-white/50 to-light-blue" />
    
    <div class="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
      <!-- Text Content -->
      <div ref="contentRef" class="space-y-8">
        <!-- Badge -->
        <div ref="badgeRef" class="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
          <span class="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
          <span class="text-sm font-body font-medium text-primary-800">Science-Backed Longevity Framework</span>
        </div>
        
        <!-- Headline -->
        <h1 ref="headlineRef" class="text-5xl lg:text-7xl font-heading font-bold leading-tight">
          <span class="text-slate-800 block">Live Longer.</span>
          <span class="text-primary-800 block">Live Better.</span>
          <span class="text-accent-500 block">Live With Purpose.</span>
        </h1>
        
        <!-- Subheadline -->
        <p ref="subheadlineRef" class="text-xl font-body text-slate-600 max-w-xl leading-relaxed">
          Master the science of biological aging with the first framework that combines 
          <span class="font-semibold text-primary-700">molecular biochemistry</span> 
          with the Japanese philosophy of 
          <span class="font-semibold text-primary-700">Ikigai</span>.
        </p>
        
        <!-- CTAs -->
        <div ref="ctaRef" class="flex flex-col sm:flex-row gap-4">
          <MagneticButton 
            size="lg" 
            variant="primary"
            @click="scrollToPricing"
          >
            <template #icon>
              <Icon name="i-heroicons-book-open" class="w-5 h-5" />
            </template>
            Start Reading Now - $29
          </MagneticButton>
          <MagneticButton 
            size="lg" 
            variant="secondary"
            @click="scrollToPillars"
          >
            <template #icon>
              <Icon name="i-heroicons-play" class="w-5 h-5" />
            </template>
            Explore the Framework
          </MagneticButton>
        </div>
        
        <!-- Trust Signals -->
        <div ref="trustRef" class="flex flex-wrap items-center gap-6 pt-4">
          <div class="flex items-center gap-2">
            <Icon name="i-heroicons-shield-check" class="w-5 h-5 text-green-500" />
            <span class="text-sm font-body text-slate-500">30-Day Guarantee</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="i-heroicons-globe-alt" class="w-5 h-5 text-primary-600" />
            <span class="text-sm font-body text-slate-500">Instant Digital Delivery</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="i-heroicons-lock-closed" class="w-5 h-5 text-primary-600" />
            <span class="text-sm font-body text-slate-500">Secure Checkout</span>
          </div>
        </div>
        
        <!-- Payment Methods -->
        <div class="flex items-center gap-3 pt-2">
          <span class="text-xs text-slate-400 font-body">Powered by</span>
          <div class="flex gap-2">
            <div class="w-8 h-5 bg-slate-200 rounded flex items-center justify-center">
              <span class="text-[8px] font-bold text-slate-600">VISA</span>
            </div>
            <div class="w-8 h-5 bg-slate-200 rounded flex items-center justify-center">
              <span class="text-[8px] font-bold text-slate-600">MC</span>
            </div>
            <div class="w-8 h-5 bg-slate-200 rounded flex items-center justify-center">
              <Icon name="i-bi-apple" class="w-4 h-4" />
            </div>
            <div class="w-8 h-5 bg-slate-200 rounded flex items-center justify-center">
              <Icon name="i-bi-google" class="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- 3D Book Visual -->
      <div ref="bookRef" class="relative">
        <div class="aspect-[3/4] max-w-md mx-auto relative">
          <!-- Book Cover -->
          <div 
            class="w-full h-full rounded-r-3xl shadow-2xl overflow-hidden relative transform rotate-y-12"
            style="perspective: 1000px;"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900 p-8 flex flex-col justify-between text-white">
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center animate-pulse-slow">
                  <Icon name="i-heroicons-heart" class="w-8 h-8" />
                </div>
                <span class="text-xs font-body tracking-widest uppercase">The 100-Year Pulse</span>
              </div>
              
              <div class="text-center">
                <h2 class="text-3xl font-heading font-bold leading-tight mb-2">
                  Molecular Longevity<br/>Meets the Art of<br/>Purposeful Living
                </h2>
              </div>
              
              <div class="text-center border-t border-white/20 pt-4">
                <p class="text-sm font-body opacity-80">Science-Backed Guide to Biological Immortality</p>
              </div>
            </div>
            
            <!-- Spine effect -->
            <div class="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
          
          <!-- Floating badges -->
          <div ref="badge1Ref" class="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
            <div class="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center">
              <Icon name="i-heroicons-book-open" class="w-6 h-6 text-accent-600" />
            </div>
            <div>
              <p class="text-xs font-body text-slate-500">Pages</p>
              <p class="font-bold font-heading text-slate-800">320+ Pages</p>
            </div>
          </div>
          
          <div ref="badge2Ref" class="absolute -top-3 -right-3 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2">
            <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <Icon name="i-heroicons-academic-cap" class="w-5 h-5 text-primary-700" />
            </div>
            <div>
              <p class="text-xs font-body text-slate-500">Based on</p>
              <p class="font-bold font-heading text-slate-800 text-sm">Nobel Research</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <Icon name="i-heroicons-chevron-double-down" class="w-6 h-6 text-slate-400" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { gsap } = useGSAP()
const heroRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const badgeRef = ref<HTMLElement | null>(null)
const headlineRef = ref<HTMLElement | null>(null)
const subheadlineRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const trustRef = ref<HTMLElement | null>(null)
const bookRef = ref<HTMLElement | null>(null)
const badge1Ref = ref<HTMLElement | null>(null)
const badge2Ref = ref<HTMLElement | null>(null)

const scrollToPricing = () => {
  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToPillars = () => {
  document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  if (!heroRef.value) return
  
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  // Initial animations
  tl.from(badgeRef.value, { opacity: 0, y: -20, duration: 0.6 })
    .from(headlineRef.value, { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
    .from(subheadlineRef.value, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from(ctaRef.value, { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
    .from(trustRef.value, { opacity: 0, duration: 0.5 }, '-=0.2')
    .from(bookRef.value, { opacity: 0, x: 50, duration: 1 }, '-=0.5')
    .from([badge1Ref.value, badge2Ref.value], { opacity: 0, scale: 0.8, duration: 0.5, stagger: 0.1 }, '-=0.3')
  
  // Parallax on scroll
  gsap.to(bookRef.value, {
    scrollTrigger: {
      trigger: heroRef.value,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5
    },
    y: -100,
    opacity: 0.5
  })
})
</script>
