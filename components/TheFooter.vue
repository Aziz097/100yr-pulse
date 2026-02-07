<template>
  <footer class="bg-primary-950 text-white py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-lg bg-primary-800 flex items-center justify-center">
              <Icon name="i-heroicons-heart" class="w-5 h-5 text-white" />
            </div>
            <h3 class="text-xl font-heading font-bold">The 100-Year Pulse</h3>
          </div>
          <p class="text-primary-300 font-body max-w-sm leading-relaxed">
            Molecular longevity meets the art of purposeful living. Science-backed. Human-centric. Proven results.
          </p>
        </div>
        
        <!-- Links -->
        <div>
          <h4 class="font-heading font-bold mb-4">Book</h4>
          <ul class="space-y-2 font-body text-primary-300">
            <li><a href="#pillars" class="hover:text-white transition-colors">The Framework</a></li>
            <li><a href="#author" class="hover:text-white transition-colors">About the Author</a></li>
            <li><a href="#testimonials" class="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#pricing" class="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-heading font-bold mb-4">Legal</h4>
          <ul class="space-y-2 font-body text-primary-300">
            <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Refund Policy</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Scientific Citations -->
      <div class="border-t border-primary-800/50 pt-8 mb-8">
        <p class="text-xs text-primary-400 font-body leading-relaxed">
          <strong>Scientific References:</strong> 
          Ohsumi Y. (2016). Discoveries of mechanisms for autophagy. Nobel Prize in Physiology or Medicine. 
          Blackburn EH, Greider CW, Szostak JW. (2009). Telomeres and telomerase. Nobel Prize in Physiology or Medicine. 
          Lu C, et al. (2019). Autophagy and Metabolic Disease. Cell Metabolism. 
          Harvard Health Publishing. (2023). Longevity Research Updates.
        </p>
      </div>
      
      <!-- Bottom -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-primary-800/50">
        <p class="text-sm text-primary-400 font-body">
          © {{ currentYear }} The 100-Year Pulse. All rights reserved.
        </p>
        
        <!-- Social -->
        <div class="flex gap-3">
          <a href="#" class="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
            <Icon name="i-bi-twitter-x" class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
            <Icon name="i-bi-instagram" class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
            <Icon name="i-bi-linkedin" class="w-5 h-5" />
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors">
            <Icon name="i-bi-youtube" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
