<template>
  <div :class="$style.card">
    <img :src="'/src/assets/images/products/product1.jpg'" :alt="'text'" :class="$style.image" />
    <h4 :class="$style.title">T-SHIRT WITH TAPE DETAILS</h4>
    <div :class="$style.rating">
      <span :class="$style.ratingStars">
        <iconStar />
      </span>
      <span :class="$style.ratingNumber">4.5/5</span>
    </div>
    <div :class="$style.prices">
      <span :class="$style.pricesFinal">$120</span>
      <span :class="$style.pricesFull">$120</span>
      <span :class="$style.pricesDiscount">-20%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconStar from '@/components/icons/iconStar.vue'

interface Product {
  categoryProduct: string
  nameProduct: string
  pathImageProduct: string
  ratingProduct: number
  pricesProduct: number
  pricesDiscount?: number
}
</script>

<style module lang="scss">
@use '@/scss/fonts.scss';
.card {
  max-width: 480px;
  border-radius: 20px;

  .title {
    @include fonts.text-headline-card;
  }
  .rating {
    .ratingStars {
    }

    .ratingNumber {
    }
  }
  .prices {
    .pricesFinal {
    }
    .pricesFull {
    }
    .pricesDiscount {
    }
  }
}
</style>
