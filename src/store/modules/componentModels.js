import * as types from '../mutation-types'
import BlockText from '@hfe/block-component-text/description.json'
import BlockScrollText from '@hfe/block-component-scrolling-text-single/description.json'
// import BlockContainer from '@hfe/block-container/description.json'
import BlockButton from '@hfe/block-component-button/description.json'
import BlockImage from '@hfe/block-component-image/description.json'
import BlockMask from '@hfe/block-component-mask/description.json'
import BlockScrollMultipleText from '@hfe/block-component-scrolling-text-multiple/description.json'
import BlockCitySelection from '@hfe/block-component-city-selection/description.json'
import BlockCountdownDate from '@hfe/block-component-countdown-date/description.json'
import BlockCountdownDay from '@hfe/block-component-countdown-day/description.json'
import BlockCatalogueText from '@hfe/block-component-catalogue-text/description.json'
import BlockCatalogueImage from '@hfe/block-component-catalogue-image/description.json'
// import BlockCarouselContainer from '@hfe/block-component-carousel-container/description.json'
// import BlockCarousel from '@hfe/block-component-carousel-element/description.json'
import BlockTabContainer from '@hfe/block-component-tab-container/description.json'
import BlockTab from '@hfe/block-component-tab-element/description.json'
import BlockGridContainer from '@hfe/block-component-grid-container/description.json'
import BlockGridCell from '@hfe/block-component-grid-cell/description.json'

// init state
// model componentModel {}
const state = {
  // componentModels: []
  componentModels: [
    {
      name: 'panel',
      label: 'Panel',
      props: {
        type: {
          type: 'String',
          label: '类型',
          default: 'default'
        },
        heading: {
          type: 'String',
          label: '头部文字',
          default: 'Heading Text'
        }
      },
      slots: {
        '': {
          type: '*'
        },
        'footer': {
          type: '*'
        }
      }
    },
    BlockText,
    BlockScrollText,
    // BlockContainer,
    BlockButton,
    BlockImage,
    BlockMask,
    BlockScrollMultipleText,
    BlockCitySelection,
    BlockCountdownDate,
    BlockCountdownDay,
    BlockCatalogueText,
    BlockCatalogueImage,
    // BlockCarouselContainer,
    // BlockCarousel,
    BlockTabContainer,
    BlockTab,
    BlockGridContainer,
    BlockGridCell
  ]
}

// getters
const getters = {
  componentModels: state => state.componentModels
}

// actions
const actions = {
  addComponentModel ({commit, state}, newComponentModel) {
    state.componentModels.push(newComponentModel)
    commit(types.ADD_TO_COMPONENTLIST)
  }
}

const mutations = {
  [types.ADD_TO_COMPONENTLIST] (state, { component }) {
    state.componentModels.push(component)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

