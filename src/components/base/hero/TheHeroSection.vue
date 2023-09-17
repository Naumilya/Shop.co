<template>
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <h1 class="hero__title">find clothes that matches your style</h1>
        <p class="hero__subtext">
          Browse through our diverse range of meticulously crafted garments, designed to bring out
          your individuality and cater to your sense of style.
        </p>
        <BaseButton class="hero__button" path="/shop">Shop Now</BaseButton>
        <TheHeroCounters class="hero__counters" />
      </div>
    </div>
    <img
      class="hero__image-mobile"
      src="@/assets/images/background-mobile.jpg"
      alt="hero-background-mobile"
    />
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/button/BaseButton.vue'
import TheHeroCounters from '@/components/base/hero/TheHeroCounters.vue'
</script>

<style lang="scss" scoped>
@use '@/scss/variables.scss';
@use '@/scss/fonts.scss';

.hero {
  min-height: 663px;

  background: url('@/assets/images/background-hero.jpg');
  background-size: contain;

  background-position: center;
  background-repeat: no-repeat;

  background-color: variables.$background-color;

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
    background-image: none;

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
