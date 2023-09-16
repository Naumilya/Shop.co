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
  padding: 10px;
  width: 100%;

  &__input {
    width: 100%;
    border: none;
    outline: none;
    font-family: $default-font;

    border-radius: 62px;
    padding: 12px 12px 12px 52px;

    background-color: $background-color;

    background-image: url('@/assets/icons/search-icon.svg');
    background-repeat: no-repeat;
    background-position: 16px;

    &::placeholder {
      color: rgba($black, 0.4);
    }
  }
}

@media (max-width: $vp-extra-large) {
  .header-search {
    max-width: 377px;
  }
}
</style>
