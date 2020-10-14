// Core
import React from 'react'
// Components
import { Categories, PizzaBlock, SortPopup } from './components';

export const SelectPizza = ({ pizzas }) => {
  const pizzasJSZ = pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <>
      <div className='container'>
        <div className='content__top'>
          <Categories />
          <SortPopup />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>{pizzasJSZ}</div>
      </div>
    </>
  );
}

