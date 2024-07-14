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

    <LinkButton class="link" to="/portfolio">See Our Portfolio</LinkButton>
  </footer>
</template>

/* --------------------------------- Styles --------------------------------- */
//padding: 9.3rem 6.1rem 4.8rem;
<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;


  @media (min-width: 48em) {
    flex-direction: row;
    padding: 0;
    max-width: 100%;
  }

  @media (min-width: 75em) {
    max-width: 111rem;
  }

  .logo-wrapper {
    position: absolute;
    top: -6rem;
    background-color: var(--color-background-button-normal);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12rem;
    width: 12rem;

    @media (min-width: 48em) {
      position: relative;
      top: 0;
    }

    & .logo {
      scale: .6;

      & * {
        fill: white;
      }
    }
  }

  .link {
    position: absolute;
    top: 26.3rem;

    @media (min-width: 48em) {
      right: 0;
      top: 2.4rem;
    }
  }

}


</style>
