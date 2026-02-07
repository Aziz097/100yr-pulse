<template>
  <section id="testimonials" class="py-24 bg-light-blue">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-heading font-bold">
          Real Results. <span class="text-primary-800">Real Science.</span>
        </h2>
      </div>
      
      <!-- Case Study Comparison -->
      <div class="mb-16 bg-white rounded-3xl overflow-hidden shadow-xl">
        <div class="grid md:grid-cols-2">
          <!-- Silicon Valley Executive -->
          <div class="p-8 md:p-12 border-r border-slate-100">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <Icon name="i-heroicons-user" class="w-8 h-8 text-primary-700" />
              </div>
              <div>
                <p class="font-bold font-heading">Sarah, 48</p>
                <p class="text-sm font-body text-slate-500">Silicon Valley Executive</p>
              </div>
            </div>
            <h3 class="text-xl font-heading font-bold mb-4">The High-Performance Protocol</h3>
            <ul class="space-y-3 font-body text-slate-600 mb-6">
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
              <p class="font-body text-primary-800 italic">"I have more energy at 48 than I did at 30. This framework changed everything."</p>
            </div>
          </div>
          
          <!-- Okinawa Centenarian -->
          <div class="p-8 md:p-12 bg-slate-50">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                <Icon name="i-heroicons-user" class="w-8 h-8 text-accent-700" />
              </div>
              <div>
                <p class="font-bold font-heading">Taro, 94</p>
                <p class="text-sm font-body text-slate-500">Okinawa Centenarian</p>
              </div>
            </div>
            <h3 class="text-xl font-heading font-bold mb-4">The Ikigai Framework</h3>
            <ul class="space-y-3 font-body text-slate-600 mb-6">
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
              <p class="font-body text-accent-800 italic">"I still fish every morning. That's my medicine. That's my purpose."</p>
            </div>
          </div>
        </div>
        <div class="p-6 bg-gradient-to-r from-primary-800 to-primary-900 text-white text-center">
          <p class="font-body text-lg">
            <strong>The Insight:</strong> Both approaches lead to the same destination—biological youth. 
            One through molecular optimization, one through purpose. <br />
            <span class="text-primary-200">The 100-Year Pulse combines both into one integrated framework.</span>
          </p>
        </div>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="card p-6">
          <div class="flex items-center gap-1 mb-4">
            <Icon v-for="i in 5" :key="i" name="i-heroicons-star-solid" class="w-5 h-5 text-yellow-400" />
          </div>
          <p class="font-body text-slate-600 mb-4">"{{ testimonial.text }}"</p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
              <Icon name="i-heroicons-user" class="w-5 h-5 text-slate-500" />
            </div>
            <div>
              <p class="font-bold font-heading text-sm">{{ testimonial.name }}</p>
              <p class="text-xs text-slate-500 font-body">{{ testimonial.role }}</p>
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
    text: 'Finally, a longevity book that doesnt just give me a list of supplements. The Ikigai framework alone was worth 10x the price.'
  },
  {
    name: 'Dr. Amanda Ross',
    role: 'Physician, 38',
    text: 'As a doctor, Im skeptical of health products. This book is scientifically rigorous while remaining accessible. A rare combination.'
  },
  {
    name: 'James Wilson',
    role: 'Executive, 55',
    text: 'I reduced my biological age by 8 years in 6 months following the mitochondrial protocol. My bloodwork confirms it.'
  }
]
</script>
