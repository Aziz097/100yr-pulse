<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-light-blue">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-b from-light-blue via-white to-light-blue" />
    
    <!-- Floating DNA Pattern -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 right-10 w-96 h-96 opacity-5">
        <svg viewBox="0 0 100 100" class="w-full h-full animate-float">
          <path d="M50 0 Q65 25 50 50 Q35 75 50 100" stroke="currentColor" fill="none" stroke-width="2" class="text-primary-800"/>
          <path d="M30 10 Q45 35 30 60 Q15 85 30 100" stroke="currentColor" fill="none" stroke-width="1" class="text-primary-600"/>
          <path d="M70 10 Q55 35 70 60 Q85 85 70 100" stroke="currentColor" fill="none" stroke-width="1" class="text-primary-600"/>
        </svg>
      </div>
      <div class="absolute bottom-40 left-10 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" class="w-full h-full animate-float" style="animation-delay: 2s;">
          <circle cx="50" cy="50" r="40" stroke="currentColor" fill="none" stroke-width="2" class="text-primary-800"/>
          <circle cx="50" cy="50" r="25" stroke="currentColor" fill="none" stroke-width="1" class="text-primary-600"/>
          <circle cx="50" cy="50" r="10" fill="currentColor" class="text-primary-800"/>
        </svg>
      </div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
      <!-- Text Content -->
      <div class="space-y-8" v-motion-fade-visible>
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
          <span class="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
          <span class="text-sm font-body font-medium text-primary-800">Science-Backed Longevity Framework</span>
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-heading font-bold leading-tight">
          <span class="text-slate-800">Live Longer.</span>
          <br />
          <span class="text-primary-800">Live Better.</span>
          <br />
          <span class="text-accent-500">Live With Purpose.</span>
        </h1>
        
        <p class="text-xl font-body text-slate-600 max-w-xl leading-relaxed">
          Master the science of biological aging with the first framework that combines 
          <span class="font-semibold text-primary-700">molecular biochemistry</span> 
          with the Japanese philosophy of 
          <span class="font-semibold text-primary-700">Ikigai</span>.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#pricing" class="btn-primary text-center cta-button">
            <Icon name="i-heroicons-book-open" class="w-5 h-5 mr-2" />
            Start Reading Now - $29
          </a>
          <a href="#pillars" class="btn-secondary text-center">
            <Icon name="i-heroicons-play" class="w-5 h-5 mr-2" />
            Explore the Framework
          </a>
        </div>
        
        <!-- Trust Signals -->
        <div class="flex flex-wrap items-center gap-6 pt-4">
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
      <div class="relative" v-motion-slide-visible-right>
        <div class="aspect-[3/4] max-w-md mx-auto relative">
          <!-- Book Cover Placeholder -->
          <div class="w-full h-full rounded-r-3xl shadow-2xl overflow-hidden relative transform rotate-y-12" style="perspective: 1000px;">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900 p-8 flex flex-col justify-between text-white">
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
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
          
          <!-- Floating badge -->
          <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
            <div class="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center">
              <Icon name="i-heroicons-book-open" class="w-6 h-6 text-accent-600" />
            </div>
            <div>
              <p class="text-xs font-body text-slate-500">Pages</p>
              <p class="font-bold font-heading text-slate-800">320+ Pages</p>
            </div>
          </div>
          
          <!-- Scientific badge -->
          <div class="absolute -top-3 -right-3 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2">
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
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cta-button {
  animation: pulse-gentle 3s ease-in-out infinite;
}

@keyframes pulse-gentle {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(30, 64, 175, 0.4);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(30, 64, 175, 0);
  }
}
</style>
