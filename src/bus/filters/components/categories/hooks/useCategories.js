// Core
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
// Actions
import { filtersActions } from '../../../actions';

export const useCategories = () => {
  const dispatch = useDispatch()
  const [activeKind, setActiveKind] = useState(null);

  // const onSelectItem = React.useCallback((index) => {
  //   dispatch(filtersActions.setCategory(index));
  // },[])

  const onSelectKind = index => {
    setActiveKind(index);
    dispatch(filtersActions.setCategory(index));
  };

  return {
    activeKind,
    onSelectKind,
  };
}
