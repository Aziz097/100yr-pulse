<template>
  <section class="py-24 bg-primary-900 text-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
        <Icon name="i-heroicons-calculator" class="w-4 h-4 text-accent-400" />
        <span class="text-sm font-body font-medium text-white">Interactive Preview</span>
      </div>
      
      <h2 class="text-4xl lg:text-5xl font-heading font-bold mb-4">
        What's Your <span class="text-accent-400">Biological Age</span>?
      </h2>
      <p class="text-xl font-body text-primary-200 mb-12 max-w-2xl mx-auto">
        Take a sneak peek at the assessment inside the book. Complete version includes 50+ data points.
      </p>
      
      <div class="bg-white rounded-3xl p-8 md:p-12 text-left shadow-2xl">
        <!-- Age Calculator Preview -->
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <h3 class="text-xl font-heading font-bold text-slate-800">Quick Assessment</h3>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-body font-medium text-slate-600 mb-2">Chronological Age</label>
                <input 
                  type="number" 
                  v-model="age"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-body"
                  placeholder="Enter your age"
                />
              </div>
              
              <div>
                <label class="block text-sm font-body font-medium text-slate-600 mb-2">Sleep Quality</label>
                <div class="flex gap-2">
                  <button 
                    v-for="option in sleepOptions" 
                    :key="option.value"
                    @click="sleepQuality = option.value"
                    class="flex-1 py-2 px-3 rounded-lg text-sm font-body transition-colors"
                    :class="sleepQuality === option.value 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
                  >
                    {{ option.label }}
                  </button>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-body font-medium text-slate-600 mb-2">Exercise Frequency</label>
                <div class="flex gap-2 flex-wrap">
                  <button 
                    v-for="option in exerciseOptions" 
                    :key="option.value"
                    @click="exerciseFreq = option.value"
                    class="py-2 px-4 rounded-lg text-sm font-body transition-colors"
                    :class="exerciseFreq === option.value 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
                  >
                    {{ option.label }}
                  </button>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-body font-medium text-slate-600 mb-2">Do you have a sense of purpose?</label>
                <div class="flex gap-2">
                  <button 
                    v-for="option in purposeOptions" 
                    :key="option.value"
                    @click="hasPurpose = option.value"
                    class="flex-1 py-2 px-3 rounded-lg text-sm font-body transition-colors"
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
            <p class="text-sm font-body text-slate-500 mb-2">Your Estimated Biological Age</p>
            <div class="text-6xl md:text-7xl font-heading font-bold text-primary-800 mb-2">
              {{ calculatedAge }}
            </div>
            <p class="text-sm font-body text-slate-500 mb-4">years old</p>
            
            <div class="flex items-center gap-2 text-sm">
              <span 
                class="px-3 py-1 rounded-full font-medium"
                :class="ageDiff > 0 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'"
              >
                {{ ageDiff > 0 ? '+' : '' }}{{ ageDiff }} years {{ ageDiff > 0 ? 'older' : 'younger' }} than chronological
              </span>
            </div>
            
            <div class="mt-6 pt-6 border-t border-slate-200 w-full">
              <p class="text-xs font-body text-slate-500 mb-2">Full assessment includes 50+ data points</p>
              <div class="text-2xl font-heading font-bold text-primary-800">Get the book →</div>
            </div>
          </div>
        </div>
      </div>
      
      <p class="mt-8 text-sm text-primary-300 font-body">
        Full biological age assessment included in Chapter 4. Results may vary based on individual factors.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const age = ref(35)
const sleepQuality = ref(3)
const exerciseFreq = ref(2)
const hasPurpose = ref(true)

const sleepOptions = [
  { value: 1, label: 'Poor' },
  { value: 2, label: 'Fair' },
  { value: 3, label: 'Good' },
  { value: 4, label: 'Excellent' }
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

const ageDiff = computed(() => {
  return calculatedAge.value - (age.value || 35)
})
</script>
