import * as types from './mutation-types'

// export const addToCart = ({ commit }, product) => {
//   if (product.inventory > 0) {
//     commit(types.ADD_TO_CART, {
//       id: product.id
//     })
//   }
// }

export const registeNewComponent = ({ commit }, model) => {
  commit(types.ADD_TO_COMPONENTLIST, {
    component: model
  })
}

export const addToPage = ({ commit }, model) => {
  commit(types.ADD_TO_PAGE, {
    node: model
  })
}
