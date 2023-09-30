<template>
  <div :class="$style.counters">
    <div :class="$style.countersCounter" v-for="counter in counters" :key="counter.id">
      <span :class="$style.countersNumber">{{ counter.counterNumber }}+</span>
      <div :class="$style.countersSubtext">{{ counter.subtext }}</div>
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

<style lang="scss" module>
@use '@/scss/variables.scss';

.counters {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  .countersCounter {
    border-right: 1px solid variables.$divider;
    padding-right: 20px;

    .countersNumber {
      font-size: 40px;
      font-weight: bold;
      color: variables.$black;
    }

    .countersSubtext {
    }

    &:last-child {
      border: none;
    }
  }
}

@media (max-width: variables.$vp-x-small) {
  .counters {
    justify-content: center;

    .countersCounter {
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
    .countersCounter {
      padding-right: 27px;

      .countersNumber {
        font-size: 24px;
      }

      .countersSubtext {
        font-size: 12px;
      }
    }
  }
}
</style>
