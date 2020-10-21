// Core
import React from 'react';
import PropTypes from 'prop-types';
// Components
import { Filters } from '../filters';
import { PizzaBlock } from './components';
import { Loader } from '../../elements/loader';
// Hooks
import { usePizzas } from './hooks/usePizzas';
// Config
import { availableSelections } from './config/availableSelections';

export const Pizzas = ({ pizzas }) => {
  const { isLoading, isLoaded, addPizzaToCart, cartItems } = usePizzas();

  const pizzasJSX =
    isLoaded &&
    pizzas &&
    pizzas.map(pizza => (
      <PizzaBlock
        key={pizza.id}
        availableSelections={availableSelections}
        onAddPizza={addPizzaToCart}
        addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}
        {...pizza}
      />
    ));

  const loadersJSX = Array(12)
    .fill(0)
    .map((_, i) => <Loader key={i} />);

  return (
    <>
      <div className='container'>
        <div className='content__top'>
          <Filters />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>{isLoading ? loadersJSX : pizzasJSX}</div>
      </div>
    </>
  );
};

Pizzas.default = {
  pizzas: [],
};

Pizzas.protoTypes = {
  pizzas: PropTypes.array.isRequired,
};
