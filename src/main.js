import { createApp } from 'vue'
import './main.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


library.add(
    faHatWizard,
    faFacebook,
    faInstagram,
    faTwitter,
    faLocationDot,
    faPhoneVolume,
    faEnvelope,
    faArrowRight,
    faChevronLeft,
    faChevronRight
    )


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
