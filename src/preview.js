/**
 * Created by lincoln on 20/12/2016.
 */

import Vue from 'vue'
import Dragdrop from './directives/dragdrop'
import Focus from './directives/focus'

import VueImage from 'vue2.x-core-image-upload'
import Panel from '../lib/container/Panel'

import BlockText from '@hfe/block-component-text'
import BlockScrollingText from '@hfe/block-component-scrolling-text-single'
// import BlockContainer from '@hfe/block-container'
import BlockButton from '@hfe/block-component-button'
import BlockImage from '@hfe/block-component-image'
import BlockMask from '@hfe/block-component-mask'
import BlockScrollMultipleText from '@hfe/block-component-scrolling-text-multiple'
import BlockCitySelection from '@hfe/block-component-city-selection'
import BlockCountdownDate from '@hfe/block-component-countdown-date'
import BlockCountdownDay from '@hfe/block-component-countdown-day'
import BlockCatalogueText from '@hfe/block-component-catalogue-text'
import BlockCatalogueImage from '@hfe/block-component-catalogue-image'
// import BlockCarouselContainer from '@hfe/block-component-carousel-container'
// import BlockCarousel from '@hfe/block-component-carousel-element'
import BlockTabContainer from '@hfe/block-component-tab-container'
import BlockTab from '@hfe/block-component-tab-element'
import BlockGridContainer from '@hfe/block-component-grid-container'
import BlockGridCell from '@hfe/block-component-grid-cell'

import store from './store'
import PhonePreview from './components/PhonePreview'

Vue.use(Dragdrop)
Vue.use(Focus)
Vue.component('panel', Panel)
// Vue.component('chrome-picker', Chrome)
// Vue.component('vue-date', VueDate)
Vue.component('vue-image', VueImage)

Vue.component('block-text', BlockText)
Vue.component('block-scrolling-text-single', BlockScrollingText)
Vue.component('block-button', BlockButton)
Vue.component('block-image', BlockImage)
Vue.component('block-button', BlockButton)
Vue.component('block-mask', BlockMask)
Vue.component('block-scrolling-text-multiple', BlockScrollMultipleText)
Vue.component('block-city-selection', BlockCitySelection)
Vue.component('block-countdown-date', BlockCountdownDate)
Vue.component('block-countdown-day', BlockCountdownDay)
Vue.component('block-catalogue-text', BlockCatalogueText)
Vue.component('block-catalogue-image', BlockCatalogueImage)
Vue.component('tab-container', BlockTabContainer)
Vue.component('block-tab-element', BlockTab)
Vue.component('hfe/block-grid-container', BlockGridContainer)
Vue.component('hfe/block-grid-cell', BlockGridCell)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<PhonePreview/>',
  components: {
    PhonePreview
  }
})
