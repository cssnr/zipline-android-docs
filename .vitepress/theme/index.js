import DefaultTheme from 'vitepress/theme'
import './custom.css'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import { Keyboard, Mousewheel, Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('Swiper', Swiper)
        app.component('SwiperSlide', SwiperSlide)

        app.config.globalProperties.Keyboard = Keyboard
        app.config.globalProperties.Mousewheel = Mousewheel
        app.config.globalProperties.Navigation = Navigation
        app.config.globalProperties.Pagination = Pagination
        app.config.globalProperties.EffectCoverflow = EffectCoverflow
    },
}
