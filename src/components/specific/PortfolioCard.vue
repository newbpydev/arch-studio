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
      <img :alt="`image of ${title}`" :src="`/images/portfolio/mobile/image-${img}.jpg`">
    </picture>

    <h3 class="title">{{ title }}</h3>
    <p class="subtitle">{{ subtitle }}</p>
    <span class="rank">{{ rank }}</span>

    <slot></slot>
  </div>
</template>

<style scoped>

</style>
