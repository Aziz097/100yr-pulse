<template>
  <header 
    class="fixed top-4 left-4 right-4 z-50 transition-all duration-300 mx-auto max-w-7xl rounded-full border border-white/20"
    :class="isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-white/50 backdrop-blur-sm py-4'"
  >
    <nav class="px-6 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="relative w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center overflow-hidden">
          <Icon name="i-heroicons-heart" class="w-5 h-5 text-white" />
        </div>
        <span class="font-heading font-bold text-lg text-slate-800">
          The 100-Year <span class="text-primary-600">Pulse</span>
        </span>
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-8">
        <a 
          href="#pillars" 
          class="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
        >
          The Framework
        </a>
        <a 
          href="#author" 
          class="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
        >
          Author
        </a>
        <a 
          href="#testimonials" 
          class="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
        >
          Results
        </a>
        <a 
          href="#pricing" 
          class="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
        >
          Pricing
        </a>
      </div>
      
      <!-- CTA Button -->
      <div class="hidden lg:block">
        <a 
          href="#pricing"
          class="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-full hover:bg-primary-700 transition-colors"
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
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100"
      >
        <div class="flex flex-col p-4 space-y-2">
          <a 
            href="#pillars" 
            @click="isMobileMenuOpen = false"
            class="px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
          >
            The Framework
          </a>
          <a 
            href="#author" 
            @click="isMobileMenuOpen = false"
            class="px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
          >
            Author
          </a>
          <a 
            href="#testimonials" 
            @click="isMobileMenuOpen = false"
            class="px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
          >
            Results
          </a>
          <a 
            href="#pricing" 
            @click="isMobileMenuOpen = false"
            class="px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#pricing"
            @click="isMobileMenuOpen = false"
            class="px-4 py-3 bg-primary-600 text-white text-center font-semibold rounded-full mt-2"
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
    isScrolled.value = window.scrollY > 10
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

const route = useRoute()
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})
</script>
