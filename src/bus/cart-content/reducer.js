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
      1: {
        items: [{}, {}],
        totalPrice: 0,
      },
      2: {
        items: [{}, {}],
        totalPrice: 0,
      },
    },
    totalPrice: 0,
    itemsCount: 0,
  };
}

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);
const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

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

      const itemsCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      // const itemsCount = Object.keys(newItems).reduce(
      //   (sum, key) => newItems[key].items.length + sum,
      //   0
      // );
      // const totalPrice = Object.keys(newItems).reduce(
      //   (sum, key) => newItems[key].totalPrice + sum,
      //   0
      // );

      // const items = Object.values(newItems).map(obj => obj.items);
      // const allPizzas = [].concat.apply([], items);
      // const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        cartItems: newItems,
        itemsCount,
        // itemsCount: allPizzas.length,
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
      const currentTotalCount = newItems[payload].items.length;
      // ? TODO: чем заменить этот способ удаления?
      delete newItems[payload];

      return {
        ...state,
        cartItems: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        itemsCount: state.itemsCount - currentTotalCount,
      };
    }
    case types.CART_INCREASE_PIZZA_QUANTITY: {
      const newObjItems = [...state.cartItems[payload].items, state.cartItems[payload].items[0]];

      const newItems = {
        ...state.cartItems,
        [payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const itemsCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        cartItems: newItems,
        itemsCount,
        totalPrice,
      };
    }

    case types.CART_DECREASE_PIZZA_QUANTITY: {
      const oldItems = state.cartItems[payload].items;
      const newObjItems = oldItems.length > 1 ? state.cartItems[payload].items.slice(1) : oldItems;

      const newItems = {
        ...state.cartItems,
        [payload]: {
          // items: curretPizzaItems,
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const itemsCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        cartItems: newItems,
        itemsCount,
        totalPrice,
      };
    }

    default:
      return state;
  }
};
