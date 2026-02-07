import { useIntersectionObserver } from '@vueuse/core'

export function useReveal(options: { threshold?: number; once?: boolean } = {}) {
  const { threshold = 0.1, once = true } = options
  const isVisible = ref(false)
  const hasRevealed = ref(false)
  
  const elementRef = ref<HTMLElement | null>(null)
  
  const observe = (el: HTMLElement) => {
    elementRef.value = el
    return useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          isVisible.value = true
          if (once) {
            hasRevealed.value = true
          }
        } else if (!once) {
          isVisible.value = false
        }
      },
      { threshold }
    )
  }
  
  return {
    isVisible: computed(() => isVisible.value && !hasRevealed.value),
    hasRevealed: computed(() => hasRevealed.value),
    observe
  }
}
