<template>
  <section
    :class="$style.hero"
    :style="{ 'background-image': 'url(/src/assets/images/' + props.pathImage + ')' }"
  >
    <div :class="$style.heroInner" class="container">
      <div :class="$style.heroContent">
        <h1 :class="$style.heroTitle"><slot name="title" /></h1>
        <p :class="$style.heroSubtext">
          <slot name="description" />
        </p>
        <BaseButton :class="$style.heroButton" :path="props.pathLink"
          ><slot name="button-text"
        /></BaseButton>
        <TheHeroCounters :class="$style.heroCounters" v-if="props.countersView" />
      </div>
    </div>
    <img
      :class="$style.heroImageMobile"
      :src="`/src/assets/images/${props.pathImageMobile}`"
      alt="hero-background-mobile"
    />
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/button/BaseButton.vue'
import TheHeroCounters from '@/components/common/HeroTemplate/TheHeroCounters.vue'

interface Props {
  pathImageMobile: string
  pathImage: string
  pathLink: string
  countersView: boolean
}

const props = defineProps<Props>()
</script>

<style lang="scss" module>
@use '@/scss/variables.scss';
@use '@/scss/fonts.scss';

.hero {
  background-color: variables.$background-color;
  background-size: contain;

  background-position: center;
  background-repeat: no-repeat;
  min-height: 663px;

  .heroInner {
    padding-top: 103px;
    padding-bottom: 116px;
  }

  .heroContent {
    max-width: 596px;
  }

  .heroTitle {
    @include fonts.text-headline-h1;
  }

  .heroSubtext {
    margin-top: 32px;
  }

  .heroButton {
    margin-top: 32px;
  }

  .heroCounters {
    margin-top: 48px;
  }

  .heroImageMobile {
    display: none;
  }
}

@media (max-width: variables.$vp-medium) {
  .hero {
    background-image: none !important;

    .heroInner {
      padding-top: 40px;
      padding-bottom: 0px;
    }

    .heroTitle {
      font-size: 36px;
    }

    .heroSubtext {
      margin-top: 20px;
    }

    .heroButton {
      margin-top: 24px;
    }

    .heroCounters {
      margin-top: 20px;
    }

    .heroImageMobile {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
