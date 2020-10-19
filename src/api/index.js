// Config
import { root } from './config';

export const api = Object.freeze({
  pizzas: {
    fetch: (sortBy, category) => {
      console.log('sortBy', sortBy);
      return fetch(
        `${root}pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
          sortBy.type
        }&_order=${sortBy.order}`,
        {
          method: 'GET',
        }
      );
    },
  },
});
