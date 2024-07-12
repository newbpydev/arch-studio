/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>

defineProps({
  isOpen: Boolean,
  isMobile: Boolean
})

const model = defineModel<boolean>({ required: true })

const handleMenuClick = () => {
  console.log('menu clicked')
  model.value = !model.value
}

</script>

/* -------------------------------- Template -------------------------------- */
<template>
  <nav :class="['navigation', isMobile && isOpen && 'modal']" @click="handleMenuClick">
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
  display: none;

  @media (min-width: 48em) {
    display: block;
  }

  & .nav-list {
    display: flex;

    & .list-item {

      & .link {

      }
    }
  }

  &.modal {
    display: block;
    position: fixed;
    background-color: rgba(0, 0, 0, .5);
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;

    & .nav-list {
      position: absolute;
      right: 0;
      top: 9.6rem;
      background-color: var(--color-background-menu);
      padding: 3.9rem 4.8rem 4.2rem;
      flex-direction: column;
      gap: 1.7rem;
      width: 34.3rem;
      box-shadow: 0 4px 4px rgba(0, 0, 0, .25);

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
