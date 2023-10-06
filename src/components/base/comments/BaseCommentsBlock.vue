<template>
  <div :class="$style.comments">
    <div class="container">
      <h2 :class="$style.commentsTitle">OUR HAPPY CUSTOMERS</h2>
      <div :class="$style.commentsContainer"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
@use '@/scss/fonts.scss';

.comments {
  margin-top: 80px;

  .commentsTitle {
    @include fonts.text-headline-h2;
  }
  .commentsContainer {
    margin-top: 40px;
  }
}
</style>
