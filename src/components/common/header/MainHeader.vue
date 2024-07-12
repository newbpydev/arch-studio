/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>
import TheHeaderLogo from '@/components/common/icons/TheHeaderLogo.vue'
import MainNavigation from '@/components/common/navigation/MainNavigation.vue'
</script>

/* -------------------------------- Template -------------------------------- */
<template>
  <header class="container mx-auto">
    <TheHeaderLogo height="10" />
    <MainNavigation />
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
