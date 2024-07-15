<script lang="ts" setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/common/header/MainHeader.vue'
import MainFooter from '@/components/common/footer/MainFooter.vue'
</script>

<template>
  <MainHeader />

  <RouterView v-slot="{Component}">
    <Transition name="fade">
      <Component :is="Component" />
    </Transition>
  </RouterView>
  
  <MainFooter />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
