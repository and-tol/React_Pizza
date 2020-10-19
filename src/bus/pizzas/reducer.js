// Types
import { types } from './types';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  isLoaded: false,
};

export const pizzasReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PIZZAS_SET_PIZZAS:
      return {
        ...state,
        items: payload,
        isLoaded: true,
      };
    case types.PIZZAS_START_FETCHING:
      return { ...state, isLoading: true };
    case types.PIZZAS_ST0P_FETCHING:
      return { ...state, isLoading: false };
    case types.PIZZAS_FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
