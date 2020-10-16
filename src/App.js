// Core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
// Libraries
import axios from 'axios';
// Routes
import { Routes } from './navigation';
// Actions
import { pizzasActions } from './bus/pizzas/actions';

// Other
import { history } from './navigation/history';

// Styles
import './scss/app.scss';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(pizzasActions.setPizzas(data.pizzas));
    });
    console.log('Запрос на сервер');
  }, [dispatch]);
  return (
    // <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    // </Provider>
  );
}

export default App;
