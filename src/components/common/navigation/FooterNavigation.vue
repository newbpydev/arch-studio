<script lang="ts" setup>

</script>

<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About Us</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navigation {
  background-color: var(--color-background-menu);
  padding: 9.3rem 15.15rem 15.1rem;

  @media (min-width: 48em) {
    padding: 4.9rem 25% 4.6rem 5.2%;
  }

  @media (min-width: 75em) {
    padding: 8.75rem 38.6rem 8.75rem 8.5rem;
  }

  & .nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    @media (min-width: 48em) {
      flex-direction: row;
    }

    & a {
      line-height: 2.5rem;
      font-weight: bold;
      transition: color .2s;

      &:hover {
        color: var(--color-heading);
      }
    }
  }
}

</style>
