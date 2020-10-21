// Types
import { types } from './types';

const initialState = {
  cartItems: {},
  totalPrice: 0,
  itemsCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CART_SET_TOTAL_PRICE:
      return { ...state, totalPrice: payload };
    case types.CART_SET_TOTAL_COUNT:
      return { ...state, itemsCount: payload };
    case types.CART_ADD_PIZZA_TO_CART: {
      // const newItems = {
      //   ...state.cartItems,
      //   [payload.id]: !state.cartItems[payload.id]
      //     ? [payload]
      //     : [...state.cartItems[payload.id], payload],
      // };
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

      // const allPizzas = [].concat.apply([], Object.values(newItems));
      const items = Object.values(newItems).map(obj=>obj.items)
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

    default:
      return state;
  }
};
