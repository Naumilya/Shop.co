<template>
  <TheHeader />
  <RouterView />
</template>

<script setup lang="ts">
import TheHeader from '@/components/base/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
