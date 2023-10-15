<template>
  <footer :class="$style.footer">
    <div class="container">
      <feedbackForm>
        <template v-slot:title>STAY UPTO DATE ABOUT OUR LATEST OFFERS</template>
      </feedbackForm>
    </div>

    <div :class="$style.footerInner">
      <div :class="$style.container" class="container">
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
        <div :class="$style.pages">
          <ul :class="$style.pagesList">
            <li :class="$style.pagesListTitle">Company</li>
            <li><a :class="$style.pagesListLink" href="">About</a></li>
            <li><a :class="$style.pagesListLink" href="">Features</a></li>
            <li><a :class="$style.pagesListLink" href="">Works</a></li>
            <li><a :class="$style.pagesListLink" href="">Career</a></li>
          </ul>
          <ul :class="$style.pagesList">
            <li :class="$style.pagesListTitle">Help</li>
            <li><a :class="$style.pagesListLink" href="">Customer Support</a></li>
            <li><a :class="$style.pagesListLink" href="">Delivery Details</a></li>
            <li><a :class="$style.pagesListLink" href="">Terms & Conditions</a></li>
            <li><a :class="$style.pagesListLink" href="">Privacy Policy</a></li>
          </ul>
          <ul :class="$style.pagesList">
            <li :class="$style.pagesListTitle">FAQ</li>
            <li><a :class="$style.pagesListLink" href="">Account</a></li>
            <li><a :class="$style.pagesListLink" href="">Manage Deliveries</a></li>
            <li><a :class="$style.pagesListLink" href="">Orders</a></li>
            <li><a :class="$style.pagesListLink" href="">Payments</a></li>
          </ul>
          <ul :class="$style.pagesList">
            <li :class="$style.pagesListTitle">Resources</li>
            <li><a :class="$style.pagesListLink" href="">Free eBooks</a></li>
            <li><a :class="$style.pagesListLink" href="">Development Tutorial</a></li>
            <li><a :class="$style.pagesListLink" href="">How to - Blog</a></li>
            <li><a :class="$style.pagesListLink" href="">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>
      <div :class="$style.copyright" class="container">
        <h6 :class="$style.copyrightTitle">Shop.co © 2000-2023, All Rights Reserved</h6>
        <div :class="$style.badges">
          <a href=""><img src="@/assets/svgs/Badge.svg" alt="" /></a>
          <a href=""><img src="@/assets/svgs/Badge-1.svg" alt="" /></a>
          <a href=""><img src="@/assets/svgs/Badge-2.svg" alt="" /></a>
          <a href=""><img src="@/assets/svgs/Badge-3.svg" alt="" /></a>
          <a href=""><img src="@/assets/svgs/Badge-4.svg" alt="" /></a>
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
@use '@/scss/variables.scss';
.footer {
  margin-top: 80px;

  .footerInner {
    background-color: variables.$background-color;
    padding-top: 142px;
    .container {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      column-gap: 113px;
    }
  }

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
    @media (max-width: variables.$vp-large) {
      max-width: none;
    }
  }

  .pages {
    display: flex;
    justify-content: space-between;
    width: 70%;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 20px;

    .pagesList {
      list-style: none;
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .pagesListTitle {
        font-weight: 500;
        letter-spacing: 3px;
        text-transform: uppercase;
        margin-bottom: 26px;
      }
      .pagesListLink {
        color: rgba(#000, 0.6);
        text-decoration: none;
      }
    }
    @media (max-width: variables.$vp-large) {
      width: 100%;
    }
  }

  .copyright {
    border-top: 1px solid variables.$divider;
    padding-top: 25px;
    padding-bottom: 77px;
    margin-top: 50px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;

    .copyrightTitle {
      font-size: 14px;
      color: rgba(#000, 0.6);
      font-weight: 300;
    }
    .badges {
      margin-top: 16px;
    }

    @media (max-width: variables.$vp-small) {
      flex-direction: column;
    }
  }
}
</style>
