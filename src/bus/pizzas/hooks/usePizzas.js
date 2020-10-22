// Core
import { useSelector, useDispatch } from 'react-redux'
// Actions
import {cartActions} from '../../cart-content/actions'

export const usePizzas = () => {
  const dispatch = useDispatch()
  const { isLoading, isLoaded } = useSelector(state => state.pizzas);
  const { cartItems } = useSelector(state => state.cart);

  const addPizzaToCart = (obj) => {
    dispatch(cartActions.addPizzaToCart(obj));
  }

  return { isLoading, isLoaded, addPizzaToCart, cartItems };
};
