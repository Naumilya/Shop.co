<template>
  <ul :class="$style.headerList">
    <li :class="$style.headerListItem">
      <DropDownMenu />
    </li>
    <li :class="$style.headerListItem" v-for="{ nameItem, pathItem } in ListMenu" :key="nameItem">
      <router-link :class="$style.headerListItemLink" :to="pathItem">
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

<style module lang="scss">
@use '@/scss/fonts.scss';
@use '@/scss/variables.scss';

.headerList {
  display: flex;
  list-style: none;
  column-gap: 24px;
  .headerListItem {
    .headerListItemLink {
      text-decoration: none;

      color: variables.$black;
    }
  }
}

@media (max-width: variables.$vp-small) {
  .headerList {
    display: block;
    width: 100%;
    font-weight: 600;
    .headerListItem {
      background-color: variables.$background-color;
      border: 1px solid variables.$divider;
      .headerListItemLink {
        text-decoration: none;
        color: variables.$black;
      }
    }
  }
}
</style>
