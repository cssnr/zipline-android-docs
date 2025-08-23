import DefaultTheme from 'vitepress/theme'
import './custom.css'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import { Keyboard, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('Swiper', Swiper)
        app.component('SwiperSlide', SwiperSlide)

        app.config.globalProperties.Keyboard = Keyboard
        app.config.globalProperties.Pagination = Pagination
        app.config.globalProperties.Navigation = Navigation
    },
}
