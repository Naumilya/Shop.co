<template>
  <section :class="$style.productСards">
    <div class="container">
      <h2 :class="$style.productСardsTitle"><slot name="title" /></h2>
      <div :class="$style.containerCards">
        <CardProduct />
        <!-- v-for='cardProduct in cardProductList' :key='cardProduct.id' -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CardProduct from '@/components/base/CardProduct/CardProduct.vue'
</script>

<style module lang="scss">
@use '@/scss/fonts.scss';

.productСards {
  margin-top: 72px;
}

.productСardsTitle {
  text-align: center;
  @include fonts.text-headline-h2;
}

.containerCards {
}
</style>
