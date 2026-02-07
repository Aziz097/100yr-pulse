<template>
  <section id="pillars" class="py-24 bg-light-blue">
    <div class="max-w-7xl mx-auto px-6">
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
          class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-soft transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
        >
          <!-- Background Circle -->
          <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-50 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
          
          <div class="relative z-10 flex gap-6">
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center" :class="pillar.bgColor">
                <Icon :name="pillar.icon" class="w-8 h-8" :class="pillar.iconColor" />
              </div>
            </div>
            
            <div class="flex-1">
              <span class="text-xs font-heading font-bold tracking-wider text-primary-600 uppercase">
                Pillar {{ index + 1 }}
              </span>
              <h3 class="text-2xl font-heading font-bold mt-1 mb-3">{{ pillar.title }}</h3>
              <p class="font-body text-slate-600 mb-4">{{ pillar.focus }}</p>
              
              <div class="flex items-center gap-2 text-sm">
                <Icon name="i-heroicons-academic-cap" class="w-4 h-4 text-accent-500" />
                <span class="font-body text-slate-500">{{ pillar.scientificProof }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Integration Diagram Placeholder -->
      <div class="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-soft" v-motion-fade-visible>
        <div class="text-center mb-8">
          <h3 class="text-2xl font-heading font-bold">The Integration</h3>
          <p class="font-body text-slate-600">All four pillars work together for maximum impact</p>
        </div>
        
        <!-- Visual representation of pillar integration -->
        <div class="relative max-w-2xl mx-auto aspect-square max-h-[400px]">
          <svg viewBox="0 0 400 400" class="w-full h-full">
            <!-- Central circle -->
            <circle cx="200" cy="200" r="60" fill="url(#centerGradient)" class="animate-pulse-slow"/>
            
            <!-- Connecting lines -->
            <line x1="200" y1="200" x2="200" y2="80" stroke="#1E40AF" stroke-width="3" class="opacity-30"/>
            <line x1="200" y1="200" x2="320" y2="260" stroke="#1E40AF" stroke-width="3" class="opacity-30"/>
            <line x1="200" y1="200" x2="200" y2="340" stroke="#1E40AF" stroke-width="3" class="opacity-30"/>
            <line x1="200" y1="200" x2="80" y2="260" stroke="#1E40AF" stroke-width="3" class="opacity-30"/>
            
            <!-- Pillar nodes -->
            <circle cx="200" cy="80" r="40" fill="#EFF6FF" stroke="#1E40AF" stroke-width="2"/>
            <text x="200" y="75" text-anchor="middle" class="text-[10px] fill-primary-800 font-bold">MITO</text>
            
            <circle cx="320" cy="260" r="40" fill="#FDF2F8" stroke="#F472B6" stroke-width="2"/>
            <text x="320" y="255" text-anchor="middle" class="text-[10px] fill-accent-700 font-bold">CHEM</text>
            
            <circle cx="200" cy="340" r="40" fill="#EFF6FF" stroke="#1E40AF" stroke-width="2"/>
            <text x="200" y="335" text-anchor="middle" class="text-[10px] fill-primary-800 font-bold">EPI</text>
            
            <circle cx="80" cy="260" r="40" fill="#FDF2F8" stroke="#F472B6" stroke-width="2"/>
            <text x="80" y="255" text-anchor="middle" class="text-[10px] fill-accent-700 font-bold">IKIGAI</text>
            
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
</script>
