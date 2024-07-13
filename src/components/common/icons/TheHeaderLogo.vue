/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>
import LogoIcon from '@/assets/images/logo.svg'
</script>

/* -------------------------------- Template -------------------------------- */
<template>

  <RouterLink to="/">
    <!-- <img src="/images/logo.svg" class="logo" alt="" /> -->
    <LogoIcon class="logo" />
  </RouterLink>

  <!-- <img src="@/assets/images/logo.svg" alt="" /> -->
</template>

/* --------------------------------- Styles --------------------------------- */
<!--.logo-wrapper {-->
<!--  & .logo {-->
<!--    display: block;-->
<!--    height: 3.2rem;-->
<!--    width: auto;-->

<!--    & * {-->
<!--      scale: 0.8;-->
<!--    }-->
<!--  }-->
<!--}-->
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
