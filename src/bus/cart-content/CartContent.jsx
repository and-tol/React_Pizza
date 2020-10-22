// Core
import React from 'react';
// Helpers
import { unicId } from '../../helpers';
// Component
import { CartItem } from './components/cart-item';
// Hooks
import { useCartContent } from './hooks/useCartContent';

export const CartContent = () => {
  const { cartItems, addedPizzas, onRemoveItem, onIncreseItem, onDecreseItem } = useCartContent();

  const addedPizzasJSX = addedPizzas.map(obj => {
    return (
      <CartItem
        key={unicId()}
        id={obj.id}
        name={obj.name}
        type={obj.type}
        size={obj.size}
        totalPrice={cartItems[obj.id].totalPrice}
        totalCount={cartItems[obj.id].items.length}
        onRemoveItem={onRemoveItem}
        onIncreseItem={onIncreseItem}
        onDecreseItem={onDecreseItem}
      />
    );
  });

  return (
    <div className='content__items'>
      {/* <CartItem name='Пепперони Фреш с перцем' type='тонкое' size={26} /> */}
      {addedPizzasJSX}
    </div>
  );
};
