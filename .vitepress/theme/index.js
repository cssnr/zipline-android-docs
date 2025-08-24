import DefaultTheme from 'vitepress/theme'
import './custom.css'

import VPSwiper from './components/VPSwiper.vue'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('VPSwiper', VPSwiper)
    },
}
