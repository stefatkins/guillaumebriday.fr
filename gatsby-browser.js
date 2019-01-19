import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faRss,
  faSearch,
  faUser,
  faCalendar,
  faComments,
  faClock,
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
  faArrowRight,
  faTag,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faAmazon,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons'

import mediumZoom from 'medium-zoom'
import './src/styles/tailwind.scss'
import './src/styles/index.scss'

library.add(
  faRss,
  faSearch,
  faUser,
  faCalendar,
  faComments,
  faClock,
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
  faArrowRight,
  faTag,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faAmazon,
  faPaypal
)

export const onRouteUpdate = () => {
  mediumZoom('.post-content img')
}
