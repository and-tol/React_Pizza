// Core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Routes
import { Routes } from './navigation';

// Lib
import { history } from './navigation/history';
// Styles
import './scss/app.scss';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
