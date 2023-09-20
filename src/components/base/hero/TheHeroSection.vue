<template>
  <section
    class="hero"
    :style="{ 'background-image': 'url(/src/assets/images/' + props.pathImage + ')' }"
  >
    <div class="container hero__inner">
      <div class="hero__content">
        <h1 class="hero__title"><slot name="title" /></h1>
        <p class="hero__subtext">
          <slot name="description" />
        </p>
        <BaseButton class="hero__button" :path="props.pathLink"
          ><slot name="button-text"
        /></BaseButton>
        <TheHeroCounters class="hero__counters" v-if="props.countersView" />
      </div>
    </div>
    <img
      class="hero__image-mobile"
      :src="`/src/assets/images/${props.pathImageMobile}`"
      alt="hero-background-mobile"
    />
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/button/BaseButton.vue'
import TheHeroCounters from '@/components/base/hero/TheHeroCounters.vue'
import { computed } from 'vue'

interface Props {
  pathImageMobile: string
  pathImage: string
  pathLink: string
  countersView: boolean
}

const props = defineProps<Props>()

const sizeScreen = computed(() => {
  return window.matchMedia('(min-width: 400px)').matches
})

console.log(sizeScreen.value)
</script>

<style lang="scss" scoped>
@use '@/scss/variables.scss';
@use '@/scss/fonts.scss';

.hero {
  background-color: variables.$background-color;
  background-size: contain;

  background-position: center;
  background-repeat: no-repeat;
  min-height: 663px;

  &__inner {
    padding-top: 103px;
    padding-bottom: 116px;
  }

  &__content {
    max-width: 596px;
  }

  &__title {
    @include fonts.text-headline-h1;
  }

  &__subtext {
    margin-top: 32px;
  }

  &__button {
    margin-top: 32px;
  }

  &__counters {
    margin-top: 48px;
  }

  &__image-mobile {
    display: none;
  }
}

@media (max-width: variables.$vp-medium) {
  .hero {
    background-image: none !important;

    &__inner {
      padding-top: 40px;
      padding-bottom: 0px;
    }

    &__title {
      font-size: 36px;
    }

    &__subtext {
      margin-top: 20px;
    }

    &__button {
      margin-top: 24px;
    }

    &__counters {
      margin-top: 20px;
    }

    &__image-mobile {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
