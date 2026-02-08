<template>
  <footer class="bg-primary-950 text-white py-24 pb-12 overflow-hidden relative">
    <!-- Decorative -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-64 bg-primary-800/30 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Top Section: CTA -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 pb-20 border-b border-primary-900">
        <div>
           <h2 class="text-3xl md:text-4xl font-heading font-black tracking-tight mb-2 text-accent-400">Ready to rewrite your biology?</h2>
           <p class="text-primary-300">Join thousands of others on the path to 100.</p>
        </div>
        <a href="#pricing" class="px-8 py-4 bg-white text-primary-950 font-bold rounded-full hover:bg-primary-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Get the Book — $29
        </a>
      </div>

      <div class="grid md:grid-cols-12 gap-12 pt-16 mb-16">
        <!-- Brand -->
        <div class="md:col-span-5 space-y-6">
          <div class="flex items-center gap-3">
             <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <Icon name="i-heroicons-heart" class="w-6 h-6 text-primary-600" />
             </div>
             <span class="text-2xl font-heading font-bold">The 100-Year Pulse</span>
          </div>
          <p class="text-primary-300 leading-relaxed max-w-sm">
             The first longevity framework to bridge molecular science with the psychology of purpose. Stop aging. Start living.
          </p>
          <div class="flex gap-4">
             <a href="#" class="w-10 h-10 rounded-full border border-primary-800 flex items-center justify-center hover:bg-white hover:text-primary-950 transition-all hover:-translate-y-1">
                <Icon name="i-bi-twitter-x" class="w-4 h-4" />
             </a>
             <a href="#" class="w-10 h-10 rounded-full border border-primary-800 flex items-center justify-center hover:bg-white hover:text-primary-950 transition-all hover:-translate-y-1">
                <Icon name="i-bi-instagram" class="w-4 h-4" />
             </a>
             <a href="#" class="w-10 h-10 rounded-full border border-primary-800 flex items-center justify-center hover:bg-white hover:text-primary-950 transition-all hover:-translate-y-1">
                <Icon name="i-bi-youtube" class="w-4 h-4" />
             </a>
          </div>
        </div>
        
        <!-- Links -->
        <div class="md:col-span-2 md:col-start-7">
          <h4 class="font-bold text-lg mb-6 text-white">Explore</h4>
          <ul class="space-y-4 text-primary-300">
            <li><a href="#pillars" class="hover:text-white hover:translate-x-1 transition-all inline-block">The Framework</a></li>
            <li><a href="#author" class="hover:text-white hover:translate-x-1 transition-all inline-block">Author</a></li>
            <li><a href="#testimonials" class="hover:text-white hover:translate-x-1 transition-all inline-block">Results</a></li>
            <li><a href="#pricing" class="hover:text-white hover:translate-x-1 transition-all inline-block">Pricing</a></li>
          </ul>
        </div>
        
        <div class="md:col-span-2">
          <h4 class="font-bold text-lg mb-6 text-white">Legal</h4>
          <ul class="space-y-4 text-primary-300">
            <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">Privacy</a></li>
            <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">Terms</a></li>
            <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">Refunds</a></li>
          </ul>
        </div>
        
        <div class="md:col-span-2">
           <h4 class="font-bold text-lg mb-6 text-white">Contact</h4>
           <p class="text-primary-300 mb-2">support@100yearpulse.com</p>
           <p class="text-primary-300">1-800-LONGEVITY</p>
        </div>
      </div>
      
      <!-- Bottom -->
      <div class="border-t border-primary-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-500">
         <p>© {{ currentYear }} The 100-Year Pulse LLC.</p>
         <p>Designed for Biology.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
