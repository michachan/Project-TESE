import { CartItemNumberInputBase } from './NumberInput.base';

export type CartItemNumberInputContainer = {
  value: number;
  min?: number;
  handleUpdateCart: (value: number) => void;
};

export const CartItemNumberInputContainer: React.FC<
  CartItemNumberInputContainer
> = ({ value, min = 0, handleUpdateCart }) => {
  const MAX_VALUE = 999;

  const decrementInput = () => value > min && handleUpdateCart(value - 1);

  const incrementInput = () => handleUpdateCart(Math.min(value + 1, MAX_VALUE));

  const onInputChange = (_: string, val: number) => {
    handleUpdateCart(Math.min(Math.max(+val || 0, min), MAX_VALUE));
  };

  return (
    <CartItemNumberInputBase
      min={min}
      max={MAX_VALUE}
      value={value}
      decrementInput={decrementInput}
      incrementInput={incrementInput}
      onInputChange={onInputChange}
    />
  );
};
