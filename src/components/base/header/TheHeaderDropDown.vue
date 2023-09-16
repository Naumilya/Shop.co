<template>
  <div class="dropdown">
    <button class="dropbtn">Shop <iconDropDownArrow /></button>
    <div class="dropdown__content">
      <router-link v-for="{ nameItem, pathItem } in ListMenu" :key="nameItem" :to="pathItem">
        {{ nameItem }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconDropDownArrow from '@/components/icons/iconDropDownArrow.vue'

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
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.dropdown {
  width: 100%;
  position: relative;
  display: inline-block;

  .dropbtn {
    background-color: transparent;
    font-family: $default-font;

    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  &__content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;

      &:hover {
        background-color: #ddd;
      }
    }
  }

  &:hover {
    .dropdown__content {
      display: block;
    }
  }
}

@media (max-width: $vp-small) {
  .dropdown {
    .dropbtn {
      font-size: 24px;
      font-weight: 600;
    }
    &__content {
      position: static;

      box-shadow: none;
      font-size: 16px;

      a {
        background-color: rgba(#fff, 1);
        border: 1px solid $divider;

        display: flex;
        justify-content: center;

        &:hover {
          background-color: #ddd;
        }
      }
    }

    &:hover {
      .dropdown__content {
        column-gap: 24px;
      }
    }
  }
}
</style>
