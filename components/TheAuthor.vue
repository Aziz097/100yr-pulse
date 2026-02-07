<template>
  <section id="author" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Author Photo -->
        <div class="relative" v-motion-slide-visible-left>
          <div class="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <div class="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <Icon name="i-heroicons-user" class="w-16 h-16 text-primary-400" />
                </div>
                <p class="font-body text-slate-500">Author Photo</p>
              </div>
            </div>
          </div>
          <!-- Credentials badge -->
          <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <Icon name="i-heroicons-academic-cap" class="w-6 h-6 text-primary-700" />
              </div>
              <div>
                <p class="text-xs font-body text-slate-500">Credentials</p>
                <p class="font-bold font-heading text-slate-800">PhD / Researcher</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Author Bio -->
        <div v-motion-slide-visible-right>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
            <Icon name="i-heroicons-star" class="w-4 h-4 text-accent-500" />
            <span class="text-sm font-body font-medium text-primary-800">About the Author</span>
          </div>
          
          <h2 class="text-4xl font-heading font-bold mt-4 mb-6">
            Bridging <span class="text-primary-600">Science</span> and <span class="text-accent-500">Wisdom</span>
          </h2>
          
          <div class="space-y-4 font-body text-slate-600 leading-relaxed">
            <p>
              After 15 years researching cellular aging at leading institutions, I discovered a critical gap 
              in the longevity space: we had the science, but we were missing the soul.
            </p>
            <p>
              This book is the culmination of my research at the intersection of molecular biology 
              and purpose-driven living. It's not just about adding years to your life—it's about 
              adding life to your years.
            </p>
            <p>
              My work has been featured in leading publications and I've helped thousands of people 
              reverse their biological age by 5-15 years through evidence-based protocols.
            </p>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-slate-100">
            <div class="text-center">
              <p class="text-4xl font-heading font-bold text-primary-800">15+</p>
              <p class="text-sm font-body text-slate-500">Years Research</p>
            </div>
            <div class="text-center">
              <p class="text-4xl font-heading font-bold text-primary-800">5K+</p>
              <p class="text-sm font-body text-slate-500">Students Helped</p>
            </div>
            <div class="text-center">
              <p class="text-4xl font-heading font-bold text-primary-800">-12</p>
              <p class="text-sm font-body text-slate-500">Avg. Bio Age Reduced</p>
            </div>
          </div>
          
          <!-- Social Proof -->
          <div class="flex items-center gap-4 mt-8">
            <div class="flex -space-x-2">
              <div class="w-10 h-10 rounded-full bg-slate-200 border-2 border-white"></div>
              <div class="w-10 h-10 rounded-full bg-slate-300 border-2 border-white"></div>
              <div class="w-10 h-10 rounded-full bg-slate-400 border-2 border-white"></div>
            </div>
            <p class="text-sm font-body text-slate-600">
              <strong>500+</strong> 5-star reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
