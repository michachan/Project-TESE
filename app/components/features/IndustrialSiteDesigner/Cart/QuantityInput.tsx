import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

type QuantityInputProps = {
  value: number;
  isDisabled?: boolean;
  min?: number;
  handleUpdateCart: (value: number) => void;
};

export const QuantityInput = ({
  value,
  isDisabled,
  min,
  handleUpdateCart,
}: QuantityInputProps) => {
  const onClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <NumberInput
      size="sm"
      maxW={90}
      value={value}
      min={min ?? 0}
      onClick={onClickHandler}
      variant="outline"
      border="1px solid #b3b3b3"
      borderRadius={3}
      isDisabled={isDisabled}
      onChange={(_, val) => {
        handleUpdateCart(val || 0);
      }}
    >
      <NumberInputField fontWeight="bold" border={0} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
