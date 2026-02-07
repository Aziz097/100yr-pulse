import { useRafFn } from '@vueuse/core'

export function useParallax(options: { speed?: number; reverse?: boolean } = {}) {
  const { speed = 0.1, reverse = false } = options
  const offset = ref(0)
  const target = ref(0)
  
  useRafFn(() => {
    const current = window.scrollY
    const direction = reverse ? -1 : 1
    target.value += (current * speed * direction - target.value) * 0.1
  })
  
  return computed(() => target.value)
}

export function useScrollProgress() {
  const progress = ref(0)
  
  const updateProgress = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    progress.value = scrollTop / docHeight
  }
  
  onMounted(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateProgress)
  })
  
  return progress
}
