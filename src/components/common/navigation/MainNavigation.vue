/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>
defineProps({
  isOpen: Boolean,
  isMobile: Boolean
})

const model = defineModel<boolean>({ required: true })

const emit = defineEmits<{
  menuClick: [value: boolean]
}>()

const handleMenuClick = () => {
  // emit('menuClick')
}
</script>

/* -------------------------------- Template -------------------------------- */
<template>
  <nav v-show="isOpen" :class="['navigation', isMobile && 'detach']">
    <ul class="nav-list">
      <li class="list-item">
        <RouterLink class="link" to="/portfolio">Portfolio</RouterLink>
      </li>
      <li class="list-item">
        <RouterLink class="link" to="/about">About Us</RouterLink>
      </li>
      <li class="list-item">
        <RouterLink class="link" to="/contact">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

/* --------------------------------- Styles --------------------------------- */
<style scoped>
.navigation {

  & .nav-list {
    display: flex;

    & .list-item {

      & .link {

      }
    }
  }

  &.detach {
    position: absolute;
    background-color: rgba(0, 0, 0, .5);
    height: 100vh;
    width: 100%;
    top: 100%;
    left: 0;

    & .nav-list {
      position: absolute;
      right: 0;
      top: 0;
      background-color: var(--color-background-menu);
      padding: 3.9rem 4.8rem 4.2rem;
      flex-direction: column;
      gap: 1.7rem;
      width: 34.3rem;

      & .list-item {

        & .link {
          display: block;
          width: 24.7rem;
          color: var(--color-heading);
          font-weight: bold;
          font-size: 3.2rem;

        }
      }
    }
  }


}
</style>
