<script lang="ts" setup>
defineProps<{
  disabled: boolean,
  target: string
}>()

</script>

<template>
  <Transition name="modal">
    <div v-if="disabled">
      <slot />
    </div>

    <Teleport v-else :to="target">
      <slot />
    </Teleport>
  </Transition>

</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: display .5s ease;
}

.modal-enter-from,
.modal-leave-to {
  display: block;
}

</style>
