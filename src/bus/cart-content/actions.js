// Types
import { types } from './types'

export const cartActions = Object.freeze({
  // Sync
  addPizzaToCart: (pizzaObj) => {
    return {
      type: types.CART_ADD_PIZZA_TO_CART,
      payload: pizzaObj,
    }
  },
  clearCart: () => {
    return {
      type: types.CART_CLEAR_CART,
    }
  },
  removeCartItem: (id) => {
    return {
      type: types.CART_REMOVE_CART_ITEM,
      payload: id,
    }
  },

})