<template>
  <div class="header-action">
    <router-link class="header-action__link" to="/"><icnoCart /></router-link>
    <router-link class="header-action__link" to="/"><iconAccount /></router-link>
  </div>
</template>

<script setup lang="ts">
import iconAccount from '@/components/icons/iconAccount.vue'
import icnoCart from '@/components/icons/iconCart.vue'
</script>

<style scoped>
.header-action {
  display: flex;
  align-items: center;
  column-gap: 14px;
}
</style>
