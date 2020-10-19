// Types
import { types } from './types';

const initialState = {
  category: null,
  sortBy: { type: 'popular', order: 'desc' },
};

export const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_SORT_BY:
      return {
        ...state,
        sortBy: {
          ...state.sortBy,
          type: payload.type,
          order: payload.order,
        },
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
