<template>
  <div :class="$style.comments">
    <div class="container">
      <h2 :class="$style.commentsTitle">OUR HAPPY CUSTOMERS</h2>
      <div :class="$style.commentsContainer">
        <BaseComment v-for="comment in data.commentList" :key="comment.id" :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getComments } from '@/api/getComments'
import BaseComment from '@/components/base/comments/BaseComment.vue'
import type { Comment } from '@/types/IComment'
import { onMounted, reactive } from 'vue'

const data = reactive({
  commentList: [] as Comment[]
})

onMounted(async () => {
  data.commentList = await getComments()
})
</script>

<style module lang="scss">
@use '@/scss/fonts.scss';
@use '@/scss/variables.scss';

.comments {
  margin-top: 80px;

  .commentsTitle {
    @include fonts.text-headline-h2;
  }
  .commentsContainer {
    margin-top: 40px;
    display: flex;
    gap: 20px;
    overflow-x: scroll;

    padding-bottom: 50px;

    &::-webkit-scrollbar {
      background-color: variables.$divider;
      height: 4px;

      border-radius: 36px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: variables.$black;
      border-radius: 10%;
    }
  }
}
</style>
