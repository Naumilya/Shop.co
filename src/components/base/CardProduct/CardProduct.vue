<template>
  <router-link
    :to="`/${props.product.categoryProduct}/product:${props.product.id}`"
    :class="$style.card"
  >
    <img
      :src="props.product.pathImageProduct"
      :alt="props.product.namPeroduct"
      :class="$style.image"
    />
    <h4 :class="$style.title">{{ props.product.namPeroduct }}</h4>
    <div :class="$style.rating">
      <span :class="$style.ratingStars">
        <iconStar v-for="star in floorRatingArray" :key="star" />
        <iconHalfStar v-if="calculateRatingStars" />
      </span>
      <span :class="$style.ratingNumber"
        >{{ props.product.ratingProduct }} <span :class="$style.ratingNumberSpan">/5</span>
      </span>
    </div>
    <div :class="$style.prices">
      <span :class="$style.pricesFinal">${{ calculateFinalPrice }}</span>
      <s :class="$style.pricesFull" v-if="props.product.pricesDiscount"
        >${{ props.product.priceProduct }}</s
      >
      <span :class="$style.pricesDiscount" v-if="props.product.pricesDiscount">
        - {{ props.product.pricesDiscount }}%
      </span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import iconHalfStar from '@/components/icons/iconHalfStar.vue'
import iconStar from '@/components/icons/iconStar.vue'
import type { Product } from '@/types/IProducts'
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true
  }
})

const calculateFinalPrice = computed(() => {
  return props.product.pricesDiscount
    ? props.product.priceProduct - (props.product.priceProduct * props.product.pricesDiscount) / 100
    : props.product.priceProduct
})

const calculateRatingStars = computed(() => {
  return !Number.isInteger(props.product.ratingProduct) && props.product.ratingProduct !== 5
})

const floorRatingArray = computed(() => {
  return Math.floor(props.product.ratingProduct)
})
</script>

<style module lang="scss">
@use '@/scss/fonts.scss';
@use '@/scss/variables.scss';
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
      color: variables.$black;
      .ratingNumberSpan {
        color: rgba(variables.$black, 0.6);
      }
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
      @include fonts.text-body-fullPrice;
    }
    .pricesDiscount {
      @include fonts.text-body-discount;
    }
  }
}
</style>
