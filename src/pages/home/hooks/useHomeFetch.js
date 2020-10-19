// Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { pizzasActions } from '../../../bus/pizzas/actions';
// Api
// import { root } from '../../../api/config';

export const useHomeFetch = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const { category, sortBy } = useSelector(state => state.filters);

  //* With Promoces
  // useEffect(() => {
  //   fetch('http://localhost:3000/db.json')
  //     .then(response => response.json())
  //     .then(results => {
  //       setPizzas(results.pizzas);
  //     });

  // }, []);
  //* With async/await
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/db.json');
  //       const { pizzas } = await response.json();

  //       dispatch(pizzasActions.setPizzas(pizzas))
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   })();
  // }, []);

  // * With axios
  // useEffect(() => {
  //   axios.get(`${root}db.json`).then(({ data }) => {

  //     dispatch(pizzasActions.setPizzas(data.pizzas));
  //   });
  // }, [dispatch]);

  // * With Thunk
  useEffect(() => {
    dispatch(pizzasActions.fetchPizzasAsync(sortBy, category));
  }, [dispatch, category, sortBy]);

  return {
    items,
  };
};
