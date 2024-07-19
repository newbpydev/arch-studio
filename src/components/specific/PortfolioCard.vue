<script lang="ts" setup>

defineProps<{
  img: '228b' | 'del-sol' | 'edelweiss' | 'eebox' | 'federal' | 'hypers' | 'netcry' | 'paramour' | 'prototype' | 'seraph' | 'sxiv' | 'trinity',
  title: string,
  subtitle: string,
  rank?: string
}>()

</script>

<template>
  <div class="portrait-card">
    <picture>
      <source :srcset="`/images/portfolio/desktop/image-${img}.jpg`" media="(min-width: 75em)">
      <source :srcset="`/images/portfolio/tablet/image-${img}.jpg`" media="(min-width: 48em)">
      <img :alt="`image of ${title}`" :src="`/images/portfolio/mobile/image-${img}.jpg`" class="img">
    </picture>

    <div class="content">
      <div class="wrapper">
        <h3 class="title">{{ title }}</h3>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
      <span class="rank">{{ rank }}</span>
    </div>
  </div>
</template>

<style scoped>
.portrait-card {
  position: relative;
  color: #fff;
  cursor: pointer;
  overflow: hidden;

  &:hover .img {
    scale: 1.2;
  }

  & .img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    scroll-snap-align: start;
    transition: scale .3s;

  }

  & .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background: linear-gradient(rgba(0, 0, 0, 0%), rgba(0, 0, 0, 50%));


    & .wrapper {
      position: absolute;
      left: 2.4rem;
      bottom: 2.3rem;

      @media (min-width: 48em) {
        left: 4rem;
        bottom: 3.9rem
      }

      @media (min-width: 75em) {
      }

      & .title {
        color: var(--ast-c-white);
        font-size: var(--font-size-heading-s);
        line-height: var(--line-height-heading-s);
      }

      & .subtitle {
        opacity: 75%;
      }
    }


    & .rank {
      display: none;
      font-size: 25rem;
      line-height: 20rem;
      letter-spacing: -.5rem;
      opacity: .5;
      font-weight: bold;

      @media (min-width: 48em) {
        position: absolute;
        top: 2.9rem;
        right: 1.6rem;
        display: block;
      }

      @media (min-width: 75em) {
        right: -1.6rem;
        top: 4.5rem;
      }
    }
  }

}

</style>
