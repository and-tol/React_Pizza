// Core
import { useSelector } from 'react-redux'

export const usePizzas = () => {
  const { isLoading, isLoaded } = useSelector(state => state.pizzas);

  return { isLoading, isLoaded };
};
