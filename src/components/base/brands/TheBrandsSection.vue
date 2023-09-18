<template>
  <section class="brands">
    <div class="brands__inner container">
      <ul class="brands__list">
        <li class="brands__list-item" v-for="brandItem in BrandsList" :key="brandItem.nameBrand">
          <img
            class="brand__list-image"
            :src="`/src/assets/svgs/brands/${brandItem.pathImagegBrand}`"
            :alt="brandItem.nameBrand"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Brands {
  nameBrand: string
  pathImagegBrand: string
}

const BrandsList = ref<Brands[]>([
  {
    nameBrand: 'Versace',
    pathImagegBrand: 'versace.svg'
  },
  {
    nameBrand: 'Zara',
    pathImagegBrand: 'zara-logo.svg'
  },
  {
    nameBrand: 'Gucci',
    pathImagegBrand: 'gucci-logo.svg'
  },
  {
    nameBrand: 'Prada',
    pathImagegBrand: 'prada-logo.svg'
  },
  {
    nameBrand: 'Calvin-klein',
    pathImagegBrand: 'calvin-klein.svg'
  }
])
</script>

<style scoped lang="scss">
@use '@/scss/variables.scss';

.brands {
  margin-top: 116px;
  background: variables.$black;

  &__inner {
    padding-top: 44px;
    padding-bottom: 44px;
  }

  &__list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    &-image {
      max-width: 100%;
      height: auto;

      object-fit: cover;
    }
  }
}
</style>
