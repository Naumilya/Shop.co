<template>
  <header class="header">
    <div class="header__inner container">
      <BaseLogo />
      <TheHeaderList />
      <TheHeaderSearch />
    </div>
  </header>
</template>

<script setup lang="ts">
import TheHeaderList from '@/components/base/header/TheHeaderList.vue'
import TheHeaderSearch from '@/components/base/header/TheHeaderSearch.vue'
import BaseLogo from '@/components/base/logo/BaseLogo.vue'
</script>

<style lang="scss" scoped>
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
