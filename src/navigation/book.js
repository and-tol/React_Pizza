import { Home } from '../pages/home';
import { Cart } from '../pages/cart';

export const book = Object.freeze({
  root: {
    url: '/',
    page: Home,
  },

  cart: {
    url: '/cart',
    page: Cart,
  },
});