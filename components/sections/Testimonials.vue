<template>
  <section id="testimonials" class="py-24 bg-light-blue relative overflow-hidden" >
    <!-- Background Patterns -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg class="absolute top-[10%] left-[5%] w-12 h-12 text-pink-200/40 transform rotate-12 animate-float" viewBox="0 0 100 100" fill="currentColor">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
           <path d="M70 20 C60 10 90 10 70 20 Z" transform="translate(10, 10)"/>
        </svg>
        <svg class="absolute bottom-[20%] right-[10%] w-10 h-10 text-pink-200/30 transform -rotate-45 animate-float-delayed" viewBox="0 0 100 100" fill="currentColor">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
        <svg class="absolute top-[50%] left-[50%] w-6 h-6 text-pink-200/20 transform rotate-[120deg] animate-float" style="animation-duration: 10s;">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-slate-800">
          Real Results. <span class="text-primary-800">Real Science.</span>
        </h2>
      </div>
      
      <!-- Case Study Comparison -->
      <div class="mb-16 bg-white rounded-3xl overflow-hidden shadow-xl">
        <div class="grid md:grid-cols-2">
          <!-- Sarah -->
          <div class="p-8 md:p-12 border-r border-slate-100">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden shadow-md">
                <img src="/sarah.png" alt="Sarah" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="font-bold text-slate-800">Sarah, 48</p>
                <p class="text-sm text-slate-500">Silicon Valley Executive</p>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-4 text-slate-800">The High-Performance Protocol</h3>
            <ul class="space-y-3 text-slate-600 mb-6">
              <li class="flex items-center gap-3">
                <Icon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-green-500" />
                <span>Autophagy window optimization</span>
              </li>
              <li class="flex items-center gap-3">
                <Icon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-green-500" />
                <span>Circadian-aligned work schedule</span>
              </li>
              <li class="flex items-center gap-3">
                <Icon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-green-500" />
                <span>Purpose audit implementation</span>
              </li>
            </ul>
            <div class="p-4 bg-primary-50 rounded-xl border-l-4 border-primary-600">
              <p class="text-primary-800 italic">"I have more energy at 48 than I did at 30. This framework changed everything."</p>
            </div>
          </div>
          
          <!-- Okinawa Centenarian -->
          <div class="p-8 md:p-12 bg-slate-50">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden shadow-md">
                <img src="/taro.png" alt="Taro" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="font-bold text-slate-800">Taro, 94</p>
                <p class="text-sm text-slate-500">Okinawa Centenarian</p>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-4 text-slate-800">The Ikigai Framework</h3>
            <ul class="space-y-3 text-slate-600 mb-6">
              <li class="flex items-center gap-3">
                <Icon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-green-500" />
                <span>Daily purposeful activity</span>
              </li>
              <li class="flex items-center gap-3">
                <Icon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-green-500" />
                <span>Social connection rituals</span>
              </li>
              <li class="flex items-center gap-3">
                <Icon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-green-500" />
                <span>Traditional diet patterns</span>
              </li>
            </ul>
            <div class="p-4 bg-accent-50 rounded-xl border-l-4 border-accent-500">
              <p class="text-accent-800 italic">"I still fish every morning. That's my medicine. That's my purpose."</p>
            </div>
          </div>
        </div>
        <div class="p-6 bg-primary-800 text-white text-center">
          <p class="text-lg">
            <strong class="font-bold">The Insight:</strong> Both approaches lead to the same destination—biological youth. 
            One through molecular optimization, one through purpose. <br />
            <span class="text-primary-200">The 100-Year Pulse combines both into one integrated framework.</span>
          </p>
        </div>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="card p-8 bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center gap-1 mb-6">
            <Icon v-for="i in 5" :key="i" name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
          </div>
          <p class="text-slate-600 mb-6 italic leading-relaxed">"{{ testimonial.text }}"</p>
          <div class="flex items-center gap-4 border-t border-slate-50 pt-6">
            <div class="w-12 h-12 rounded-full overflow-hidden shadow-sm shrink-0">
              <img :src="testimonial.image" :alt="testimonial.name" class="w-full h-full object-cover" />
            </div>
            <div>
              <p class="font-bold text-sm text-slate-800">{{ testimonial.name }}</p>
              <p class="text-xs text-slate-500">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Tech Founder, 42',
    text: 'Finally, a longevity book that doesnt just give me a list of supplements. The Ikigai framework alone was worth 10x the price.',
    image: '/michael.png'
  },
  {
    name: 'Dr. Amanda Ross',
    role: 'Physician, 38',
    text: 'As a doctor, Im skeptical of health products. This book is scientifically rigorous while remaining accessible. A rare combination.',
    image: '/amanda.png'
  },
  {
    name: 'James Wilson',
    role: 'Executive, 55',
    text: 'I reduced my biological age by 8 years in 6 months following the mitochondrial protocol. My bloodwork confirms it.',
    image: '/james.png'
  }
]
</script>
