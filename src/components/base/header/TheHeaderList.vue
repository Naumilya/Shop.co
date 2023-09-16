<template>
  <ul class="header-list">
    <li class="header-list__item"></li>
    <li class="header-list__item" v-for="{ nameItem, pathItem } in ListMenu" :key="nameItem">
      <router-link class="" :to="pathItem">
        {{ nameItem }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
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

<style scoped></style>
