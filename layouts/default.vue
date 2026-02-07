<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-1 relative">
      <slot />
    </main>
    <TheFooter />
    
    <!-- Toast Notifications -->
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-white'
  }
})
</script>
