// Core
import React from 'react'
// Components
import { Filters } from '../filters';
import { PizzaBlock } from './components';

export const Pizzas = ({ pizzas }) => {
  const pizzasJSZ =pizzas && pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <>
      <div className='container'>
        <div className='content__top'>
          <Filters />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {pizzasJSZ}
        </div>
      </div>
    </>
  );
}

