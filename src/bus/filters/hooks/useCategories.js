// Core
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { filtersActions } from '../actions';

export const useCategories = () => {
  const dispatch = useDispatch();

  const { category } = useSelector(state => state.filters);

  const onSelectCategory = index => {
    dispatch(filtersActions.setCategory(index));
  };

  return {
    activeCategory: null || category,
    onSelectCategory,
  };
};
