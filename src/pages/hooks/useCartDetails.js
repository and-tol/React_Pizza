// Core
import { useSelector } from 'react-redux';

export const useCartDetails = () => {
  const cart = useSelector(({ cart }) => cart);

  const onClickOrder = () => {
    console.log('ВАШ ЗАКАЗ', cart.cartItems);
  };

  return { totalPrice: cart.totalPrice, items: cart.itemsCount, onClickOrder };
};
