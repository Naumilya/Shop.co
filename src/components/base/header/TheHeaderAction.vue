<template>
  <div class="header-action">
    <TheHeaderMobileSearch />
    <router-link class="header-action__link" to="/Cart"><icnoCart /></router-link>
    <router-link class="header-action__link" to="/Account"><iconAccount /></router-link>
  </div>
</template>

<script setup lang="ts">
import TheHeaderMobileSearch from '@/components/base/header/TheHeaderMobileSearch.vue'
import iconAccount from '@/components/icons/iconAccount.vue'
import icnoCart from '@/components/icons/iconCart.vue'
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.header-action {
  display: flex;
  align-items: center;
  column-gap: 14px;

  &__link {
    display: flex;
    align-items: center;
  }
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
