<template>
  <div :class="$style.headerMobile">
    <button
      :class="[$style.headerBurger, { [$style.active]: isActiveBurger }]"
      @click="toggleBurger"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div :class="[$style.headerMobileMenu]" v-if="isActiveBurger">
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

<style module lang="scss">
@use '@/scss/variables.scss';

.headerMobile {
  display: none;
}

.headerBurger {
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
}

.headerBurger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: variables.$black;
}

.headerMobileMenu {
  position: absolute;
  top: 38px + 96px;
  left: 0;
  text-align: center;
  width: 100%;
  font-size: 24px;
}

.headerBurger.active span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: variables.$black;
  color: variables.$black;
  transition: transform 0.3s ease-in-out;
}

.headerBurger.active span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.headerBurger.active span:nth-child(2) {
  opacity: 0;
}

.headerBurger.active span:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}

@media (max-width: variables.$vp-small) {
  .headerMobile {
    display: block;
  }
  .headerBurger {
    display: flex;
  }
}
</style>
