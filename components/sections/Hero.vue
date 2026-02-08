<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-light-blue">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-b from-light-blue via-white to-light-blue" />
    
    <!-- Floating DNA Pattern & Sakura -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 right-10 w-96 h-96 opacity-5">
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <path d="M50 0 Q65 25 50 50 Q35 75 50 100" stroke="currentColor" fill="none" stroke-width="2" class="text-primary-800"/>
          <path d="M30 10 Q45 35 30 60 Q15 85 30 100" stroke="currentColor" fill="none" stroke-width="1" class="text-primary-600"/>
          <path d="M70 10 Q55 35 70 60 Q85 85 70 100" stroke="currentColor" fill="none" stroke-width="1" class="text-primary-600"/>
        </svg>
      </div>
      <!-- Sakura Accents -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg class="absolute top-[10%] left-[5%] w-10 h-10 text-pink-200/40 transform rotate-12 animate-float" viewBox="0 0 100 100" fill="currentColor">
             <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
             <path d="M70 20 C60 10 90 10 70 20 Z" transform="translate(10, 10)"/>
          </svg>
          <svg class="absolute top-[40%] right-[10%] w-16 h-16 text-pink-200/30 transform -rotate-45 animate-float-delayed" viewBox="0 0 100 100" fill="currentColor">
             <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
             <path d="M30 60 C20 70 40 70 30 60 Z" transform="translate(-10, 20)"/>
          </svg>
          <svg class="absolute bottom-[15%] left-[20%] w-8 h-8 text-pink-300/30 transform rotate-[60deg] animate-float" style="animation-duration: 8s;">
             <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
          </svg>
          <svg class="absolute top-[20%] left-[40%] w-6 h-6 text-pink-200/30 transform rotate-[100deg] animate-float-delayed" style="animation-duration: 9s;">
             <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
          </svg>
          <svg class="absolute bottom-[30%] right-[30%] w-12 h-12 text-pink-100/40 transform -rotate-[15deg] animate-float" style="animation-duration: 7s;">
              <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
              <path d="M70 20 C60 10 90 10 70 20 Z" transform="translate(10, 10)"/>
          </svg>
      </div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
      <!-- Text Content -->
      <div class="space-y-8">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
          <span class="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
          <span class="text-sm font-medium text-primary-800">Science-Backed Longevity Framework</span>
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
          <span class="text-slate-800">Live Longer.</span>
          <br />
          <span class="text-primary-800">Live Better.</span>
          <br />
          <span class="text-accent-500">Live With Purpose.</span>
        </h1>
        
        <p class="text-xl text-slate-600 max-w-xl leading-relaxed">
          Master the science of biological aging with the first framework that combines 
          <span class="font-semibold text-primary-700">molecular biochemistry</span> 
          with the Japanese philosophy of 
          <span class="font-semibold text-primary-700">Ikigai</span>.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#pricing" class="inline-flex items-center justify-center px-8 py-4 bg-primary-800 text-white font-bold rounded-full hover:bg-primary-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
            <Icon name="i-heroicons-book-open" class="w-5 h-5 mr-2" />
            Start Reading Now - $29
          </a>
          <a href="#pillars" class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-800 border-2 border-primary-800 font-bold rounded-full hover:bg-primary-50 transition-all duration-200">
            <Icon name="i-heroicons-play" class="w-5 h-5 mr-2" />
            Explore the Framework
          </a>
        </div>
        
        <!-- Trust Signals -->
        <div class="flex flex-wrap items-center gap-6 pt-4">
          <div class="flex items-center gap-2">
            <Icon name="i-heroicons-shield-check" class="w-5 h-5 text-green-500" />
            <span class="text-sm text-slate-500">30-Day Guarantee</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="i-heroicons-globe-alt" class="w-5 h-5 text-primary-600" />
            <span class="text-sm text-slate-500">Instant Digital Delivery</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="i-heroicons-lock-closed" class="w-5 h-5 text-primary-600" />
            <span class="text-sm text-slate-500">Secure Checkout</span>
          </div>
        </div>
      </div>
      
      <!-- 3D Book Visual - Fixed hover effect -->
      <div class="relative">
        <div class="aspect-[3/4] max-w-md mx-auto relative">
          <div class="w-full h-full rounded-r-3xl shadow-2xl overflow-hidden relative transform transition-all duration-500 hover:scale-105 hover:shadow-2xl" style="perspective: 1000px;">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900 p-8 flex flex-col justify-between text-white">
              <div class="text-center mt-8">
                <span class="text-4xl tracking-[0.2em] uppercase opacity-70 block mb-2">The</span>
                <span class="text-7xl font-heading font-bold block leading-none mb-1">100-Year</span>
                <span class="text-8xl font-heading font-bold block tracking-widest text-accent-300">PULSE</span>
              </div>
              
              <div class="text-center relative">
                 <div class="w-16 h-px bg-white/30 mx-auto mb-6"></div>
                 <h2 class="text-lg font-medium leading-relaxed mb-2 font-serif italic text-white/90">
                  Molecular Longevity Meets <br/> the Art of Purposeful Living
                </h2>
              </div>
              
              <div class="text-center border-t border-white/20 pt-6 mb-4">
                <p class="font-bold text-lg tracking-wide">Dr. Kenji Tanaka</p>
                <p class="text-xs opacity-60 uppercase tracking-widest mt-1">PhD in Molecular Biology</p>
              </div>
            </div>
            
            <!-- Spine effect -->
            <div class="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
          
          <!-- Floating badges -->
          <!-- Bottom Left Badge -->
          <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float card-glass">
            <div class="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center">
              <Icon name="i-heroicons-book-open" class="w-6 h-6 text-accent-600" />
            </div>
            <div>
              <p class="text-xs text-slate-500 uppercase tracking-wider">Format</p>
              <p class="font-bold text-slate-800">320+ Pages</p>
            </div>
          </div>
          
          <!-- Top Right Badge -->
          <div class="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float card-glass z-20">
            <div class="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <Icon name="i-heroicons-star" class="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p class="text-xs text-slate-500 uppercase tracking-wider">Rating</p>
              <p class="font-bold text-slate-800">4.9/5 Stars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}
</style>
