// Core
import { useState, useEffect, useRef } from 'react';
// Config
import { availableSorting } from '../availableSorting';

export const useSortPopup = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeSorting, setActiveSorting] = useState(0);
  const sortRef = useRef();
  const activeLabel = availableSorting[activeSorting].name

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = e => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onActiveSorting = index => {
    setActiveSorting(index);
    setVisiblePopup(false);
  };

  return {
    visiblePopup,
    activeSorting,
    sortRef,
    activeLabel,
    toggleVisiblePopup,
    onActiveSorting,
  };
}
