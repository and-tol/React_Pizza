// Core
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { cartActions } from '../actions';

export const useCartContent = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(cartItems).map(key => cartItems[key].items[0]);

  const onRemoveItem = id => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(cartActions.removeCartItem(id));
    }
  };

  const onIncreseItem = (id) => {
    dispatch(cartActions.increaseCartItem(id))
  }
  const onDecreseItem = (id) => {
    dispatch(cartActions.decreaseCartItem(id))
  }


  return { cartItems, addedPizzas, onRemoveItem, onIncreseItem, onDecreseItem };
};
