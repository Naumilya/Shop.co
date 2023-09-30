<template>
  <div :class="$style.headerAction">
    <TheHeaderMobileSearch />
    <router-link :class="$style.headerActionLink" to="/Cart"><icnoCart /></router-link>
    <router-link :class="$style.headerActionLink" to="/Account"><iconAccount /></router-link>
  </div>
</template>

<script setup lang="ts">
import TheHeaderMobileSearch from '@/components/base/header/TheHeaderMobileSearch.vue'
import iconAccount from '@/components/icons/iconAccount.vue'
import icnoCart from '@/components/icons/iconCart.vue'
</script>

<style module lang="scss">
@use '@/scss/variables.scss';

.headerAction {
  display: flex;
  align-items: center;
  column-gap: 14px;

  .headerActionLink {
    display: flex;
    align-items: center;
  }
}
</style>
