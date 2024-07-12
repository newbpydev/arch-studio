/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>
import TheHeaderLogo from '@/components/common/icons/TheHeaderLogo.vue'
import MainNavigation from '@/components/common/navigation/MainNavigation.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isMobile = ref(false)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

/* -------------------------------- Template -------------------------------- */
<template>
  <header class="container mx-auto">
    <TheHeaderLogo height="10" />
    <MainNavigation v-if="isMobile" />
  </header>
</template>

/* --------------------------------- Styles --------------------------------- */
<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem;
}
</style>
