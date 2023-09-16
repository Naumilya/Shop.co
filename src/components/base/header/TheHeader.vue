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
@import '@/scss/variables.scss';
.header {
  padding: 24px 0;
  position: fixed;
  top: 0;
  width: 100%;
  background: $white;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
