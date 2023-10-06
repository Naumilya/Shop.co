<template>
  <div :class="$style.comment">
    <div :class="$style.stars">
      <span :class="$style.stars"></span>
    </div>
    <span :class="$style.commentName"></span>
    <p :class="$style.commentText"></p>
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.comment {
}
</style>
