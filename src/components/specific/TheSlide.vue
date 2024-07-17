<script lang="ts" setup>
import LinkButton from '@/components/common/buttons/LinkButton.vue'
import type { Slide } from '@/views/HomeView.vue'

defineProps<{
  slide: Slide,
  index: number
}>()
</script>

<template>
  <article class="slide">
    <picture>
      <source :srcset="`/images/home/desktop/image-hero-${slide.imgSrc}.jpg`" media="(min-width: 75em)" />
      <source :srcset="`/images/home/tablet/image-hero-${slide.imgSrc}.jpg`" media="(min-width: 48em)" />
      <img :id="`slide-${index}`" :alt="`image of ${slide.title}`"
           :src="`/images/home/mobile/image-hero-${slide.imgSrc}.jpg`" />
    </picture>

    <div class="overlay">
      <div>
        <h1 class="title">{{ slide.title }}</h1>
        <p class="description">{{ slide.description }}</p>
      </div>
      <LinkButton class="link" to="/portfolio">See Our Portfolio</LinkButton>
    </div>


  </article>
</template>

<style scoped>
.slide {
  position: relative;
  color: var(--ast-c-white);
  min-width: 37.5rem;
  width: 100%;
  overflow: hidden;

  & picture {

    & img {
      display: block;

      width: 100%;
    }
  }

  & .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 11.6rem 3.2rem 11rem;
    background-color: rgba(0, 0, 0, 50%);

    & .title {
      font-size: var(--font-size-heading-l);
      color: inherit;
      letter-spacing: var(--letter-spacing-heading-l);
      line-height: var(--line-height-heading-l);
      margin-bottom: 1.1rem;
    }

    & .description {
    }

    & .link {
    }
  }
}

</style>
