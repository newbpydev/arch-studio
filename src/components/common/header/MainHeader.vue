/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>
import TheHeaderLogo from '@/components/common/icons/TheHeaderLogo.vue'
import MainNavigation from '@/components/common/navigation/MainNavigation.vue'
import MenuIcon from '@/assets/images/icons/icon-hamburger.svg'
import CloseIcon from '@/assets/images/icons/icon-close.svg'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isMobile = ref(false)
const isOpen = ref(false)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 767
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const handleClick = (e: MouseEvent) => {
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

    <Teleport v-show="isOpen" :disabled="!isMobile" to="body">
      <MainNavigation v-model="isOpen" :is-mobile="isMobile" :is-open="isOpen" />
    </Teleport>
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
