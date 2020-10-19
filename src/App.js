// Core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// Store
import { store } from './init/store';
// Routes
import { Routes } from './navigation';
// Other
import { history } from './navigation/history';
// Styles
import './scss/app.scss';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
