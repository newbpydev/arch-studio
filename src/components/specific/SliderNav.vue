<script lang="ts" setup>
defineProps<{
  totalImgs: number;
  activeImg: number
}>()

const emit = defineEmits<{
  slideSelection: [value: number]
}>()
</script>

<template>
  <div class="slider-nav">
    <button v-for="num in totalImgs" :id="`slide-${num - 1}`" :key="num"
            :class="['nav-item', activeImg === num - 1 ? 'active' : '']"
            type="button" @click="() => emit('slideSelection', num-1)">0{{ num }}
    </button>
  </div>
</template>

<style scoped>
.slider-nav {
  display: none;
  background: var(--ast-c-white);

  @media (min-width: 75em) {
    display: flex;
    position: absolute;
    bottom: 0;
    left: -8rem;
  }

  & .nav-item {
    color: var(--ast-c-medium-grey);
    display: flex;
    place-items: center;
    justify-content: center;
    height: 8rem;
    width: 8rem;
    transition: all .2s;

    &:hover {
      background: var(--ast-c-very-light-grey);
      color: var(--ast-c-medium-grey);
    }

    &:active {
      background: var(--ast-c-very-dark-blue);
    }

    &.active {
      background: var(--ast-c-very-dark-blue);
      color: var(--ast-c-white);
    }
  }
}

</style>
