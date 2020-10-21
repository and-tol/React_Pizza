import { useSelector } from 'react-redux'

export const useHeader = () => {
const { totalPrice, itemsCount } = useSelector(state => state.cart);

  return { totalPrice, itemsCount };
};
