import DefaultTheme, { VPBadge } from 'vitepress/theme'
import './custom.css'

import Layout from './Layout.vue'

import GetOnBadges from './components/GetOnBadges.vue'

import VPSwiper from '@cssnr/vitepress-swiper'
import '@cssnr/vitepress-swiper/style.css'

import VitePressChat from '@cssnr/vitepress-chat'
import '@cssnr/vitepress-chat/style.css'

// https://vitepress.dev/guide/extending-default-theme
// noinspection JSUnusedGlobalSymbols
/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,

  // Layout: Layout,

  ...VitePressChat(Layout, {
    api: import.meta.env.VITE_AI_API,
    headers: import.meta.env.VITE_AI_AUTH ? { Authorization: import.meta.env.VITE_AI_AUTH } : undefined,
    instructionsFile: 'llms.txt',
  }),

  enhanceApp({ app }) {
    app.component('Badge', VPBadge)

    app.component('GetOnBadges', GetOnBadges)

    app.component('VPSwiper', VPSwiper)
  },
}
