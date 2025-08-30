import DefaultTheme from 'vitepress/theme'
import './custom.css'

import GetOnBadges from './components/GetOnBadges.vue'

import VPSwiper from '@cssnr/vitepress-swiper'
import '@cssnr/vitepress-swiper/style.css'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('GetOnBadges', GetOnBadges)
        app.component('VPSwiper', VPSwiper)
    },
}
