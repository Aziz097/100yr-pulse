<template>
  <section id="pricing" class="py-24 bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
      <svg width="100%" height="100%">
        <pattern id="waves-pattern" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10" fill="none" stroke="currentColor" stroke-width="2" class="text-slate-900"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#waves-pattern)"/>
      </svg>
    </div>
    
    <!-- Sakura Accents -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg class="absolute top-[20%] right-[10%] w-16 h-16 text-pink-100/60 transform rotate-[30deg] animate-float" viewBox="0 0 100 100" fill="currentColor">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
        <svg class="absolute bottom-[10%] left-[5%] w-10 h-10 text-pink-100/50 transform -rotate-[15deg] animate-float-delayed" viewBox="0 0 100 100" fill="currentColor">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
           <path d="M30 60 C20 70 40 70 30 60 Z" transform="translate(-10, 20)"/>
        </svg>
        <svg class="absolute top-[30%] left-[20%] w-5 h-5 text-pink-200/40 transform rotate-[100deg] animate-float" style="animation-duration: 9s;">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
        <svg class="absolute bottom-[30%] right-[25%] w-8 h-8 text-pink-100/40 transform -rotate-[60deg] animate-float-delayed" style="animation-duration: 7s;">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
        <svg class="absolute top-[10%] left-[40%] w-6 h-6 text-pink-200/30 transform rotate-[180deg] animate-float" style="animation-duration: 8s;">
            <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-slate-800">
          Invest in Your <span class="text-primary-800">Longest Asset</span>
        </h2>
        <p class="text-xl text-slate-600 mt-4">
          One-time payment. Lifetime access. Immediate results.
        </p>
      </div>
      
      <!-- Primary Pricing Card -->
      <div class="max-w-xl mx-auto">
        <div class="relative bg-light-blue rounded-3xl overflow-hidden shadow-xl">
          <!-- Best Value Badge -->
          <div class="absolute top-0 right-0 bg-accent-500 text-white text-sm font-bold px-4 py-2 rounded-bl-xl z-10">
            BEST VALUE
          </div>
          
          <div class="p-8 md:p-10 text-center border-b border-primary-100">
            <h3 class="text-2xl font-bold mb-2 text-slate-800">The Complete Package</h3>
            <p class="text-slate-600 mb-6">
              Everything you need to start your longevity journey
            </p>
            
            <div class="flex items-center justify-center gap-3 mb-6">
              <span class="text-6xl font-bold text-primary-800">$29</span>
              <div class="text-left">
                <span class="text-lg text-slate-400 line-through">$49</span>
                <p class="text-sm text-slate-500">USD</p>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 w-full">
              <a 
                href="https://gumroad.com/l/the100yearpulse" 
                target="_blank"
                rel="noopener"
                class="flex-1 inline-flex items-center justify-center px-6 py-4 bg-primary-800 text-white font-bold rounded-full hover:bg-primary-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Icon name="i-simple-icons-gumroad" class="w-5 h-5 mr-2" />
                Buy on Gumroad
              </a>
              
              <a 
                href="https://www.etsy.com/shop/The100YearPulse" 
                target="_blank"
                rel="noopener"
                class="flex-1 inline-flex items-center justify-center px-6 py-4 bg-[#F16521] text-white font-bold rounded-full hover:bg-[#d5561b] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Icon name="i-simple-icons-etsy" class="w-5 h-5 mr-2" />
                Buy on Etsy
              </a>
            </div>
            
            <div class="flex items-center justify-center gap-6 mt-4">
              <div class="flex items-center gap-2">
                <Icon name="i-heroicons-shield-check" class="w-5 h-5 text-green-500" />
                <span class="text-sm text-slate-500">30-Day Guarantee</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="i-heroicons-clock" class="w-5 h-5 text-primary-600" />
                <span class="text-sm text-slate-500">Instant Delivery</span>
              </div>
            </div>
          </div>
          
          <div class="p-8 md:p-10 space-y-4">
            <h4 class="font-bold mb-4 text-lg text-slate-800">What's Included:</h4>
            <div v-for="feature in features" :key="feature" class="flex items-center gap-3">
              <Icon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="text-slate-700">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Trust Badges - Logo Grid -->
      <div class="mt-12 hidden">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  '320-page PDF Ebook (optimized for mobile reading)',
  'EPUB format (works on Kindle, Kobo, iPad)',
  'Audio version (listen while commuting)',
  'Chapter-by-chapter action checklists',
  'Biological Age Self-Assessment Tool (50+ data points)',
  '30-Day Implementation Journal',
  'Lifetime free updates as science evolves',
  'Lifetime free updates as science evolves',
  'Access to private community (coming soon)'
]

// No unused variables
</script>
