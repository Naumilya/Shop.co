<template>
  <header class="header">
    <div class="header__inner container">
      <TheHeaderMobile />
      <BaseLogo />
      <TheHeaderList class="header__menu" />
      <TheHeaderSearch class="header__search" />
      <TheHeaderAction class="header__action" />
    </div>
  </header>
</template>

<script setup lang="ts">
import TheHeaderAction from '@/components/base/header/TheHeaderAction.vue'
import TheHeaderList from '@/components/base/header/TheHeaderList.vue'
import TheHeaderMobile from '@/components/base/header/TheHeaderMobile.vue'
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
  // align-items: center;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media (max-width: $vp-medium) {
  .header__search {
    display: none;
  }
}

@media (max-width: $vp-small) {
  .header {
    &__inner {
      display: flex;
      justify-content: flex-start;
    }

    &__menu {
      display: none;
    }

    &__action {
      margin-left: auto;
    }
  }
}
</style>
