<template>
  <div class="min-h-screen flex flex-col relative">
    <LayoutHeader />
    <main class="flex-1 relative z-10">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-white'
  }
})
</script>
