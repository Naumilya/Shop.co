<template>
  <div class="header-search">
    <input
      class="header-search__input"
      type="text"
      inputmode="search"
      placeholder="Search for products..."
    />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
.header-search {
  max-width: 577px;

  width: 100%;
  &__input {
    border-radius: 62px;
    background: $background-color;
    padding: 12px 16px;
    width: 100%;
    border: none;
    outline: none;
    font-family: $default-font;
  }
}
</style>
