<template>
  <section class="brands">
    <div class="brands__inner container">
      <ul class="brands__list">
        <li class="brands__list-item" v-for="brandItem in BrandsList" :key="brandItem.id">
          <img
            class="brands__list-image"
            :src="`/src/assets/svgs/brands/${brandItem.pathImagegBrand}`"
            :alt="brandItem.nameBrand"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Brands {
  id: number
  nameBrand: string
  pathImagegBrand: string
}

const BrandsList: Brands[] = [
  {
    id: 0,
    nameBrand: 'Versace',
    pathImagegBrand: 'versace.svg'
  },
  {
    id: 1,
    nameBrand: 'Zara',
    pathImagegBrand: 'zara-logo.svg'
  },
  {
    id: 2,
    nameBrand: 'Gucci',
    pathImagegBrand: 'gucci-logo.svg'
  },
  {
    id: 3,
    nameBrand: 'Prada',
    pathImagegBrand: 'prada-logo.svg'
  },
  {
    id: 4,
    nameBrand: 'Calvin-klein',
    pathImagegBrand: 'calvin-klein.svg'
  }
]
</script>

<style scoped lang="scss">
@use '@/scss/variables.scss';

.brands {
  background: variables.$black;

  &__inner {
    padding-top: 44px;
    padding-bottom: 44px;
  }

  &__list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    &-item {
      text-align: center;
    }

    &-image {
      object-fit: cover;
      width: 100%;
    }
  }
}

@media (max-width: variables.$vp-small) {
  .brands__list {
    justify-content: center;
    &-image {
      width: 80%;
    }
  }
}
</style>
