// Core
import React from 'react';
// Components
import { Categories, SortPopup } from './components';
// Config
import { availableFilters } from './availableFilters';

export const Filters = () => {
  return (
    <>
      <Categories availableCategories={availableFilters.availableCategories} />
      <SortPopup availableSorting={availableFilters.availableSorting} />
    </>
  );
};
