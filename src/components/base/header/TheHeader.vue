<template>
  <header :class="$style.header">
    <div :class="$style.headerInner" class="container">
      <TheHeaderMobile />
      <BaseLogo />
      <TheHeaderList :class="$style.headerMenu" />
      <TheHeaderSearch :class="$style.headerSearch" />
      <TheHeaderAction :class="$style.headerAction" />
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

<style lang="scss" module>
@use '@/scss/variables.scss';
.header {
  padding: 24px 0;
  position: fixed;
  top: 0;
  width: 100%;
  background: variables.$white;
  // align-items: center;

  .headerInner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media (max-width: variables.$vp-medium) {
  .headerSearch {
    display: none;
  }
}

@media (max-width: variables.$vp-small) {
  .header {
    .headerInner {
      display: flex;
      justify-content: flex-start;
    }

    .headerMenu {
      display: none;
    }

    .headerAction {
      margin-left: auto;
    }
  }
}
</style>
