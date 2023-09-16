<template>
  <div class="header-action">
    <router-link v-if="false" class="header-action__link" to="/Cart"><iconSearch /></router-link>
    <router-link class="header-action__link" to="/Cart"><icnoCart /></router-link>
    <router-link class="header-action__link" to="/Account"><iconAccount /></router-link>
  </div>
</template>

<script setup lang="ts">
import iconAccount from '@/components/icons/iconAccount.vue'
import icnoCart from '@/components/icons/iconCart.vue'
import iconSearch from '@/components/icons/iconSearch.vue'
</script>

<style scoped>
.header-action {
  display: flex;
  align-items: center;
  column-gap: 14px;
}
</style>
