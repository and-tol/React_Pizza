// Core
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Routes
import { book } from './book';
// Components
import { Header } from '../elements/header';

export const Routes = () => {
  const routesJSX = Object.values(book).map(({ url, page: Page }) => (
    <Route key={url} exact path={url}>
      <Page />
    </Route>
  ));

  return (
    <>
      <div className='wrapper'>
        <Header />

        <Switch>{routesJSX}</Switch>
      </div>
    </>
  );
};
