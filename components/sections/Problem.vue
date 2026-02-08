<template>
  <section class="py-24 bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
      <svg width="100%" height="100%">
        <pattern id="cross-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M10 15L20 15M15 10L15 20" stroke="currentColor" stroke-width="2" class="text-slate-900"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#cross-pattern)"/>
      </svg>
    </div>

    <!-- Sakura Accents -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg class="absolute top-[5%] left-[10%] w-8 h-8 text-pink-200/50 transform rotate-12 animate-float" viewBox="0 0 100 100" fill="currentColor">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
           <path d="M70 20 C60 10 90 10 70 20 Z" transform="translate(10, 10)"/>
        </svg>
        <svg class="absolute bottom-[20%] right-[5%] w-12 h-12 text-pink-200/40 transform -rotate-45 animate-float-delayed" viewBox="0 0 100 100" fill="currentColor">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
           <path d="M30 60 C20 70 40 70 30 60 Z" transform="translate(-10, 20)"/>
        </svg>
        <svg class="absolute top-[40%] left-[2%] w-6 h-6 text-pink-300/30 transform rotate-[80deg] animate-float" style="animation-duration: 9s;">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
        <svg class="absolute bottom-[10%] left-[30%] w-5 h-5 text-pink-200/30 transform rotate-[20deg] animate-float-delayed" style="animation-duration: 7s;">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
        <svg class="absolute top-[15%] right-[20%] w-10 h-10 text-pink-200/20 transform rotate-[160deg] animate-float" style="animation-duration: 8s;">
            <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
    </div>

    <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 class="text-3xl lg:text-4xl font-bold mb-8">
        The Longevity Industry is <span class="text-accent-500">Broken</span>
      </h2>
      
      <p class="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
        Most longevity content fails because it either oversimplifies the science or ignores the human element. You deserve better.
      </p>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card p-8 text-left border border-slate-100">
          <div class="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
            <Icon name="i-heroicons-beaker" class="w-7 h-7 text-primary-700" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-slate-800">Too Scientific</h3>
          <p class="text-slate-600">
            Research papers that never translate into real life advice. Dense jargon without actionable steps.
          </p>
        </div>
        
        <div class="card p-8 text-left border border-slate-100">
          <div class="w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center mb-6">
            <Icon name="i-heroicons-sparkles" class="w-7 h-7 text-accent-600" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-slate-800">Too Simplistic</h3>
          <p class="text-slate-600">
            "Drink more water" advice that ignores molecular mechanisms. Surface-level tips that don't move the needle.
          </p>
        </div>
        
        <div class="card p-8 text-left border border-slate-100">
          <div class="w-14 h-14 rounded-2xl bg-primary-800 flex items-center justify-center mb-6">
            <Icon name="i-heroicons-face-frown" class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-slate-800">Too Hollow</h3>
          <p class="text-slate-600">
            Optimization without purpose leads to longer but meaningless lives. Missing the human element of longevity.
          </p>
        </div>
      </div>
      
      <div class="mt-16 p-8 md:p-12 bg-primary-800 rounded-3xl">
        <p class="text-2xl md:text-3xl leading-relaxed text-white">
          <span class="font-bold">The 100-Year Pulse</span> bridges the gap between 
          <span class="italic opacity-80">Nobel Prize-winning science</span> and <span class="italic opacity-80">ancient wisdom</span>. 
          We don't just help you live longer—we help you live with <span class="font-bold text-accent-400">purpose</span>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
