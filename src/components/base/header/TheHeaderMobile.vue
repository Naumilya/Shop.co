<template>
  <div class="header-mobile">
    <button class="header-burger" :class="{ active: isActiveBurger }" @click="toggleBurger">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="header-mobile__menu" v-if="isActiveBurger">
      <TheHeaderList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeaderList from '@/components/base/header/TheHeaderList.vue'
import { ref } from 'vue'

const isActiveBurger = ref(false)

const toggleBurger = () => {
  isActiveBurger.value = !isActiveBurger.value
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.header-mobile {
  display: none;
  &__menu {
    position: absolute;
    top: 38px + 96px;
    left: 0;

    text-align: center;
    width: 100%;
    font-size: 24px;
  }
}

.header-burger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 24px;
  cursor: pointer;

  margin-right: 16px;

  padding: 5px 2px;

  outline: none;
  border: none;

  background: transparent;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: $black;
  }
}

.active span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: $black;
  color: $black;
  transition: transform 0.3s ease-in-out;
}

.active span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.active span:nth-child(2) {
  opacity: 0;
}

.active span:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}

@media (max-width: $vp-small) {
  .header-mobile {
    display: block;
  }
  .header-burger {
    display: flex;
  }
}
</style>
