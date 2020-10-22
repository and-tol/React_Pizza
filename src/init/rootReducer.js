// Core
import { combineReducers } from 'redux';
// Reducers
import { pizzasReducer as pizzas } from '../bus/pizzas/reducer';
import { filtersReducer as filters } from '../bus/filters/reducer';
import { cartReducer as cart } from '../bus/cart-content/reducer';

export const rootReducer = combineReducers({
  pizzas,
  filters,
  cart,
});
