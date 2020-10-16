// Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Libraries
import axios from 'axios';
// Actions
import { pizzasActions } from '../../../bus/pizzas/actions';

export const useHomeFetch = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas }) => ({ items: pizzas.items }));

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
  //   axios.get('http://localhost:3000/db.json').then(({ data }) => {
  //     dispatch(pizzasActions.setPizzas(data.pizzas));
  //   });
  //   console.log('Запрос на сервер')
  // }, [dispatch]);

  // * With Thunk
  // useEffect(() => {
  //   dispatch(pizzasActions.fetchPizzasAsync())
  // }, [dispatch]);

  return {
    items,
  };
};
