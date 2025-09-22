import DefaultTheme, { VPBadge } from 'vitepress/theme'
import './custom.css'

import GetOnBadges from './components/GetOnBadges.vue'

import VPSwiper from '@cssnr/vitepress-swiper'
import '@cssnr/vitepress-swiper/style.css'

// https://vitepress.dev/guide/extending-default-theme
// noinspection JSUnusedGlobalSymbols
/** @type {import('vitepress').Theme} */
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('Badge', VPBadge)

        app.component('GetOnBadges', GetOnBadges)

        app.component('VPSwiper', VPSwiper)
    },
}
