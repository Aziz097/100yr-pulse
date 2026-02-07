<template>
  <section class="py-20 bg-primary-800 text-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div v-motion-fade-visible>
        <Icon name="i-heroicons-envelope" class="w-12 h-12 text-accent-400 mx-auto mb-6" />
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
          Get Free Longevity Tips
        </h2>
        <p class="text-lg font-body text-primary-200 mb-8 max-w-xl mx-auto">
          Join 10,000+ subscribers receiving science-backed longevity insights. 
          No spam, unsubscribe anytime.
        </p>
        
        <form @submit.prevent="subscribe" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            v-model="email"
            type="email" 
            placeholder="Enter your email" 
            required
            class="flex-1 px-6 py-4 rounded-full text-slate-800 font-body focus:ring-2 focus:ring-accent-400 focus:outline-none"
          />
          <button 
            type="submit"
            :disabled="loading"
            class="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-heading font-bold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon v-if="loading" name="i-heroicons-arrow-path" class="w-5 h-5 animate-spin" />
            <span v-else>Subscribe</span>
          </button>
        </form>
        
        <p v-if="message" :class="['mt-4 text-sm font-body', success ? 'text-green-300' : 'text-red-300']">
          {{ message }}
        </p>
        
        <p class="mt-6 text-xs text-primary-300 font-body">
          We respect your inbox. Your email is never shared.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')
const loading = ref(false)
const message = ref('')
const success = ref(false)

const subscribe = async () => {
  if (!email.value) return
  
  loading.value = true
  message.value = ''
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    success.value = true
    message.value = 'Thanks for subscribing! Check your inbox for confirmation.'
    email.value = ''
  } catch (error) {
    success.value = false
    message.value = 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>
