<template>
  <div class="skeleton-loader" :class="[size, variant]">
    <div class="skeleton-shimmer"></div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'circular' | 'rectangular' | 'rounded'
}>(), {
  size: 'md',
  variant: 'rounded'
})
</script>

<style scoped>
.skeleton-loader {
  @apply relative overflow-hidden bg-slate-200;
}

.skeleton-loader.sm {
  @apply h-4;
}
.skeleton-loader.md {
  @apply h-6;
}
.skeleton-loader.lg {
  @apply h-10;
}
.skeleton-loader.xl {
  @apply h-16;
}

.skeleton-loader.circular {
  @apply rounded-full;
}

.skeleton-loader.rounded {
  @apply rounded-lg;
}

.skeleton-loader.rectangular {
  @apply rounded-none;
}

.skeleton-shimmer {
  @apply absolute inset-0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 100%
  );
  animation: shimmer 1.5s infinite;
  transform: translateX(-100%);
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
