<template>
  <router-link to="/" :class="$style.card">
    <img :src="'/src/assets/images/products/product1.jpg'" :alt="'text'" :class="$style.image" />
    <h4 :class="$style.title">T-SHIRT WITH TAPE DETAILS</h4>
    <div :class="$style.rating">
      <span :class="$style.ratingStars">
        <iconStar />
        <iconHalfStar v-if="true" />
      </span>
      <span :class="$style.ratingNumber">4.5/5</span>
    </div>
    <div :class="$style.prices">
      <span :class="$style.pricesFinal">$120</span>
      <s :class="$style.pricesFull">$120</s>
      <span :class="$style.pricesDiscount">-20%</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import iconHalfStar from '@/components/icons/iconHalfStar.vue'
import iconStar from '@/components/icons/iconStar.vue'

interface Product {
  categoryProduct: string[]
  namPeroduct: string
  pathImageProduct: string
  ratingProduct: number
  pricesProduct: number
  pricesDiscount?: number
}
</script>

<style module lang="scss">
@use '@/scss/fonts.scss';
.card {
  max-width: 295px;
  border-radius: 20px;
  text-decoration: none;
  display: block;

  .title {
    @include fonts.text-headline-card;
    margin-top: 16px;
  }
  .rating {
    display: flex;
    align-items: center;
    column-gap: 13px;
    padding: 8px 0;
    .ratingStars {
    }

    .ratingNumber {
    }
  }
  .prices {
    display: flex;
    align-items: center;
    column-gap: 10px;
    .pricesFinal {
      @include fonts.text-body-prices;
    }
    .pricesFull {
      color: rgba(#000000, 0.4);
      font-size: 24px;
      font-weight: 700;
    }
    .pricesDiscount {
      font-size: 12px;
      padding: 6px 13px;
      color: #ff3333;
      background-color: rgba(#ff3333, 0.1);
      border-radius: 62px;
    }
  }
}
</style>
