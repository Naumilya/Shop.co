<template>
  <section :class="$style.brands">
    <div :class="$style.brandsInner" class="container">
      <ul :class="$style.brandsList">
        <li :class="$style.brandsListItem" v-for="brandItem in BrandsList" :key="brandItem.id">
          <img
            :class="$style.brandsListItemImage"
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

<style module lang="scss">
@use '@/scss/variables.scss';

.brands {
  background: variables.$black;

  .brandsInner {
    padding-top: 44px;
    padding-bottom: 44px;

    .brandsList {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;

      @media (max-width: variables.$vp-small) {
        justify-content: center;

        .brandsListItemImage {
          width: 80%;
        }
      }
    }

    .brandsListItem {
      text-align: center;
    }

    .brandsListItemImage {
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>
