/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup>

defineProps({
  isOpen: Boolean,
  isMobile: Boolean
})

const model = defineModel<boolean>({ required: true })

const handleMenuClick = () => {
  model.value = !model.value
}

</script>

/* -------------------------------- Template -------------------------------- */
<template>
  <Teleport v-show="isOpen" :disabled="!isMobile" to="body">
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
  </Teleport>
</template>

/* --------------------------------- Styles --------------------------------- */
<style>
body:has(nav.navigation.modal) {
  overflow: hidden;
}
</style>

<style scoped>
.navigation {
  display: none;

  @media (min-width: 48em) {
    display: block;
  }

  & .nav-list {
    color: var(--ast-c-medium-grey);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 31.3rem;

    & .list-item {

      & .link {
        font-weight: bold;
        line-height: 2.5rem;
        transition: color .2s;

        &:hover {
          color: var(--ast-c-very-dark-blue);
        }

        @media (min-width: 48em) {

        }

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
          line-height: 4rem;
          transition: color .2s;

          &:hover {
            color: var(--ast-c-medium-grey);
          }
        }
      }
    }
  }
}


</style>
