/* --------------------------------- Script --------------------------------- */
<script lang="ts" setup></script>

/* -------------------------------- Template -------------------------------- */
<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li class="list-item">
        <RouterLink to="/portfolio">Portfolio</RouterLink>
      </li>
      <li class="list-item">
        <RouterLink to="/about">About Us</RouterLink>
      </li>
      <li class="list-item">
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
    </ul>
  </nav>
</template>

/* --------------------------------- Styles --------------------------------- */
<style scoped>
.navigation {
  & .nav-list {
    display: flex;
  }
}
</style>
