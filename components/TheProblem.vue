<template>
  <section class="py-24 bg-white relative">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div v-motion-fade-visible>
        <h2 class="text-4xl lg:text-5xl font-heading font-bold mb-8">
          The Longevity Industry is <span class="text-accent-500">Broken</span>
        </h2>
        
        <p class="text-xl font-body text-slate-600 mb-16 max-w-2xl mx-auto">
          Most longevity content fails because it either oversimplifies the science or ignores the human element. You deserve better.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8" v-motion-staggered-fade-visible>
        <div class="card p-8 text-left">
          <div class="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
            <Icon name="i-heroicons-beaker" class="w-7 h-7 text-primary-700" />
          </div>
          <h3 class="text-xl font-heading font-bold mb-3">Too Scientific</h3>
          <p class="font-body text-slate-600">
            Research papers that never translate into real life advice. Dense jargon without actionable steps.
          </p>
        </div>
        
        <div class="card p-8 text-left">
          <div class="w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center mb-6">
            <Icon name="i-heroicons-sparkles" class="w-7 h-7 text-accent-600" />
          </div>
          <h3 class="text-xl font-heading font-bold mb-3">Too Simplistic</h3>
          <p class="font-body text-slate-600">
            "Drink more water" advice that ignores molecular mechanisms. Surface-level tips that don't move the needle.
          </p>
        </div>
        
        <div class="card p-8 text-left">
          <div class="w-14 h-14 rounded-2xl bg-primary-800 flex items-center justify-center mb-6">
            <Icon name="i-heroicons-face-frown" class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-xl font-heading font-bold mb-3">Too Hollow</h3>
          <p class="font-body text-slate-600">
            Optimization without purpose leads to longer but meaningless lives. Missing the human element of longevity.
          </p>
        </div>
      </div>
      
      <div class="mt-16 p-8 md:p-12 bg-light-blue rounded-3xl" v-motion-fade-visible>
        <p class="text-2xl md:text-3xl font-body leading-relaxed">
          <span class="font-bold text-primary-800">The 100-Year Pulse</span> bridges the gap between 
          <span class="italic">Nobel Prize-winning science</span> and <span class="italic">ancient wisdom</span>. 
          We don't just help you live longer—we help you live with <span class="font-bold text-accent-500">purpose</span>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
