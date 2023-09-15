<template>
  <router-link class="logo" to="/">shop.co</router-link>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.logo {
  color: $black;
  font-family: $title-font;
  font-size: 32px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
}
</style>
