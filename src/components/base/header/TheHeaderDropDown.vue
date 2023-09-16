<template>
  <div class="drop-down-menu">Shop <iconDropDownArrow /></div>
</template>

<script setup lang="ts">
import iconDropDownArrow from '@/components/icons/iconDropDownArrow.vue'
</script>

<style lang="scss" scoped>
.drop-down-menu {
  cursor: pointer;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  column-gap: 4px;
}
</style>
