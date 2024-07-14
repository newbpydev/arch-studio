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
  margin-bottom: 3.1rem;

  & .nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    & a {
      line-height: 2.5rem;
      font-weight: bold;
    }
  }
}

</style>
