// Core
import React from 'react';
import { Link } from 'react-router-dom';
// Component
import { Button } from '../../../../elements/button';
// Routers
import { book } from '../../../../navigation/book';
// Image
import emptyCartImg from '../../../../assests/img/empty-cart.png';

export const CartEmpty = () => {
  return (
    <div className='cart cart--empty'>
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCartImg} alt='Empty cart' />
      <Link to={book.root.url} className='button button--black'>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
