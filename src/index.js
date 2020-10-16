// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// Store
import { store } from './init/store';

// Styles
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

