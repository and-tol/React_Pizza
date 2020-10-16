// Api
import { api } from '../../api';
// Types
import { types } from './types';

export const pizzasActions = Object.freeze({
  // Sync
  setPizzas: items => {
    return {
      type: types.PIZZAS_SET_PIZZAS,
      payload: items,
    };
  },
  startFetching: () => {
    return {
      type: types.PIZZAS_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: types.PIZZAS_ST0P_FETCHING,
    };
  },
  setFetchingError: error => {
    return {
      type: types.PIZZAS_FETCHING_ERROR,
      payload: error,
      error: true,
    };
  },
  // Async
  fetchPizzasAsync: () => async dispatch => {
    dispatch({
      type: types.PIZZAS_FETCH_PIZZAS_ASYNC,
    });

    dispatch(pizzasActions.startFetching);

    const response = await api.pizzas.fetch()
    if (response.status===200) {
      const { pizzas } = await response.json()
      dispatch(pizzasActions.setPizzas(pizzas));
    } else {
      const error = {
        status: response.status
      }
      dispatch(pizzasActions.setFetchingError(error))
    }
    dispatch(pizzasActions.stopFetching())
  },
});
