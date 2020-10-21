// Core
import { useSelector } from 'react-redux'

export const useCartDetails = () => {
  const { totalPrice, itemsCount } = useSelector(({ cart }) => cart);

  return { totalPrice, itemsCount };
};
