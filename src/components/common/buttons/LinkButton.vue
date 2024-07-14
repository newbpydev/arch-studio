<script lang="ts" setup>
import ArrowIcon from '@/assets/images/icons/icon-arrow.svg'

defineProps<{
  to: string
}>()

</script>

<template>
  <RouterLink :to="to" class="btn">
    <span class="text">
      <slot />
    </span>

    <ArrowIcon class="icon" />
  </RouterLink>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  width: 25.2rem;
  line-height: 2.5rem;
  background-color: var(--color-background-button-normal);
  color: var(--ast-c-white);
  padding: 2.5rem 0 2.2rem;
  transition: background-color .3s;

  &:hover {
    background-color: var(--color-background-button-hover);
  }

  &:active {
    background-color: var(--color-background-button-active);
  }

  & .text {
  }

  & .icon {
    & * {
      stroke: white;
    }
  }
}
</style>
