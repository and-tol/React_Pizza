// Core
import React from 'react';
// Components
import { SelectPizza } from '../../bus/select-pizza';
// Hooks
import {useHome} from './hooks/useHome'

export const Home = () => {
const { pizzas } = useHome();

  return (
    <div className='content'>
      <SelectPizza pizzas={pizzas} />
    </div>
  );
};
