<template>
  <section class="py-24 bg-white relative overflow-hidden" id="author">
    <!-- Background Patterns -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <!-- Sakura Petals -->
       <svg class="absolute top-0 right-0 w-64 h-64 text-pink-100/50 opacity-50 transform rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
          <path d="M70 20 C60 10 90 10 70 20 Z" transform="translate(10, 10)"/>
          <path d="M30 60 C20 70 40 70 30 60 Z" transform="translate(-10, 20)"/>
       </svg>
       <svg class="absolute bottom-0 left-0 w-96 h-96 text-pink-50 opacity-40 transform -rotate-12" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 100 Q60 60 70 120 T100 100 Z" />
          <path d="M150 50 Q120 20 130 80 T150 50 Z" />
       </svg>
       <!-- Floating Random Petals -->
        <svg class="absolute top-[30%] left-[10%] w-8 h-8 text-pink-300/40 transform rotate-[45deg] animate-float" style="animation-duration: 6s;">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
        <svg class="absolute bottom-[40%] right-[15%] w-6 h-6 text-pink-200/50 transform -rotate-[20deg] animate-float-delayed" style="animation-duration: 8s;">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
        <svg class="absolute top-[10%] left-[40%] w-5 h-5 text-pink-200/30 transform rotate-[90deg] animate-float" style="animation-duration: 10s;">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Author Photo -->
        <div class="relative">
          <div class="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group">
            <div class="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            <img src="/author.png" alt="Dr. Kenji Tanaka" class="w-full h-full object-cover" />
          </div>
          <!-- Credentials badge -->
          <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 flex items-center gap-3 animate-bounce-slow">
            <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
              <Icon name="i-heroicons-academic-cap" class="w-6 h-6 text-primary-700" />
            </div>
            <div>
               <p class="text-xs text-slate-500 uppercase tracking-wide">Credentials</p>
               <p class="font-bold text-slate-800">PhD / Molecular Biology</p>
            </div>
          </div>
        </div>
        
        <!-- Author Bio -->
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full mb-6 border border-pink-100">
            <Icon name="i-heroicons-sparkles" class="w-4 h-4 text-pink-500" />
            <span class="text-sm font-medium text-pink-800">About the Author</span>
          </div>
          
          <h2 class="text-4xl font-bold mt-4 mb-2 text-slate-800">
            Dr. Kenji Tanaka
          </h2>
          <p class="text-xl text-primary-600 mb-6 font-serif italic">Bridging Molecular Science & Ancient Wisdom</p>
          
          <div class="space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>
              "We used to think aging was inevitable. Now we know it's a disease we can treat."
            </p>
            <p>
              After 20 years at the Tokyo Institute of Gerontology, I realized that while Western medicine excels at acute care, it often misses the holistic picture.
            </p>
            <p>
              This book is the synthesis of my laboratory research on autophagy and my fieldwork in Okinawa's Blue Zones. It's the manual I wish I had 20 years ago.
            </p>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-slate-100">
            <div class="text-center">
              <p class="text-4xl font-bold text-primary-800 font-heading">20+</p>
              <p class="text-sm text-slate-500">Years Research</p>
            </div>
            <div class="text-center">
              <p class="text-4xl font-bold text-primary-800">5K+</p>
              <p class="text-sm text-slate-500">Students Helped</p>
            </div>
            <div class="text-center">
              <p class="text-4xl font-bold text-primary-800">-12</p>
              <p class="text-sm text-slate-500">Avg. Bio Age Reduced</p>
            </div>
          </div>
          
          <!-- Social Proof -->
          <div class="flex items-center gap-4 mt-8">
            <div class="flex -space-x-2">
              <div class="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                <img src="/michael.png" alt="User" class="w-full h-full object-cover" />
              </div>
              <div class="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                <img src="/amanda.png" alt="User" class="w-full h-full object-cover" />
              </div>
              <div class="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                <img src="/james.png" alt="User" class="w-full h-full object-cover" />
              </div>
            </div>
            <p class="text-sm text-slate-600">
              <span class="font-bold">500+</span> 5-star reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
