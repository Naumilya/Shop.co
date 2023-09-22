<template>
  <main>
    <TheHeroSection
      :pathImage="'background-hero.jpg'"
      :path-image-mobile="'background-mobile.jpg'"
      :path-link="'/shop'"
      :counters-view="true"
    >
      <template v-slot:title>find clothes that matches your style</template>
      <template v-slot:description>
        Browse through our diverse range of meticulously crafted garments, designed to bring out
        your individuality and cater to your sense of style.</template
      >
      <template v-slot:button-text> Shop Now</template>
    </TheHeroSection>
  </main>
</template>

<script setup lang="ts"></script>
