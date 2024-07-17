<script lang="ts" setup>
import TheSlide from '@/components/specific/TheSlide.vue'
import type { Slide } from '@/views/HomeView.vue'

defineProps<{
  data: Slide[],
  activeImg: number
}>()
</script>

<template>
  <div class="slider-wrapper">
    <div class="slider">
      <!--      <TransitionGroup name="slider">-->
      <TheSlide v-for="(slide, i) in data" v-show="i === activeImg" :key="i" :index="i" :slide="slide" />
      <!--      </TransitionGroup>-->
    </div>
  </div>
</template>

<style scoped>
.slider-enter-active,
.slider-leave-active {
  transition: all 2s ease;
}

.slider-enter-from,
.slider-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

.slider-enter-to,
.slider-leave-from {
  opacity: 1;
  transform: translateX(-100%);
}


.slider-wrapper {
  position: relative;
  max-width: 480rem;
  margin: 0 auto;

  & .slider {
    height: 56rem;
    display: flex;
    overflow-x: hidden;
  }
}

</style>
