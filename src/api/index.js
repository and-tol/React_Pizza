// Config
import { root } from './config';

export const api = Object.freeze({
  pizzas: {
    fetch: () => {
      return fetch(`${root}db.json`, {
        method: 'GET'
      });
    },
  },
});
