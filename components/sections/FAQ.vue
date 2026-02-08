<template>
  <section id="faq" class="py-24 bg-light-blue relative overflow-hidden">
    <!-- Background Patterns -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg class="absolute top-[20%] left-[5%] w-10 h-10 text-pink-200/40 transform rotate-12 animate-float" viewBox="0 0 100 100" fill="currentColor">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
           <path d="M70 20 C60 10 90 10 70 20 Z" transform="translate(10, 10)"/>
        </svg>
        <svg class="absolute bottom-[20%] right-[10%] w-16 h-16 text-pink-200/30 transform -rotate-45 animate-float-delayed" viewBox="0 0 100 100" fill="currentColor">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
        <svg class="absolute top-[5%] right-[20%] w-6 h-6 text-pink-200/20 transform rotate-[100deg] animate-float" style="animation-duration: 9s;">
           <path d="M50 50 C20 20 20 80 50 50 C80 80 80 20 50 50 Z" />
        </svg>
    </div>

    <div class="max-w-3xl mx-auto px-6 relative z-10">
      <h2 class="text-4xl font-bold text-center mb-12 text-slate-800">
        Common Questions
      </h2>
      
      <div class="space-y-4">
        <div v-for="faq in faqs" :key="faq.id" class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <button 
            @click="toggle(faq.id)" 
            class="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
          >
            <span class="font-bold text-lg text-slate-800">{{ faq.question }}</span>
            <Icon 
              :name="active === faq.id ? 'i-heroicons-minus-circle' : 'i-heroicons-plus-circle'" 
              class="w-6 h-6 flex-shrink-0 ml-4 transition-colors"
              :class="active === faq.id ? 'text-primary-600' : 'text-slate-400'"
            />
          </button>
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="active === faq.id" class="overflow-hidden">
              <div class="px-6 pb-6 pt-0">
                <p class="text-slate-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      
      <!-- Additional Help -->
      <div class="mt-12 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-2xl mx-auto">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
            <Icon name="i-heroicons-chat-bubble-left-right" class="w-6 h-6 text-primary-600" />
          </div>
          <div class="text-left">
            <h3 class="font-bold text-slate-800">Still have questions?</h3>
            <p class="text-sm text-slate-500">We typically respond within 24 hours.</p>
          </div>
        </div>
        <a href="mailto:support@the100yearpulse.com" class="shrink-0 px-6 py-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:bg-slate-50 hover:text-primary-600 transition-colors font-medium text-sm">
          Contact Support
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const active = ref<number | null>(1)

const toggle = (id: number) => {
  active.value = active.value === id ? null : id
}

const faqs = [
  {
    id: 1,
    question: "Is this suitable for beginners?",
    answer: "Absolutely. The book starts with foundational concepts before building to advanced protocols. Whether you're completely new to longevity science or a seasoned biohacker, you'll find value. Each chapter builds on the previous one, and we provide a 'Getting Started' quick-start guide at the beginning."
  },
  {
    id: 2,
    question: "How is this different from other longevity books?",
    answer: "Most longevity books focus on either the science (without actionable steps) or the lifestyle (without scientific backing). This book uniquely integrates molecular biochemistry with Ikigai philosophy—the only book that addresses both the cellular and the purpose-driven aspects of aging."
  },
  {
    id: 3,
    question: "Do I need to take expensive supplements?",
    answer: "No. While certain supplements can accelerate results, the core framework focuses on lifestyle interventions that are completely free—circadian rhythm optimization, fasting windows, exercise protocols, and purpose discovery. We provide a supplement guide for those who want to optimize further, but it's entirely optional."
  },
  {
    id: 4,
    question: "What formats are included?",
    answer: "You'll receive a beautifully designed PDF (optimized for mobile reading with reflowable text), an EPUB file for e-readers, and an MP3 audio version for listening while commuting or exercising. All formats are included in the one-time purchase price."
  },
  {
    id: 5,
    question: "Is there a money-back guarantee?",
    answer: "Yes. Try the first two chapters completely risk-free. If you don't feel the content is worth 10x the price, email us within 30 days for a full refund. No questions asked. We believe in our product and want you to be completely satisfied."
  },
  {
    id: 6,
    question: "How long does it take to see results?",
    answer: "Many readers report feeling more energetic within the first week of implementing the sleep and exercise protocols. Biological age improvements typically become measurable after 30-60 days of consistent practice. The Ikigai discovery process may take longer as it involves deeper self-reflection."
  }
]
</script>
