<template>
  <ul class="header-list">
    <li class="header-list__item">
      <DropDownMenu />
    </li>
    <li class="header-list__item" v-for="{ nameItem, pathItem } in ListMenu" :key="nameItem">
      <router-link class="header-list__item-link" :to="pathItem">
        {{ nameItem }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import DropDownMenu from '@/components/base/header/TheHeaderDropDown.vue'

interface itemListMenu {
  nameItem: string
  pathItem: string
}

const ListMenu: itemListMenu[] = [
  {
    nameItem: 'On Sale',
    pathItem: '/OnSale'
  },
  {
    nameItem: 'New Arrivals',
    pathItem: '/NewArrivals'
  },
  {
    nameItem: 'Brands',
    pathItem: '/Brands'
  }
]
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.header-list {
  display: flex;
  list-style: none;
  column-gap: 24px;
  &__item {
    &-link {
      text-decoration: none;
      color: $black;
    }
  }
}

@media (max-width: $vp-small) {
  .header-list {
    display: block;
    width: 100%;
    font-weight: 600;
    &__item {
      background-color: $background-color;
      border: 1px solid $divider;
      &-link {
        text-decoration: none;
        color: $black;
      }
    }
  }
}
</style>
