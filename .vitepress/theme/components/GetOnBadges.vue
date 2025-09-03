<script setup>
import 'animate.css'

const props = defineProps({
  animation: { type: [String, Array], default: null },
  extraClass: { type: String, default: '' },
  centered: { type: Boolean, default: false },
  margin: { type: String, default: null },
})

const badgeStyle = {}
if (props.centered) badgeStyle.alignItems = 'center'
if (props.margin) badgeStyle.margin = props.margin

const badges = [
  {
    title: 'GitHub',
    src: '/images/badges/github.png',
    href: 'https://github.com/cssnr/zipline-android/releases/latest/download/app-release.apk',
  },
  {
    title: 'Obtainium',
    src: '/images/badges/obtanium.png',
    href: 'https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/cssnr/zipline-android',
  },
  {
    title: 'Google Play',
    src: '/images/badges/google-play.png',
    href: 'https://play.google.com/store/apps/details?id=org.cssnr.zipline',
  },
]

let imageClasses = [] // NOSONAR
if (typeof props.animation === 'string') {
  const newClass = `animate__animated ${props.animation} ${props.extraClass}`.trim()
  imageClasses.push(...Array(badges.length).fill(newClass))
} else if (props.animation) {
  for (const animation of props.animation) {
    imageClasses.push(`animate__animated ${animation} ${props.extraClass}`.trim())
  }
}
</script>

<style scoped>
.badges {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
}
@media (min-width: 767px) {
  .badges {
    flex-direction: row;
  }
}

.badges a {
  display: inline-block;
  transition: transform 0.3s;
}
.badges a:hover {
  transform: scale(1.05);
}
</style>

<template>
  <div class="badges" :style="badgeStyle">
    <template v-for="(badge, index) in badges" :key="badge.title">
      <div>
        <a :title="badge.title" :href="badge.href" target="_blank" rel="noopener">
          <span class="badge-img">
            <img :alt="badge.title" :src="badge.src" :class="imageClasses[index]" />
          </span>
        </a>
      </div>
    </template>
  </div>
</template>
