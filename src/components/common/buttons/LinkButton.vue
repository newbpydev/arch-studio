<script lang="ts" setup>
import ArrowIcon from '@/assets/images/icons/icon-arrow.svg'

defineProps<{
  to: string,
  isFull?: boolean

}>()

</script>

<template>
  <RouterLink :class="['btn', isFull ? 'full' : '']" :to="to">
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

  &.full {
    width: 100%;
  }

  &:hover {
    background-color: var(--color-background-button-hover);
  }

  &:active {
    background-color: var(--color-background-button-active);
  }

  & .text {
    font-weight: bold;
  }

  & .icon {
    & * {
      stroke: white;
    }
  }
}
</style>
