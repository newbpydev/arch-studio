/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>
import LogoIcon from '@/assets/images/logo.svg'
</script>

/* -------------------------------- Template -------------------------------- */
<template>
  <RouterLink to="/">
    <LogoIcon class="logo" />
  </RouterLink>
</template>

/* --------------------------------- Styles --------------------------------- */
<style scoped>

.logo {
  display: block;
  height: 3.2rem;
  width: auto;

  @media (min-width: 48em) {
    height: 4rem;
  }

  & * {
    scale: 0.8;

    @media (min-width: 48em) {
      scale: 1;
    }
  }
}
</style>
