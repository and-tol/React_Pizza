import { useState } from 'react';

export const useCategories = () => {
  const [activeKind, setActiveKind] = useState(null);

  const onSelectKind = index => {
    setActiveKind(index);
  };

  return {
    activeKind,
    onSelectKind,
  };
}
