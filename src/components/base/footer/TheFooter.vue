<template>
  <footer :class="$style.footer">
    <div class="container">
      <feedbackForm>
        <template v-slot:title>STAY UPTO DATE ABOUT OUR LATEST OFFERS</template>
      </feedbackForm>
      <div :class="$style.footerInner">
        <div :class="$style.socials">
          <BaseLogo />
          <p :class="$style.socialsDescription">
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          <div :class="$style.socialsLinks">
            <a :class="$style.socialLink" href="#"
              ><img src="@/assets/icons/logo-twitter.svg" alt="#"
            /></a>
            <a :class="$style.socialLink_black" href="#"
              ><img src="@/assets/icons/logo-fb-simple.svg" alt="#"
            /></a>
            <a :class="$style.socialLink" href="#"
              ><img src="@/assets/icons/logo-instagram.svg" alt="#"
            /></a>
            <a :class="$style.socialLink" href="#"
              ><img src="@/assets/icons/logo-github.svg" alt="#"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import feedbackForm from '@/components/base/footer/feedbackForm.vue'
import BaseLogo from '@/components/base/logo/BaseLogo.vue'
</script>

<style module lang="scss">
.footer {
  .socials {
    margin-top: 50px;
    max-width: 248px;

    .socialsDescription {
      margin-top: 25px;
      margin-bottom: 35px;
    }
    .socialsLinks {
      display: flex;
      column-gap: 12px;
      .socialLink {
        padding: 7px 11px;
        border-radius: 100%;
        border: 1px solid #0000002b;

        &_black {
          padding: 7px 11px;
          border-radius: 100%;
          border: 1px solid #0000002b;
          background-color: #000;
        }
      }
    }
  }
}
</style>
