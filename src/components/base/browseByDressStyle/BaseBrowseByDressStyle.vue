<template>
  <div :class="$style.dressStyle">
    <div :class="$style.dressStyleInner" class="container">
      <h2 :class="$style.dressStyleTitle">BROWSE BY dress STYLE</h2>
      <div :class="$style.dressStyleCards">
        <div :class="$style.row">
          <router-link to="/Casual">
            <img
              :class="$style.imgCard"
              src="@/assets/images/dress-style/casual.jpg"
              alt="casual"
            />
          </router-link>
          <router-link to="/Formal">
            <img
              :class="$style.imgCard"
              src="@/assets/images/dress-style/formal.jpg"
              alt="formal"
            />
          </router-link>
          <router-link to="/Party">
            <img :class="$style.imgCard" src="@/assets/images/dress-style/party.jpg" alt="party" />
          </router-link>
          <router-link to="/Gym">
            <img :class="$style.imgCard" src="@/assets/images/dress-style/gym.jpg" alt="gym" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" module>
@use '@/scss/fonts.scss';
@use '@/scss/variables.scss';

.dressStyle {
  margin-top: 80px;
  .dressStyleInner {
    padding: 70px 64px 76px 64px;
    border-radius: 40px;
    background: #f0f0f0;

    .dressStyleTitle {
      text-align: center;
      @include fonts.text-headline-h2;
      @media (max-width: variables.$vp-small) {
        font-size: 32px;
      }
    }

    .dressStyleCards {
      margin-top: 64px;
      .row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;

        .imgCard {
          border-radius: 20px;

          @media (max-width: variables.$vp-medium) {
            object-fit: fill;
            width: 100%;
            max-width: 407px;
            height: 190px;
          }
        }
      }
    }
    @media (max-width: variables.$vp-small) {
      padding: 24px;
    }
  }
}
</style>
