<template>
  <div class="toast-container fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <TransitionGroup name="toast">
      <div 
        v-for="toast in toasts" 
        :key="toast.id"
        class="toast-item flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg max-w-sm"
        :class="toastClasses[toast.type]"
      >
        <Icon :name="toastIcons[toast.type]" class="w-5 h-5 flex-shrink-0" />
        <p class="font-body text-sm">{{ toast.message }}</p>
        <button @click="removeToast(toast.id)" class="ml-auto p-1 hover:opacity-70">
          <Icon name="i-heroicons-x-mark" class="w-4 h-4" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
interface Toast {
  id: number
  message: string
  type: 'success' | 'error' | 'info'
}

const toasts = ref<Toast[]>([])
let toastId = 0

const toastClasses = {
  success: 'bg-green-50 text-green-800 border border-green-200',
  error: 'bg-red-50 text-red-800 border border-red-200',
  info: 'bg-blue-50 text-blue-800 border border-blue-200'
}

const toastIcons = {
  success: 'i-heroicons-check-circle',
  error: 'i-heroicons-x-circle',
  info: 'i-heroicons-information-circle'
}

const addToast = (message: string, type: Toast['type'] = 'info') => {
  const id = ++toastId
  toasts.value.push({ id, message, type })
  
  setTimeout(() => removeToast(id), 5000)
}

const removeToast = (id: number) => {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index > -1) {
    toasts.value.splice(index, 1)
  }
}

defineExpose({ addToast })
</script>

<style scoped>
.toast-enter-active {
  animation: slideIn 0.3s ease-out;
}

.toast-leave-active {
  animation: slideOut 0.3s ease-in;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
