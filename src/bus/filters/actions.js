// Types
import { types } from './types';

export const filtersActions = Object.freeze({
  setSortBy: ({ type, order }) => {
    return {
      type: types.SET_SORT_BY,
      payload: { type, order },
    };
  },
  setCategory: categoryIndex => {
    return {
      type: types.SET_CATEGORY,
      payload: categoryIndex,
    };
  },
});
