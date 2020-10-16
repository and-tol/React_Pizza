// Types
import { types } from './types';

const initialState = {
  category: 0,
  sortBy: 'popular',
};

export const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_SORT_BY:
      return {
        ...state,
        sortBy: payload,
      };
    case types.SET_CATEGORY:
      return {
        ...state,
        category: payload,
      };

    default:
      return state;
  }
};
