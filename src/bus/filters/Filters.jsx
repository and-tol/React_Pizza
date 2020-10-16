// Ccre
// Core
import React from 'react';
// Components
import { Categories, SortPopup } from './components';

import { availableFilters } from './availableFilters';

export const Filters = () => {
  return (
    <>
      <Categories availableCategories={availableFilters.availableCategories} />
      <SortPopup availableSorting={availableFilters.availableSorting} />
    </>
  );
};
