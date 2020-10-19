// Core
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { filtersActions } from '../actions';
// Config
import { availableFilters } from '../availableFilters';

export const useSortPopup = () => {
  const dispatch = useDispatch();
  const { availableSorting } = availableFilters;
  const { sortBy } = useSelector(state => state.filters);
  // const [activeSorting, setActiveSorting] = useState(0);
  const activeLabel = availableSorting.find(sort => sort.type === sortBy.type).name;

  const onActiveSorting = type => {
    // setActiveSorting(index);
    const activeSort = availableSorting.find(sort => sort.type === type);

    dispatch(filtersActions.setSortBy(activeSort));
    setVisiblePopup(false);
  };

  // * ----- Toggle visible sorting -----
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const handleOutsideClick = e => {
    const path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  // ==================

  return {
    visiblePopup,
    // activeSorting,
    sortRef,
    activeLabel,
    toggleVisiblePopup,
    onActiveSorting,
  };
};
