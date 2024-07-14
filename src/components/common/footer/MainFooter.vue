/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>
import LogoIcon from '@/assets/images/logo.svg'
import FooterNavigation from '@/components/common/navigation/FooterNavigation.vue'
import LinkButton from '@/components/common/buttons/LinkButton.vue'
</script>

/* -------------------------------- Template -------------------------------- */
<template>
  <footer class="footer container mx-auto">
    <div class="logo-wrapper">
      <LogoIcon class="logo" />

    </div>

    <FooterNavigation />

    <LinkButton to="/portfolio">See Our Portfolio</LinkButton>
  </footer>
</template>

/* --------------------------------- Styles --------------------------------- */
<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9.3rem 6.1rem 4.8rem;
  position: relative;
  background-color: var(--color-background-menu);
  width: 100%;

  .logo-wrapper {
    position: absolute;
    top: -6rem;
    background-color: var(--color-background-button-normal);

    display: flex;
    justify-content: center;
    align-items: center;
    height: 12rem;
    width: 12rem;

    & .logo {
      scale: .6;

      & * {
        fill: white;
      }
    }
  }

}


</style>
