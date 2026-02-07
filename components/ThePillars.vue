<template>
  <section id="pillars" class="py-24 bg-light-blue relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full opacity-30 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    
    <div class="relative max-w-7xl mx-auto px-6">
      <div class="text-center mb-16" v-motion-fade-visible>
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
          <span class="text-sm font-body font-medium text-primary-800">The Framework</span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-heading font-bold mb-6">
          Four Pillars of <br /><span class="text-primary-800">Biological Immortality</span>
        </h2>
        <p class="text-xl font-body text-slate-600 max-w-2xl mx-auto">
          A science-backed framework that addresses every dimension of aging—from cellular level to life purpose.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <div 
          v-for="(pillar, index) in pillars" 
          :key="pillar.id"
          ref="pillarRefs"
          class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-2 cursor-pointer"
          @mouseenter="handlePillarEnter(index)"
          @mouseleave="handlePillarLeave(index)"
        >
          <!-- Animated background circle -->
          <div 
            class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-50 transform translate-x-16 -translate-y-16 transition-transform duration-700 group-hover:scale-150"
          ></div>
          
          <!-- Icon glow effect -->
          <div 
            class="absolute inset-0 opacity-0 transition-opacity duration-300"
            :class="{ 'opacity-100': activePillar === index }"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5"></div>
          </div>
          
          <div class="relative z-10 flex gap-6">
            <div class="flex-shrink-0">
              <div 
                class="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                :class="[pillar.bgColor, { 'scale-110 shadow-lg': activePillar === index }]"
              >
                <Icon 
                  :name="pillar.icon" 
                  class="w-8 h-8 transition-transform duration-300"
                  :class="[pillar.iconColor, { 'scale-110': activePillar === index }]"
                />
              </div>
            </div>
            
            <div class="flex-1">
              <span class="text-xs font-heading font-bold tracking-wider text-primary-600 uppercase">
                Pillar {{ index + 1 }}
              </span>
              <h3 class="text-2xl font-heading font-bold mt-1 mb-3 transition-colors duration-300"
                  :class="activePillar === index ? 'text-primary-800' : 'text-slate-800'">
                {{ pillar.title }}
              </h3>
              <p class="font-body text-slate-600 mb-4">{{ pillar.focus }}</p>
              
              <div class="flex items-center gap-2 text-sm">
                <Icon name="i-heroicons-academic-cap" class="w-4 h-4 text-accent-500" />
                <span class="font-body text-slate-500">{{ pillar.scientificProof }}</span>
              </div>
            </div>
          </div>
          
          <!-- Hover indicator -->
          <div 
            class="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300"
            :class="activePillar === index ? 'bg-accent-500' : 'bg-transparent'"
          ></div>
        </div>
      </div>
      
      <!-- Integration Diagram -->
      <div class="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-soft" v-motion-fade-visible>
        <div class="text-center mb-8">
          <h3 class="text-2xl font-heading font-bold">The Integration</h3>
          <p class="font-body text-slate-600">All four pillars work together for maximum impact</p>
        </div>
        
        <!-- Interactive SVG Diagram -->
        <div class="relative max-w-2xl mx-auto aspect-square max-h-[400px]">
          <svg viewBox="0 0 400 400" class="w-full h-full">
            <!-- Animated connections -->
            <g class="connections">
              <line x1="200" y1="200" x2="200" y2="80" stroke="url(#lineGradient)" stroke-width="3" stroke-dasharray="8 4" class="opacity-40">
                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="320" y2="260" stroke="url(#lineGradient)" stroke-width="3" stroke-dasharray="8 4" class="opacity-40">
                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="200" y2="340" stroke="url(#lineGradient)" stroke-width="3" stroke-dasharray="8 4" class="opacity-40">
                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite"/>
              </line>
              <line x1="200" y1="200" x2="80" y2="260" stroke="url(#lineGradient)" stroke-width="3" stroke-dasharray="8 4" class="opacity-40">
                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite"/>
              </line>
              
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#1E40AF"/>
                  <stop offset="100%" stop-color="#F472B6"/>
                </linearGradient>
              </defs>
            </g>
            
            <!-- Central circle with pulse -->
            <circle cx="200" cy="200" r="60" fill="url(#centerGradient)" class="animate-pulse-slow"/>
            
            <!-- Pillar nodes -->
            <g class="pillar-nodes">
              <circle cx="200" cy="80" r="40" fill="#EFF6FF" stroke="#1E40AF" stroke-width="2" class="transition-all duration-300 hover:fill-primary-100"/>
              <text x="200" y="75" text-anchor="middle" class="text-[10px] fill-primary-800 font-bold">MITO</text>
              
              <circle cx="320" cy="260" r="40" fill="#FDF2F8" stroke="#F472B6" stroke-width="2" class="transition-all duration-300 hover:fill-accent-100"/>
              <text x="320" y="255" text-anchor="middle" class="text-[10px] fill-accent-700 font-bold">CHEM</text>
              
              <circle cx="200" cy="340" r="40" fill="#EFF6FF" stroke="#1E40AF" stroke-width="2" class="transition-all duration-300 hover:fill-primary-100"/>
              <text x="200" y="335" text-anchor="middle" class="text-[10px] fill-primary-800 font-bold">EPI</text>
              
              <circle cx="80" cy="260" r="40" fill="#FDF2F8" stroke="#F472B6" stroke-width="2" class="transition-all duration-300 hover:fill-accent-100"/>
              <text x="80" y="255" text-anchor="middle" class="text-[10px] fill-accent-700 font-bold">IKIGAI</text>
            </g>
            
            <!-- Labels -->
            <text x="200" y="45" text-anchor="middle" class="text-xs fill-slate-600">Mitochondrial</text>
            <text x="360" y="260" class="text-xs fill-slate-600">Chemical</text>
            <text x="200" y="380" text-anchor="middle" class="text-xs fill-slate-600">Epigenetic</text>
            <text x="40" y="260" text-anchor="middle" class="text-xs fill-slate-600">Purpose</text>
            
            <defs>
              <radialGradient id="centerGradient">
                <stop offset="0%" stop-color="#1E40AF"/>
                <stop offset="100%" stop-color="#F472B6"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { gsap } = useGSAP()

const pillarRefs = ref<HTMLElement[]>([])
const activePillar = ref<number | null>(null)

const pillars = [
  {
    id: 'mitochondria',
    title: 'Mitochondrial Reset',
    focus: 'Cellular autophagy & energy optimization through time-restricted eating and exercise.',
    scientificProof: 'Yoshinori Ohsumi (Nobel Prize 2016)',
    icon: 'i-heroicons-bolt',
    bgColor: 'bg-primary-100',
    iconColor: 'text-primary-700'
  },
  {
    id: 'biochemistry',
    title: 'Chemical Synergy',
    focus: 'Nutritional biochemistry & anti-inflammatory food signaling for gene expression.',
    scientificProof: 'Cell Metabolism Journal',
    icon: 'i-heroicons-beaker',
    bgColor: 'bg-accent-100',
    iconColor: 'text-accent-600'
  },
  {
    id: 'ikigai',
    title: 'Neuro-Architecture of Purpose',
    focus: 'Cortisol regulation & Telomere protection through Ikigai discovery.',
    scientificProof: 'Elizabeth Blackburn (Nobel Prize 2009)',
    icon: 'i-heroicons-brain',
    bgColor: 'bg-primary-100',
    iconColor: 'text-primary-700'
  },
  {
    id: 'epigenetics',
    title: 'Epigenetic Lifestyle',
    focus: 'Circadian rhythm optimization & environmental gene activation.',
    scientificProof: 'Harvard Medical School',
    icon: 'i-heroicons-clock',
    bgColor: 'bg-accent-100',
    iconColor: 'text-accent-600'
  }
]

const handlePillarEnter = (index: number) => {
  activePillar.value = index
  
  gsap.to(pillarRefs.value[index], {
    scale: 1.02,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const handlePillarLeave = (index: number) => {
  activePillar.value = null
  
  gsap.to(pillarRefs.value[index], {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out'
  })
}

onMounted(() => {
  if (pillarRefs.value.length > 0) {
    gsap.fromTo(pillarRefs.value,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#pillars',
          start: 'top 80%'
        }
      }
    )
  }
})
</script>
