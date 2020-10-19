// Core
import { useState } from 'react';

export const usePizzaBlock = (types, sizes) => {
  const [activeType, setActiveType] = useState(types[0]);
  const onSelectType = index => {
    setActiveType(index);
  };
  
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const onSelectSize = index => {
    setActiveSize(index);
  };
  return {
    activeType,
    onSelectType,
    activeSize,
    onSelectSize,
  };
};
