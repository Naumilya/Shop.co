<template>
  <div :class="$style.comment">
    <div :class="$style.stars">
      <span :class="$style.stars">
        <iconStar v-for="star in floorRatingArray" :key="star" />
        <iconHalfStar v-if="calculateRatingStars" />
      </span>
    </div>
    <span :class="$style.commentName">
      {{ props.comment.userName }}
      <iconCheck v-if="comment.validChecked" />
    </span>
    <p :class="$style.commentText">{{ props.comment.description }}</p>
  </div>
</template>

<script setup lang="ts">
import iconCheck from '@/components/icons/iconCheck.vue'
import iconHalfStar from '@/components/icons/iconHalfStar.vue'
import iconStar from '@/components/icons/iconStar.vue'

import type { Comment } from '@/types/IComment'
import { computed, defineProps } from 'vue'

const props = defineProps({
  comment: {
    type: Object as () => Comment,
    required: true
  }
})

const calculateRatingStars = computed(() => {
  return !Number.isInteger(props.comment.ratingComment) && props.comment.ratingComment !== 5
})

const floorRatingArray = computed(() => {
  return Math.floor(props.comment.ratingComment)
})
</script>

<style module lang="scss">
@use '@/scss/fonts.scss';
@use '@/scss/variables.scss';

.comment {
  padding: 28px 32px;
  max-width: 400px;
  min-width: 358px;
  border-radius: 20px;
  border: 1px solid #00000010;

  .commentName {
    display: flex;
    text-align: center;
    gap: 4px;
    margin-top: 12px;
    margin-bottom: 15px;

    @include fonts.text-body-userName;
    @media (max-width: variables.$vp-small) {
      font-size: 16px;
    }
  }

  .commentText {
    @media (max-width: variables.$vp-small) {
      font-size: 14px;
    }
  }

  @media (max-width: variables.$vp-small) {
    padding: 24px;
  }
}
</style>
