// Core
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { cartActions } from '../actions';

export const useCartContent = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(cartItems).map(key => cartItems[key].items[0]);

  const onRemoveItem = id => {
    console.log('id>', id)
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(cartActions.removeCartItem(id));
    }
  };

  return { cartItems, addedPizzas, onRemoveItem };
};
