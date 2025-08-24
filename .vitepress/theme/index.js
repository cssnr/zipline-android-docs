import DefaultTheme from 'vitepress/theme'
import './custom.css'

import VpSwiper from './components/VPSwiper.vue'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('VpSwiper', VpSwiper)
    },
}
