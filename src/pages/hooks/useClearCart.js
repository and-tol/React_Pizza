// Core
import { useDispatch } from 'react-redux';
// Actions
import { cartActions } from '../../bus/cart-content/actions';

export const useClearCart = () => {
  const dispatch = useDispatch();

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(cartActions.clearCart());
    }
  };

  return { onClearCart };
};
