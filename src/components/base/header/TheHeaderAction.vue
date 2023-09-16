<template>
  <div class="header-action">
    <router-link class="header-action__link search" to="/Search"><iconSearch /> </router-link>
    <router-link class="header-action__link" to="/Cart"><icnoCart /></router-link>
    <router-link class="header-action__link" to="/Account"><iconAccount /></router-link>
  </div>
</template>

<script setup lang="ts">
import iconAccount from '@/components/icons/iconAccount.vue'
import icnoCart from '@/components/icons/iconCart.vue'
import iconSearch from '@/components/icons/iconSearch.vue'
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.header-action {
  display: flex;
  align-items: center;
  column-gap: 14px;
}

.search {
  display: none;
}

@media (max-width: $vp-medium) {
  .search {
    display: block;
  }
}
</style>
