/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>
import LogoIcon from '@/assets/images/logo.svg'
</script>

/* -------------------------------- Template -------------------------------- */
<template>
  <div class="logo-wrapper">
    <RouterLink to="/">
      <!-- <img src="/images/logo.svg" class="logo" alt="" /> -->
      <LogoIcon class="logo" />
    </RouterLink>
  </div>
  <!-- <img src="@/assets/images/logo.svg" alt="" /> -->
</template>

/* --------------------------------- Styles --------------------------------- */
<style scoped>
.logo-wrapper {
  & .logo {
    display: block;
    height: 3.2rem;
    width: auto;

    & * {
      scale: 0.8;
    }
  }
}
</style>
