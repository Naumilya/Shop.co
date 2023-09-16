<template>
  <header class="header">
    <div class="header__inner container">
      <BaseLogo />
      <TheHeaderList />
    </div>
  </header>
</template>

<script setup lang="ts">
import TheHeaderList from '@/components/base/header/TheHeaderList.vue'
import BaseLogo from '@/components/base/logo/BaseLogo.vue'
</script>

<style lang="scss" scoped></style>
