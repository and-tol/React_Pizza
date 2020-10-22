// Core
import { useState } from 'react';
// Config
import { availableSelections } from '../config/availableSelections';

export const usePizzaBlock = (types, sizes, id, name, imageUrl, price, onAddPizza) => {
  const [activeType, setActiveType] = useState(types[0]);
  const onSelectType = index => {
    setActiveType(index);
  };

  const { pizzaTypes, pizzaSizes } = availableSelections;

  const [activeSize, setActiveSize] = useState(0);
  const onSelectSize = index => {
    setActiveSize(index);
  };

  const handleAddPizza = () => {
    const addedPizza = {
      id,
      name,
      imageUrl,
      price,
      size: pizzaSizes[activeSize],
      type: pizzaTypes[activeType],
    };
    onAddPizza(addedPizza);
  };

  return {
    activeType,
    onSelectType,
    activeSize,
    onSelectSize,
    handleAddPizza,
  };
};
