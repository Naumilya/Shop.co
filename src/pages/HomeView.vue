<template>
  <main>
    <ProductCards>
      <template v-slot:title>New Arrivals</template>
    </ProductCards>
  </main>
</template>

<script setup lang="ts">
import ProductCards from '@/components/common/ProductCardsTemplate/ProductCards.vue'
</script>
