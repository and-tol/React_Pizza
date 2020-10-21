// Types
import { types } from './types';

const initialState = {
  cartItems: {},
  totalPrice: 0,
  itemsCount: 0,
};

/**
 * @description State structure
 */
{
  const state = {
    cartItems: {
      '1': {
        items: [{}, {}],
        totalPrice: 0,
      },
      '2': {
        items: [{}, {}],
        totalPrice: 0,
      },
    },
    totalPrice: 0,
    itemsCount: 0,
  };
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CART_SET_TOTAL_PRICE:
      return { ...state, totalPrice: payload };
    case types.CART_SET_TOTAL_COUNT:
      return { ...state, itemsCount: payload };
    case types.CART_ADD_PIZZA_TO_CART: {
      const curretPizzaItems = !state.cartItems[payload.id]
        ? [payload]
        : [...state.cartItems[payload.id].items, payload];
      const newItems = {
        ...state.cartItems,
        [payload.id]: {
          items: curretPizzaItems,
          totalPrice: getTotalPrice(curretPizzaItems),
        },
      };

      const items = Object.values(newItems).map(obj => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        cartItems: newItems,
        itemsCount: allPizzas.length,
        // Object.values(newItems).flat()
        totalPrice,
      };
    }
    case types.CART_CLEAR_CART:
      return { ...state, cartItems: {}, totalPrice: 0, itemsCount: 0 };
    case types.CART_REMOVE_CART_ITEM: {
      const newItems = {
        ...state.cartItems,
      };
      const currentTotalPrice = newItems[payload].totalPrice;
      // ? TODO: чем заменить этот способ удаления?
      delete newItems[payload];

      return {
        ...state,
        cartItems: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
      };
    }

    default:
      return state;
  }
};
