<template>
  <div :class="$style.dressStyle">
    <div :class="$style.dressStyleInner" class="container">
      <h2 :class="$style.dressStyleTitle">BROWSE BY dress STYLE</h2>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" module>
@use '@/scss/fonts.scss';

.dressStyle {
  margin-top: 80px;
  .dressStyleInner {
    padding: 70px 64px 76px 64px;
    border-radius: 40px;
    background: #f0f0f0;

    .dressStyleTitle {
      text-align: center;
      @include fonts.text-headline-h2;
    }
  }
}
</style>
