// Core
import { useState } from 'react';
import { useDispatch } from 'react-redux'
// Actions
import { filtersActions } from '../../../actions';

export const useCategories = () => {
  const dispatch = useDispatch()
  const [activeKind, setActiveKind] = useState(null);

  const onSelectItem = (index) => {
    dispatch(filtersActions.setCategory(index));
  }

  const onSelectKind = index => {
    setActiveKind(index);
    onSelectItem(index)
  };

  return {
    activeKind,
    onSelectKind,
  };
}
