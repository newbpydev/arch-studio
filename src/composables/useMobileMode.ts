import { onMounted, onUnmounted, ref } from 'vue'

export const useMobileMode = () => {
  const isMobile = ref(false)

  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768
  }

  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })

  return { isMobile }
}
