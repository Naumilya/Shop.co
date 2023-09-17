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
@use '@/scss/variables.scss';
.header-search {
  max-width: 577px;
  padding: 10px;
  width: 100%;

  &__input {
    width: 100%;
    border: none;
    outline: none;
    font-family: variables.$default-font;

    border-radius: 62px;
    padding: 12px 12px 12px 52px;

    background-color: variables.$background-color;

    background-image: url('@/assets/icons/search-icon.svg');
    background-repeat: no-repeat;
    background-position: 16px;

    &::placeholder {
      color: rgba(variables.$black, 0.4);
    }
  }
}

@media (max-width: variables.$vp-extra-large) {
  .header-search {
    max-width: 377px;
  }
}

@media (max-width: variables.$vp-medium) {
  .header-search {
    max-width: none;
  }
}
</style>
