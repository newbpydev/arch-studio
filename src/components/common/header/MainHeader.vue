/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>
import TheHeaderLogo from '@/components/common/icons/TheHeaderLogo.vue'
import MainNavigation from '@/components/common/navigation/MainNavigation.vue'
import MenuIcon from '@/assets/images/icons/icon-hamburger.svg'
import CloseIcon from '@/assets/images/icons/icon-close.svg'
import { ref } from 'vue'
import { useMobileMode } from '@/composables/useMobileMode'

const { isMobile } = useMobileMode()
const isOpen = ref(false)

const handleClick = () => {
  if (isMobile.value) {
    isOpen.value = !isOpen.value
  }
}

const handleCloseModal = () => {
  if (isMobile.value && isOpen.value)
    isOpen.value = false
}
</script>

/* -------------------------------- Template -------------------------------- */
<template>
  <header class="container mx-auto">
    <TheHeaderLogo height="10" @click="handleCloseModal" />

    <div v-if="isMobile" class="icons">
      <MenuIcon v-if="!isOpen" class="menu-icon" @click="handleClick" />
      <CloseIcon v-if="isOpen" class="menu-icon" @click="handleClick" />
    </div>

    <MainNavigation v-model="isOpen" :is-mobile="isMobile" :is-open="isOpen" />
  </header>
</template>

/* --------------------------------- Styles --------------------------------- */
<style scoped>
header {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem;
  position: relative;
  z-index: 10;

  @media (min-width: 48em) {
    padding: 5.6rem 0;
    justify-content: left;
    gap: 7.884rem;
  }

  @media (min-width: 90em) {
    gap: 9.484rem;
  }

  & .icons {
    display: flex;

    & .menu-icon {
      cursor: pointer;

      & > * {
        transition: all .2s ease;
      }

      &:hover > * {
        fill: var(--color-background-button-hover);
        stroke: var(--color-background-button-hover);
      }
    }
  }
}
</style>
