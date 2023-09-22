<template>
  <div class="counters">
    <div class="counters__counter" v-for="counter in counters" :key="counter.id">
      <span class="counters__number">{{ counter.counterNumber }}+</span>
      <div class="counters__subtext">{{ counter.subtext }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Counters {
  id: number
  counterNumber: number
  subtext: string
}

const counters: Counters[] = [
  {
    id: 0,
    counterNumber: 200,
    subtext: 'International Brands'
  },
  {
    id: 1,
    counterNumber: 2000,
    subtext: 'High-Quality Products'
  },
  {
    id: 2,
    counterNumber: 30000,
    subtext: 'Happy Customers'
  }
]
</script>

<style lang="scss" scoped>
@use '@/scss/variables.scss';

.counters {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  &__counter {
    border-right: 1px solid variables.$divider;
    padding-right: 20px;

    &:last-child {
      border: none;
    }
  }
  &__number {
    font-size: 40px;
    font-weight: bold;
    color: variables.$black;
  }
  &__subtext {
  }
}

@media (max-width: variables.$vp-x-small) {
  .counters {
    justify-content: center;

    &__counter {
      border-right: 1px solid variables.$divider;

      &:last-child {
        border: none;
      }

      &:nth-child(2) {
        border: none;
      }
    }
  }
}

@media (max-width: 404px) {
  .counters {
    &__counter {
      padding-right: 27px;
    }

    &__number {
      font-size: 24px;
    }

    &__subtext {
      font-size: 12px;
    }
  }
}
</style>
