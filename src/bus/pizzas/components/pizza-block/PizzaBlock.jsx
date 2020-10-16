// Core
import React from 'react';
import PropTypes from 'prop-types';
// Libraries
import cx from 'classnames';
// Config
import { availableSelections } from './availableSelections';
// Hooks
import { usePizzaBlock } from './hooks/usePizzaBlock';

export const PizzaBlock = ({ name, imageUrl, price, types, sizes }) => {
  const { activeType, onSelectType, activeSize, onSelectSize } = usePizzaBlock(types, sizes);

  const pizzaTypesJSX = availableSelections.pizzaTypes.map((type, index) => (
    <li
      key={type}
      onClick={() => onSelectType(index)}
      className={cx({
        active: activeType === index,
        disabled: !types.includes(index),
      })}
    >
      {type}
    </li>
  ));

  const pizzaSizesJSX = availableSelections.pizzaSizes.map((size, index) => (
    <li
      key={size}
      onClick={() => onSelectSize(index)}
      className={cx({
        active: activeSize === index,
        disabled: !sizes.includes(size),
      })}
    >
      {size} см.
    </li>
  ));

  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={imageUrl} alt={name} />
      <h4 className='pizza-block__title'>{name}</h4>
      <div className='pizza-block__selector'>
        <ul>{pizzaTypesJSX}</ul>
        <ul>{pizzaSizesJSX}</ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {price} ₽</div>
        <div className='button button--outline button--add'>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

PizzaBlock.defaultProps = {
  types: [],
  sizes: [],
}