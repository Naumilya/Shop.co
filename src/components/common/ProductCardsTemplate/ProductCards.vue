<template>
  <section :class="$style.productСards">
    <div class="container">
      <h2 :class="$style.productСardsTitle"><slot name="title" /></h2>
      <div :class="$style.containerCards">
        <CardProduct
          v-for="cardProduct in data.cardProductList"
          :key="cardProduct.id"
          :product="cardProduct"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getProducts } from '@/api/getProducts'
import CardProduct from '@/components/base/CardProduct/CardProduct.vue'
import type { Product } from '@/types/IProducts'
import { defineProps, onMounted, reactive } from 'vue'

const data = reactive({
  cardProductList: [] as Product[]
})

const props = defineProps({
  categories: {
    type: Array as () => string[],
    required: true
  }
})

onMounted(async () => {
  const products = await getProducts()

  const filteredProducts: Product[] = products.filter((product: Product) => {
    return product.filterProduct.some((category: string) => props.categories.includes(category))
  })

  data.cardProductList = filteredProducts
})
</script>

<style module lang="scss">
@use '@/scss/fonts.scss';
@use '@/scss/variables.scss';

.productСards {
  margin-top: 72px;
  padding-bottom: 55px;
  border-bottom: 1px solid rgba(variables.$black, 0.5);
}

.productСardsTitle {
  text-align: center;
  @include fonts.text-headline-h2;
}

.containerCards {
  display: flex;
  gap: 20px;
  margin-top: 55px;
  overflow-x: scroll;
  padding-bottom: 50px;

  &::-webkit-scrollbar {
    background-color: variables.$divider;
    height: 4px;

    border-radius: 36px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: variables.$black;
    border-radius: 10%;
  }
}
</style>
