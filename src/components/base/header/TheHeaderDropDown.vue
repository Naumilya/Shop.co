<template>
  <div :class="$style.dropdown" ref="dropdownRef">
    <button :class="$style.dropbtn" @click="toggleDropdown">
      <span>Shop</span> <iconDropDownArrow />
    </button>
    <div :class="$style.dropdownContent" v-if="isActive">
      <router-link
        @click="toggleDropdown"
        v-for="{ nameItem, pathItem } in ListMenu"
        :key="nameItem"
        :to="pathItem"
      >
        {{ nameItem }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconDropDownArrow from '@/components/icons/iconDropDownArrow.vue'
import { ref, watchEffect } from 'vue'

const dropdownRef = ref<Element | null>(null)
const isActive = ref(false)

interface itemListMenu {
  nameItem: string
  pathItem: string
}

const ListMenu: itemListMenu[] = [
  {
    nameItem: 'Casual',
    pathItem: '/Casual'
  },
  {
    nameItem: 'Formal',
    pathItem: '/Formal'
  },
  {
    nameItem: 'Party',
    pathItem: '/Party'
  },
  {
    nameItem: 'Gym',
    pathItem: '/Gym'
  }
]

watchEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const dropdownElement = dropdownRef.value

    if (dropdownElement && !(dropdownElement as Element).contains(event.target as Node)) {
      isActive.value = false
    }
  }

  window.addEventListener('click', handleClickOutside)

  return () => {
    window.removeEventListener('click', handleClickOutside)
  }
})

const toggleDropdown = () => {
  isActive.value = !isActive.value
}
</script>

<style lang="scss" module>
@use '@/scss/variables.scss';

.dropdown {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  .dropbtn {
    background-color: transparent;
    font-family: variables.$default-font;

    font-size: 16px;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;

    span {
      padding-right: 4px;
    }
  }

  .dropdownContent {
    position: absolute;
    top: 25px;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;

      &:hover,
      &:active,
      &:focus,
      &:target {
        background-color: #ddd;
      }
    }
  }
}

@media (max-width: variables.$vp-small) {
  .dropdown {
    .dropbtn {
      font-size: 24px;
      font-weight: 600;
    }
    .dropdownContent {
      position: static;
      display: flex;
      width: 100%;
      flex-direction: column;

      font-size: 16px;

      a {
        background-color: rgba(#fff, 1);
        border: 1px solid variables.$divider;
      }
    }
  }
}
</style>
