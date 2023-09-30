<template>
  <router-link :class="$style.search" @click.prevent="isActive = !isActive" to="/"
    ><iconSearch />
  </router-link>
  <div :class="$style.mobileSearch" v-if="isActive">
    <TheHeaderSearch />
    <router-link :class="$style.mobileSearchClose" to="/" @click.prevent="isActive = !isActive"
      >close</router-link
    >
  </div>
</template>

<script setup lang="ts">
import TheHeaderSearch from '@/components/base/header/TheHeaderSearch.vue'
import iconSearch from '@/components/icons/iconSearch.vue'
import { ref } from 'vue'

const isActive = ref(false)
</script>

<style module lang="scss">
@use '@/scss/variables.scss';

.mobileSearch {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: variables.$white;
  display: flex;

  .mobileSearchClose {
    padding: 15px;
    text-align: center;
    text-decoration: none;
    color: variables.$black;
  }
}

.search {
  display: none;
}

@media (max-width: variables.$vp-medium) {
  .search {
    display: flex;
  }
}
</style>
