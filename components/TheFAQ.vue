<template>
  <section id="faq" class="py-24 bg-light-blue">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="text-4xl font-heading font-bold text-center mb-12">
        Common Questions
      </h2>
      
      <div class="space-y-4">
        <UCard 
          v-for="faq in faqs" 
          :key="faq.id"
          class="overflow-hidden rounded-2xl"
          :ui="{ 
            body: { padding: 'p-0' },
            divide: 'divide-y divide-slate-100'
          }"
        >
          <button 
            @click="toggle(faq.id)" 
            class="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
          >
            <span class="font-heading font-bold text-lg text-slate-800">{{ faq.question }}</span>
            <Icon 
              :name="active === faq.id ? 'i-heroicons-minus' : 'i-heroicons-plus'" 
              class="w-5 h-5 text-primary-600 flex-shrink-0 ml-4"
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
              <div class="px-6 pb-6">
                <p class="font-body text-slate-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </Transition>
        </UCard>
      </div>
      
      <!-- Additional Help -->
      <div class="text-center mt-12 p-8 bg-white rounded-2xl shadow-sm">
        <Icon name="i-heroicons-question-mark-circle" class="w-12 h-12 text-primary-400 mx-auto mb-4" />
        <h3 class="font-heading font-bold text-lg mb-2">Still have questions?</h3>
        <p class="font-body text-slate-600 mb-4">We typically respond within 24 hours.</p>
        <a href="mailto:support@the100yearpulse.com" class="text-primary-700 font-medium hover:underline">
          Email us →
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
