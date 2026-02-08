<template>
  <section class="py-24 bg-primary-900 text-white overflow-hidden">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
        <Icon name="i-heroicons-calculator" class="w-4 h-4 text-accent-400" />
        <span class="text-sm font-medium text-white">Interactive Preview</span>
      </div>
      
      <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-white">
        What's Your <span class="text-accent-400">Biological Age</span>?
      </h2>
      <p class="text-xl text-primary-200 mb-12 max-w-2xl mx-auto">
        Take a sneak peek at the assessment inside the book. Complete version includes 50+ data points.
      </p>
      
      <div class="bg-white rounded-3xl p-8 md:p-12 text-left shadow-2xl">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-slate-800">Quick Assessment</h3>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-slate-600 mb-2">Chronological Age</label>
                <input 
                  type="number" 
                  v-model="age"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your age"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-slate-600 mb-2">Sleep Quality</label>
                <div class="flex gap-2">
                  <button 
                    v-for="option in sleepOptions" 
                    :key="option.value"
                    @click="sleepQuality = option.value"
                    class="flex-1 py-2 px-3 rounded-lg text-sm transition-colors relative group"
                    :class="sleepQuality === option.value 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
                  >
                    {{ option.label }}
                    <!-- Tooltip -->
                    <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                      {{ option.tooltip }}
                      <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                    </div>
                  </button>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-slate-600 mb-2">Exercise Frequency</label>
                <div class="flex gap-2 flex-wrap">
                  <button 
                    v-for="option in exerciseOptions" 
                    :key="option.value"
                    @click="exerciseFreq = option.value"
                    class="py-2 px-4 rounded-lg text-sm transition-colors"
                    :class="exerciseFreq === option.value 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
                  >
                    {{ option.label }}
                  </button>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-slate-600 mb-2">Do you have a sense of purpose?</label>
                <div class="flex gap-2">
                  <button 
                    v-for="option in purposeOptions" 
                    :key="option.value"
                    @click="hasPurpose = option.value"
                    class="flex-1 py-2 px-3 rounded-lg text-sm transition-colors"
                    :class="hasPurpose === option.value 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
                  >
                    {{ option.label }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col justify-center items-center text-center bg-primary-50 rounded-2xl p-8">
            <p class="text-sm text-slate-500 mb-2">Your Estimated Biological Age</p>
            <div class="text-6xl md:text-7xl font-bold text-primary-800 mb-2">
              {{ Math.round(displayAge) }}
            </div>
            <p class="text-sm text-slate-500 mb-4">years old</p>
            
            <div class="flex items-center gap-2 text-sm">
              <span 
                class="px-3 py-1 rounded-full font-medium"
                :class="ageDiff > 0 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'"
              >
                {{ ageDiff > 0 ? '+' : '' }}{{ ageDiff }} years {{ ageDiff > 0 ? 'older' : 'younger' }} than chronological
              </span>
            </div>
            
            <div class="mt-6 pt-6 border-t border-slate-200 w-full">
              <p class="text-xs text-slate-500 mb-2">Full assessment includes 50+ data points</p>
              <div class="text-2xl font-bold text-primary-800">Get the book →</div>
            </div>
          </div>
        </div>
      </div>
      
      <p class="mt-8 text-sm text-primary-300">
        Full biological age assessment included in Chapter 4. Results may vary based on individual factors.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTransition } from '@vueuse/core'

const age = ref(35)
const sleepQuality = ref(3)
const exerciseFreq = ref(2)
const hasPurpose = ref(true)

const sleepOptions = [
  { value: 1, label: 'Poor', tooltip: 'Less than 5 hours' },
  { value: 2, label: 'Fair', tooltip: '5-6 hours' },
  { value: 3, label: 'Good', tooltip: '7-8 hours' },
  { value: 4, label: 'Excellent', tooltip: '8+ hours high quality' }
]

const exerciseOptions = [
  { value: 1, label: 'Rarely' },
  { value: 2, label: '1-2x/week' },
  { value: 3, label: '3-4x/week' },
  { value: 4, label: 'Daily' }
]

const purposeOptions = [
  { value: true, label: 'Yes' },
  { value: false, label: 'No' }
]

const calculatedAge = computed(() => {
  const baseAge = age.value || 35
  const sleepFactor = (4 - sleepQuality.value) * 2
  const exerciseFactor = (4 - exerciseFreq.value) * 1.5
  const purposeFactor = hasPurpose.value ? -2 : 3
  return Math.round(baseAge + sleepFactor + exerciseFactor + purposeFactor)
})

const displayAge = useTransition(calculatedAge, {
  duration: 800,
  transition: [0.25, 0.8, 0.25, 1] // cubic-bezier(0.25, 0.8, 0.25, 1) easeOutQuad-ish
})

const ageDiff = computed(() => {
  return Math.round(displayAge.value) - (age.value || 35)
})
</script>
