<template>
  <router-link :to="path" class="button"><slot></slot></router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  path: {
    type: String,
    required: true,
    default: '/'
  }
})
</script>

<style lang="scss" scoped>
@use '@/scss/variables.scss';

.button {
  display: inline-block;
  padding: 15px 75px;
  background: variables.$black;
  color: variables.$white;

  border: 1px solid variables.$divider;

  border-radius: 62px;
  text-decoration: none;
  text-align: center;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  &_white {
    background: variables.$white;
    color: variables.$black;

    &:hover {
      border: 1px solid variables.$black;
      transition: border 0.5s ease-in-out;
    }
  }

  &:hover {
    background: variables.$white;
    color: variables.$black;

    transition: background 0.3s ease-in-out;
    // box-shadow: 0 5px 0px rgba( 0.5);
  }
}

@media (max-width: variables.$vp-x-small) {
  .button {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
}
</style>
