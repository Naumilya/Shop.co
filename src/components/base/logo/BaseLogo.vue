<template>
  <router-link class="logo" to="/">shop.co</router-link>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/scss/mixins.scss';
@import '@/scss/variables.scss';

.logo {
  @include title-text(32px);
  margin-top: -7px;
}
</style>
