<template>
  <div :class="$style.card">
    <img :src="'text'" :alt="'text'" />
    <h4 :class="$style.title"></h4>
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
@use '@/scss/fonts.scss';
.card {
  max-width: 480px;
  border-radius: 20px;

  .title {
    @include fonts.text-headline-card;
  }
}
</style>
