// Types
import { types } from './types';

export const filtersActions = Object.freeze({
  setSortBy: name => {
    return {
      type: types.SET_SORT_BY,
      payload: name,
    };
  },
  setCategory: categoryIndex => {
    return {
      type: types.SET_CATEGORY,
      payload: categoryIndex,
    };
  },
});
