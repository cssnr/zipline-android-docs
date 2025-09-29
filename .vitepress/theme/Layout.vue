<script setup>
import DefaultTheme from 'vitepress/theme'
import GetOnBadges from './components/GetOnBadges.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-after>
      <GetOnBadges :animation="['animate__zoomInLeft', 'animate__zoomInUp', 'animate__zoomInRight']" :centered="true" />

      <div class="badges">
        <a href="https://github.com/cssnr/zipline-android/releases/latest" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/github/v/release/cssnr/zipline-android?style=for-the-badge&logo=android&color=34A853&label=Latest%20Release"
            alt="Latest Release"
            style="display: inline-block; margin: 0 5px"
          />
        </a>
        <a href="https://github.com/cssnr/zipline-android/releases" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/github/v/release/cssnr/zipline-android?style=for-the-badge&logo=android&label=Pre-Release&include_prereleases"
            alt="Latest Pre-Release"
            style="display: inline-block; margin: 0 5px"
          />
        </a>
      </div>
    </template>
  </Layout>
</template>

<!--suppress CssUnusedSymbol -->
<style scoped>
.get-on-badges {
  margin-top: 48px;
}
.badges {
  text-align: center;
  margin-top: 36px;
}
.badges img {
  display: inline-block;
  margin: 0 5px;
}
.badges a {
  display: inline-block;
  transition: transform 0.3s;
}
.badges a:hover {
  transform: scale(1.04);
}
</style>
