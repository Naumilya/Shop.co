<template>
  <router-link class="logo" to="/">shop.co</router-link>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/scss/fonts.scss';
@use '@/scss/variables.scss';

.logo {
  @include fonts.text-headline-logo;
  margin-top: -7px;
}

@media (max-width: variables.$vp-medium) {
  .logo {
    font-size: 25px;
  }
}
</style>
