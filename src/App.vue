<script lang="ts" setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/common/header/MainHeader.vue'
import MainFooter from '@/components/common/footer/MainFooter.vue'
</script>

<template>
  <MainHeader />
  <RouterView />
  <MainFooter />
</template>

<style scoped></style>
