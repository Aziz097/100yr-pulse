<template>
  <button
    ref="buttonRef"
    type="button"
    :class="[
      'magnetic-button relative inline-flex items-center justify-center overflow-hidden transition-all duration-300',
      sizeClasses[size],
      variantClasses[variant],
      { 'cursor-pointer': !disabled, 'cursor-not-allowed opacity-50': disabled }
    ]"
    :disabled="disabled"
    @click="handleClick"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <span class="relative z-10 flex items-center gap-2" :class="iconSizeClasses[size]">
      <slot name="icon"></slot>
      <span><slot></slot></span>
    </span>
    
    <!-- Ripple effect -->
    <span 
      v-if="ripple"
      class="ripple absolute inset-0 rounded-full"
      :style="rippleStyle"
    ></span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'accent'
  disabled?: boolean
  ripple?: boolean
}>(), {
  size: 'md',
  variant: 'primary',
  disabled: false,
  ripple: true
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonRef = ref<HTMLElement | null>(null)

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

const iconSizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}

const variantClasses = {
  primary: 'bg-primary-800 text-white hover:bg-primary-900 hover:shadow-lg',
  secondary: 'bg-white text-primary-800 border-2 border-primary-800 hover:bg-primary-50',
  accent: 'bg-accent-500 text-white hover:bg-accent-600'
}

const rippleStyle = ref({})

const handleClick = (event: MouseEvent) => {
  if (props.disabled) return
  emit('click', event)
}

const handleMouseMove = (event: MouseEvent) => {
  if (!buttonRef.value || props.disabled) return
  
  const rect = buttonRef.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  
  buttonRef.value.style.setProperty('--mouse-x', `${x}px`)
  buttonRef.value.style.setProperty('--mouse-y', `${y}px`)
}

const handleMouseLeave = () => {
  if (!buttonRef.value) return
  buttonRef.value.style.removeProperty('--mouse-x')
  buttonRef.value.style.removeProperty('--mouse-y')
}
</script>

<style scoped>
.magnetic-button {
  font-family: var(--font-heading);
  font-weight: 700;
  border-radius: 9999px;
  transition: all 0.2s ease;
}

.magnetic-button:hover {
  transform: translateY(-2px);
}

.magnetic-button:active {
  transform: translateY(0);
}

.magnetic-button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: radial-gradient(
    600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.3),
    transparent 40%
  );
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.magnetic-button:hover::before {
  opacity: 1;
}

.ripple {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
  transform: scale(0);
  animation: ripple-animation 0.6s ease-out;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
