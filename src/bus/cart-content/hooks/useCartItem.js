export const useCartItem = (id, onRemoveItem, onIncreseItem, onDecreseItem) => {
  const handleRemoveItem = () => {
    onRemoveItem(id);
  };
  const handleIncreseItem = () => {
    onIncreseItem(id);
  };
  const handleDecreseItem = () => {
    onDecreseItem(id);
  };

  return {
    handleRemoveItem,
    handleIncreseItem,
    handleDecreseItem,
  };
};
