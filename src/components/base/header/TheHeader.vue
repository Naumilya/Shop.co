<template>
  <header class="header">
    <div class="header__inner container">
      <BaseLogo />
      <TheHeaderList />
      <TheHeaderSearch />
      <TheHeaderAction />
    </div>
  </header>
</template>

<script setup lang="ts">
import TheHeaderAction from '@/components/base/header/TheHeaderAction.vue'
import TheHeaderList from '@/components/base/header/TheHeaderList.vue'
import TheHeaderSearch from '@/components/base/header/TheHeaderSearch.vue'

import BaseLogo from '@/components/base/logo/BaseLogo.vue'
</script>

<style lang="scss" scoped>
.header {
  padding: 24px 0;
  position: fixed;
  width: 100%;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
