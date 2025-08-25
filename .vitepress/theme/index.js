import DefaultTheme from 'vitepress/theme'
import './custom.css'

import VPSwiper from '@cssnr/vitepress-swiper'
import '@cssnr/vitepress-swiper/style.css'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('VPSwiper', VPSwiper)
    },
}
