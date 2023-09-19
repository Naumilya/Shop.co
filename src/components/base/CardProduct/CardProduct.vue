<template>
  <router-link
    :to="`/${props.product.categoryProduct}/product:${props.product.id}`"
    :class="$style.card"
  >
    <img :src="'/src/assets/images/products/product1.jpg'" :alt="'text'" :class="$style.image" />
    <h4 :class="$style.title">{{ props.product.namPeroduct }}</h4>
    <div :class="$style.rating">
      <span :class="$style.ratingStars">
        <iconStar v-for="star in Math.floor(props.product.ratingProduct)" :key="star" />
        <iconHalfStar v-if="true" />
      </span>
      <span :class="$style.ratingNumber">{{ props.product.ratingProduct }}/5</span>
    </div>
    <div :class="$style.prices">
      <span :class="$style.pricesFinal">${{ props.product.priceProduct }}</span>
      <s :class="$style.pricesFull">${{ props.product.priceProduct }}</s>
      <span :class="$style.pricesDiscount" v-if="props.product.pricesDiscount">
        - {{ props.product.pricesDiscount }}%
      </span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import iconHalfStar from '@/components/icons/iconHalfStar.vue'
import iconStar from '@/components/icons/iconStar.vue'

interface Product {
  id: number
  categoryProduct: string[]
  namPeroduct: string
  pathImageProduct: string
  ratingProduct: number
  priceProduct: number
  pricesDiscount?: number
}

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true
  }
})
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
