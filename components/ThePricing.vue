<template>
  <section id="pricing" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16" v-motion-fade-visible>
        <h2 class="text-4xl lg:text-5xl font-heading font-bold">
          Invest in Your <span class="text-primary-800">Longest Asset</span>
        </h2>
        <p class="text-xl font-body text-slate-600 mt-4">
          One-time payment. Lifetime access. Immediate results.
        </p>
      </div>
      
      <!-- Primary Pricing Card -->
      <div class="max-w-xl mx-auto" v-motion-slide-visible-up>
        <div class="relative bg-light-blue rounded-3xl overflow-hidden shadow-xl">
          <!-- Best Value Badge -->
          <div class="absolute top-0 right-0 bg-accent-500 text-white text-sm font-bold px-4 py-2 rounded-bl-xl z-10">
            BEST VALUE
          </div>
          
          <div class="p-8 md:p-10 text-center border-b border-primary-100">
            <h3 class="text-2xl font-heading font-bold mb-2">The Complete Package</h3>
            <p class="font-body text-slate-600 mb-6">
              Everything you need to start your longevity journey
            </p>
            
            <div class="flex items-center justify-center gap-3 mb-6">
              <span class="text-6xl font-heading font-bold text-primary-800">$29</span>
              <div class="text-left">
                <span class="text-lg text-slate-400 line-through">$49</span>
                <p class="text-sm text-slate-500">USD</p>
              </div>
            </div>
            
            <a 
              href="https://gumroad.com/l/the100yearpulse" 
              target="_blank"
              rel="noopener"
              class="btn-primary w-full py-4 text-lg cta-button"
            >
              <Icon name="i-heroicons-lock-closed" class="w-5 h-5 mr-2" />
              Get Instant Access
            </a>
            
            <div class="flex items-center justify-center gap-6 mt-4">
              <div class="flex items-center gap-2">
                <Icon name="i-heroicons-shield-check" class="w-5 h-5 text-green-500" />
                <span class="text-sm font-body text-slate-500">30-Day Guarantee</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="i-heroicons-clock" class="w-5 h-5 text-primary-600" />
                <span class="text-sm font-body text-slate-500">Instant Delivery</span>
              </div>
            </div>
          </div>
          
          <div class="p-8 md:p-10 space-y-4">
            <h4 class="font-heading font-bold mb-4 text-lg">What's Included:</h4>
            <div 
              v-for="feature in features" 
              :key="feature"
              class="flex items-center gap-3"
            >
              <Icon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-green-500 flex-shrink-0" />
              <span class="font-body text-slate-700">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Trust Badges -->
      <div class="flex flex-wrap justify-center gap-8 mt-12">
        <div class="flex items-center gap-2">
          <Icon name="i-heroicons-shield-check" class="w-6 h-6 text-green-500" />
          <span class="text-sm font-body text-slate-500">Secure Checkout</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded bg-primary-800 flex items-center justify-center">
            <span class="text-[8px] font-bold text-white">VISA</span>
          </div>
          <span class="text-sm font-body text-slate-500">Cards</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="i-bi-apple" class="w-6 h-6 text-slate-600" />
          <span class="text-sm font-body text-slate-500">Apple Pay</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="i-bi-google" class="w-6 h-6 text-slate-600" />
          <span class="text-sm font-body text-slate-500">Google Pay</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="i-bi-paypal" class="w-6 h-6 text-slate-600" />
          <span class="text-sm font-body text-slate-500">PayPal</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  '320-page PDF Ebook (optimized for mobile reading)',
  'EPUB format (works on Kindle, Kobo, iPad)',
  'Audio version (listen while commuting)',
  'Chapter-by-chapter action checklists',
  'Biological Age Self-Assessment Tool (50+ data points)',
  '30-Day Implementation Journal',
  'Lifetime free updates as science evolves',
  'Access to private community (coming soon)'
]
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
