// Core
import { applyMiddleware, createStore } from 'redux';
import { composeEnhancers, middleware } from './middleware';
// Other
import { rootReducer } from './rootReducer';

// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
