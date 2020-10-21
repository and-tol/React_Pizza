// Core
import { useSelector } from 'react-redux';

export const useCartContent = () => {
  const { cartItems } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(cartItems).map(key => cartItems[key].items[0]);
  // const addedPizzas = Object.keys(cartItems).map(key => {
  //   return cartItems[key][0];
  // });

  return { cartItems, addedPizzas };
};
