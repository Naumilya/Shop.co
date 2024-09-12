<template>
  <form :class="$style.feadbackForm">
    <div :class="$style.feadbackFormInner">
      <h2 :class="$style.feadbackFormTitle">
        <slot name="title"></slot>
      </h2>
      <div :class="$style.feadbackFormAction">
        <feedbackInput />
        <BaseButton :class="$style.button_white" :path="'#'" @click.prevent
          >Subscribe to Newsletter</BaseButton
        >
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/button/BaseButton.vue'
import feedbackInput from '@/components/base/footer/feedbackInput.vue'
</script>

<style module lang="scss">
@use '@/scss/fonts.scss';
@use '@/scss/variables.scss';

.feadbackForm {
  margin-top: 80px;
  background-color: variables.$black;
  padding: 32px 64px;
  border-radius: 20px;

  position: relative;
  margin-bottom: -88px;
  z-index: 1;
  .feadbackFormInner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .feadbackFormTitle {
      @include fonts.text-headline-h3;
      max-width: 551px;
      color: variables.$white;
      @media (max-width: variables.$vp-small) {
        font-size: 32px;
      }
    }

    .feadbackFormAction {
      display: flex;
      flex-direction: column;
      row-gap: 14px;
      margin-top: 32px;

      .button_white {
        background: variables.$white;
        color: variables.$black;

        &:hover {
          border: 1px solid variables.$black;
          transition: border 0.5s ease-in-out;
        }
        @media (max-width: variables.$vp-small) {
          padding: 11px 0;
        }
      }
      @media (max-width: variables.$vp-large) {
        width: 100%;
      }
    }

    @media (max-width: variables.$vp-small) {
      justify-content: center;
    }
  }
  @media (max-width: variables.$vp-small) {
    padding: 32px 24px;
  }
}
</style>
