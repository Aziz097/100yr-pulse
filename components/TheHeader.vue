<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
        : 'bg-transparent py-5'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <div class="w-10 h-10 rounded-lg bg-primary-800 flex items-center justify-center">
          <Icon name="i-heroicons-heart" class="w-5 h-5 text-white" />
        </div>
        <span 
          class="font-heading font-bold text-lg transition-colors duration-300"
          :class="isScrolled ? 'text-slate-800' : 'text-slate-800'"
        >
          The 100-Year Pulse
        </span>
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-8">
        <a 
          href="#pillars" 
          class="text-sm font-body font-medium transition-colors duration-200"
          :class="isScrolled ? 'text-slate-600 hover:text-primary-800' : 'text-slate-600 hover:text-primary-800'"
        >
          The Framework
        </a>
        <a 
          href="#author" 
          class="text-sm font-body font-medium transition-colors duration-200"
          :class="isScrolled ? 'text-slate-600 hover:text-primary-800' : 'text-slate-600 hover:text-primary-800'"
        >
          Author
        </a>
        <a 
          href="#testimonials" 
          class="text-sm font-body font-medium transition-colors duration-200"
          :class="isScrolled ? 'text-slate-600 hover:text-primary-800' : 'text-slate-600 hover:text-primary-800'"
        >
          Results
        </a>
        <a 
          href="#pricing" 
          class="text-sm font-body font-medium transition-colors duration-200"
          :class="isScrolled ? 'text-slate-600 hover:text-primary-800' : 'text-slate-600 hover:text-primary-800'"
        >
          Pricing
        </a>
      </div>
      
      <!-- CTA Button -->
      <div class="hidden lg:block">
        <a 
          href="#pricing"
          class="btn-primary cta-button"
        >
          Get the Book
        </a>
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
      >
        <Icon 
          :name="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" 
          class="w-6 h-6 text-slate-700" 
        />
      </button>
    </nav>
    
    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100"
      >
        <div class="flex flex-col p-6 space-y-4">
          <a 
            href="#pillars" 
            @click="isMobileMenuOpen = false"
            class="text-lg font-body font-medium text-slate-700 py-2"
          >
            The Framework
          </a>
          <a 
            href="#author" 
            @click="isMobileMenuOpen = false"
            class="text-lg font-body font-medium text-slate-700 py-2"
          >
            Author
          </a>
          <a 
            href="#testimonials" 
            @click="isMobileMenuOpen = false"
            class="text-lg font-body font-medium text-slate-700 py-2"
          >
            Results
          </a>
          <a 
            href="#pricing" 
            @click="isMobileMenuOpen = false"
            class="text-lg font-body font-medium text-slate-700 py-2"
          >
            Pricing
          </a>
          <a 
            href="#pricing"
            @click="isMobileMenuOpen = false"
            class="btn-primary text-center mt-4"
          >
            Get the Book
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})
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
    box-shadow: 0 0 0 8px rgba(30, 64, 175, 0);
  }
}
</style>
