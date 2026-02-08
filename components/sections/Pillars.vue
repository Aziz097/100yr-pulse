<template>
  <section class="py-24 bg-white relative" id="pillars">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
          <span class="text-sm font-medium text-primary-800">The Framework</span>
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold mb-4">
          Four Pillars of <span class="text-primary-800">Biological Immortality</span>
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          A science-backed framework that addresses every dimension of aging—from cellular level to life purpose.
        </p>
      </div>

      <!-- Pillar Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div
          v-for="(pillar, index) in pillars"
          :key="pillar.id"
          class="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
          @mouseenter="activePillar = index"
          @mouseleave="activePillar = null"
          @click="selectedPillar = pillar"
        >
          <!-- Accent line -->
          <div
            class="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
            :class="activePillar === index ? 'bg-primary-600' : 'bg-transparent'"
          />

          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
            :class="[pillar.bgColor, { 'scale-105 shadow-md': activePillar === index }]"
          >
            <Icon
              :name="pillar.icon"
              class="w-6 h-6"
              :class="pillar.iconColor"
            />
          </div>

          <!-- Title -->
          <h3 class="text-xl font-semibold mb-2 text-slate-800">
            {{ pillar.title }}
          </h3>

          <!-- Focus -->
          <p class="text-base text-slate-600 mb-4 leading-relaxed">
            {{ pillar.focus }}
          </p>

          <!-- Scientific proof -->
          <div class="flex items-center gap-2 text-sm text-slate-500">
            <Icon name="i-heroicons-academic-cap" class="w-4 h-4" />
            <span>{{ pillar.scientificProof }}</span>
          </div>
        </div>
      </div>

      <!-- Integration Section -->
      <div class="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 overflow-hidden shadow-lg border border-slate-100">
        <!-- Sakura Accents -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <svg class="absolute top-[5%] left-[5%] w-8 h-8 text-pink-200/40 transform rotate-12 animate-float" viewBox="0 0 100 100" fill="currentColor">
               <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
            </svg>
            <svg class="absolute bottom-[10%] right-[5%] w-10 h-10 text-pink-200/30 transform -rotate-45 animate-float-delayed" viewBox="0 0 100 100" fill="currentColor">
               <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
            </svg>
            <svg class="absolute bottom-[40%] left-[2%] w-6 h-6 text-pink-300/30 transform rotate-[80deg] animate-float" style="animation-duration: 9s;">
               <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
            </svg>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 rounded-full mb-4">
              <span class="text-xs font-medium text-primary-800">The Integration</span>
            </div>
            <h3 class="text-4xl font-bold mb-4 text-accent-400">
              Synergy Creates Exponential Results
            </h3>
            <p class="text-slate-600 leading-relaxed mb-6">
              When all four pillars work together, the synergistic effect multiplies your results beyond what any single approach can achieve. Each pillar amplifies the others, creating a compounding effect on your biological age reversal. For instance, improved mitochondrial function enhances cognitive clarity (Purpose), while epigenetic optimization regulates the hormones that drive metabolism (Chemical).
            </p>
          </div>

          <!-- Circular Visual Flow -->
          <div class="relative h-[300px] sm:h-[400px] flex items-center justify-center">
             <!-- Connecting Lines Circle -->
             <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-primary-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] animate-[spin_60s_linear_infinite]"></div>
                <div class="absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-slate-100"></div>
             </div>
             
             <!-- Center Core -->
             <div class="relative z-20 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-primary-50">
               <Icon name="i-heroicons-heart" class="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 animate-pulse-slow" />
               <span class="text-[10px] sm:text-xs font-bold text-slate-800 uppercase tracking-widest mt-1 sm:mt-2">Life</span>
             </div>

             <!-- Orbiting Pillars with Labels -->
             <!-- Top: Mitochondrial -->
             <div class="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 group cursor-pointer z-30" @click="selectedPillar = pillars[0]">
               <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 border-primary-50 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:border-primary-200">
                 <Icon name="i-heroicons-bolt" class="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
               </div>
               <span class="hidden sm:inline text-xs font-bold text-slate-700 bg-white/90 px-3 py-1 rounded-full shadow-sm">Mitochondrial</span>
               <!-- Connector Line - hidden on mobile -->
               <div class="hidden sm:block absolute top-full left-1/2 w-0.5 h-6 bg-primary-400 shadow-[0_0_8px_theme(colors.primary.400)] -z-10"></div>
             </div>

             <!-- Bottom: Purpose -->
             <div class="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col-reverse items-center gap-1 sm:gap-2 group cursor-pointer z-30" @click="selectedPillar = pillars[2]">
               <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 border-primary-50 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:border-primary-200">
                 <Icon name="i-heroicons-face-smile" class="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
               </div>
               <span class="hidden sm:inline text-xs font-bold text-slate-700 bg-white/90 px-3 py-1 rounded-full shadow-sm">Purpose</span>
               <!-- Connector Line - hidden on mobile -->
               <div class="hidden sm:block absolute bottom-full left-1/2 w-0.5 h-6 bg-primary-400 shadow-[0_0_8px_theme(colors.primary.400)] -z-10"></div>
             </div>

             <!-- Left: Chemical -->
             <div class="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 flex flex-row items-center gap-1 sm:gap-2 group cursor-pointer z-30" @click="selectedPillar = pillars[1]">
               <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 border-accent-50 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:border-accent-200">
                 <Icon name="i-heroicons-beaker" class="w-6 h-6 sm:w-8 sm:h-8 text-accent-600" />
               </div>
               <span class="hidden sm:inline text-xs font-bold text-slate-700 bg-white/90 px-3 py-1 rounded-full shadow-sm">Chemical</span>
                <!-- Connector Line - hidden on mobile -->
               <div class="hidden sm:block absolute left-full top-1/2 h-0.5 w-15 bg-accent-400 shadow-[0_0_8px_theme(colors.accent.400)] -z-10"></div>
             </div>

             <!-- Right: Epigenetic -->
             <div class="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 flex flex-row-reverse items-center gap-1 sm:gap-2 group cursor-pointer z-30" @click="selectedPillar = pillars[3]">
               <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 border-accent-50 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:border-accent-200">
                 <Icon name="i-heroicons-clock" class="w-6 h-6 sm:w-8 sm:h-8 text-accent-600" />
               </div>
               <span class="hidden sm:inline text-xs font-bold text-slate-700 bg-white/90 px-3 py-1 rounded-full shadow-sm">Epigenetic</span>
               <!-- Connector Line - hidden on mobile -->
               <div class="hidden sm:block absolute right-full top-1/2 h-0.5 w-14 bg-accent-400 shadow-[0_0_8px_theme(colors.accent.400)] -z-10"></div>
             </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Dialog -->
    <UModal 
      v-model:open="isOpen" 
      scrollable
      :ui="{ 
        content: 'bg-transparent shadow-none ring-0 w-full sm:max-w-4xl p-4', 
        overlay: 'bg-slate-900/60 backdrop-blur-sm' 
      }"
    >
      <template #content>
        <div v-if="selectedPillar" class="relative bg-white rounded-3xl p-6 md:p-10 w-full shadow-2xl group">
          
          <div class="flex items-start gap-6 mb-6">
            <div class="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0" :class="selectedPillar.bgColor">
               <Icon :name="selectedPillar.icon" class="w-10 h-10" :class="selectedPillar.iconColor" />
            </div>
            <div>
              <span class="text-sm font-bold tracking-wider uppercase text-slate-500 mb-1 block">Pillar {{ pillars.findIndex(p => p.id === selectedPillar.id) + 1 }}</span>
              <h3 class="text-3xl font-bold text-slate-800">{{ selectedPillar?.title }}</h3>
            </div>
          </div>
          
          <div class="prose prose-slate max-w-none">
            <p class="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
              {{ selectedPillar?.focus }}
            </p>
            
            <div class="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6">
              <h4 class="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Icon name="i-heroicons-beaker" class="w-5 h-5 text-primary-600" />
                The Science
              </h4>
              <p class="text-slate-600 leading-relaxed text-sm mb-4">
                 {{ selectedPillar?.longDescription }}
              </p>
              <div class="flex items-center gap-2 text-xs font-semibold text-primary-700 bg-white px-3 py-2 rounded-lg border border-primary-100 inline-flex">
                 <Icon name="i-heroicons-academic-cap" class="w-4 h-4" />
                 <span>{{ selectedPillar?.scientificProof }}</span>
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
               <div class="p-4 rounded-xl bg-green-50 border border-green-100">
                  <h5 class="text-sm font-bold text-green-800 mb-2">Key Benefits</h5>
                  <ul class="text-sm text-green-700 space-y-1 list-disc list-inside">
                    <li v-for="benefit in selectedPillar?.benefits" :key="benefit">{{ benefit }}</li>
                  </ul>
               </div>
               <div class="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <h5 class="text-sm font-bold text-blue-800 mb-2">In Practice</h5>
                  <p class="text-sm text-blue-700">{{ selectedPillar?.practice }}</p>
               </div>
            </div>
          </div>
          
          <div class="mt-8 flex justify-end border-t border-slate-100 pt-6">
            <button @click="isOpen = false" class="px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Close Detail
            </button>
          </div>
        </div>
      </template>
    </UModal>
  </section>
</template>

<script setup lang="ts">
const activePillar = ref<number | null>(null)
const selectedPillar = ref<any>(null)

const isOpen = computed({
  get: () => !!selectedPillar.value,
  set: (val) => {
    if (!val) selectedPillar.value = null
  }
})

const pillars = [
  {
    id: 'mitochondria',
    shortTitle: 'Mitochondrial',
    title: 'Mitochondrial Reset',
    focus: 'Cellular autophagy & energy optimization through time-restricted eating and exercise.',
    longDescription: 'Mitochondria are the power plants of your cells. As we age, they become less efficient and accumulate damage, leading to fatigue and metabolic disease. This pillar focuses on inducing autophagy—the body\'s cellular cleanup process—to recycle damaged components and stimulate the creation of new, efficient mitochondria (mitogenesis).',
    benefits: ['Increased daily energy', 'Improved metabolic flexibility', 'Reduced cellular waste'],
    practice: 'Strategic fasting windows (16:8) combined with Zone 2 cardio training.',
    scientificProof: 'Yoshinori Ohsumi (Nobel Prize 2016) - Autophagy Mechanisms',
    icon: 'i-heroicons-bolt',
    bgColor: 'bg-primary-50',
    iconColor: 'text-primary-600'
  },
  {
    id: 'biochemistry',
    shortTitle: 'Chemical',
    title: 'Chemical Synergy',
    focus: 'Nutritional biochemistry & anti-inflammatory food signaling for gene expression.',
    longDescription: 'Food is not just fuel; it is information. Every molecule you eat sends a signal to your genes. This pillar eliminates inflammatory triggers that confuse your immune system and provides the precise micronutrients required for optimal enzyme function. We focus on controlling insulin spikes and reducing systemic inflammation.',
    benefits: ['Stable blood sugar', 'Reduced joint pain', 'Clearer thinking'],
    practice: 'Elimination of seed oils and processed sugars; focus on polyphenol-rich foods.',
    scientificProof: 'Cell Metabolism Journal (2019) - Inflammation & Aging',
    icon: 'i-heroicons-beaker',
    bgColor: 'bg-accent-50',
    iconColor: 'text-accent-600'
  },
  {
    id: 'ikigai',
    shortTitle: 'Purpose',
    title: 'Neuro-Architecture of Purpose',
    focus: 'Cortisol regulation & Telomere protection through Ikigai discovery.',
    longDescription: 'Research from the Blue Zones shows that having a clear sense of purpose (Ikigai) is associated with longer life expectancy. Biologically, purpose reduces chronic cortisol levels, which in turn protects telomeres—the protective caps at the end of your DNA—from shortening prematurely.',
    benefits: ['Lower stress levels', 'Better sleep quality', 'Stronger immune response'],
    practice: 'Daily "flow state" blocks and community contribution activities.',
    scientificProof: 'Elizabeth Blackburn (Nobel Prize 2009) - Telomeres',
    icon: 'i-heroicons-face-smile',
    bgColor: 'bg-primary-50',
    iconColor: 'text-primary-600'
  },
  {
    id: 'epigenetics',
    shortTitle: 'Epigenetic',
    title: 'Epigenetic Lifestyle',
    focus: 'Circadian rhythm optimization & environmental gene activation.',
    longDescription: 'You cannot change your DNA, but you can change which genes are switched on or off. This is epigenetics. By aligning your lifestyle with your body\'s natural circadian Rhythms, you can activate longevity genes (Sirtuins) and suppress pro-aging genes. Light exposure, temperature, and sleep timing are key levers.',
    benefits: ['Deep restorative sleep', 'Hormonal balance', 'Genetic optimization'],
    practice: 'Morning sunlight exposure and strict dark-environment sleep hygiene.',
    scientificProof: 'Harvard Medical School - Epigenetic Clock',
    icon: 'i-heroicons-clock',
    bgColor: 'bg-accent-50',
    iconColor: 'text-accent-600'
  }
]
</script>
