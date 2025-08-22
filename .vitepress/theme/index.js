import DefaultTheme from 'vitepress/theme'
import './custom.css'

import { Gallery } from '@miletorix/vitepress-gallery' // [!gallery ++]
import '@miletorix/vitepress-gallery/style.css' // [!gallery ++]

export default {
    ...DefaultTheme,

    enhanceApp(ctx) {
        ctx.app.component('Gallery', Gallery) // [!gallery ++]
    },
}
