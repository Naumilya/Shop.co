<template>
  <section class="product-cards">
    <h2 class="product-cards__title"><slot></slot></h2>
    <CardProduct />
  </section>
</template>

<script setup lang="ts">
import CardProduct from '@/components/base/CardProduct/CardProduct.vue'
</script>

<style scoped lang="scss">
@use '@/scss/fonts.scss';

.product-cards {
  margin-top: 72px;
  &__title {
    text-align: center;
    @include fonts.text-headline-h2;
  }
}
</style>
