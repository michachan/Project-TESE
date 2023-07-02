import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

type QuantityInputProps = { isDisabled?: boolean; min?: number };

export const QuantityInput = ({ isDisabled, min }: QuantityInputProps) => {
  const onClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <NumberInput
      size="sm"
      maxW={16}
      defaultValue={15}
      min={min ?? 0}
      onClick={onClickHandler}
      variant="outline"
      border="1px solid #b3b3b3"
      borderRadius={3}
      isDisabled={isDisabled}
    >
      <NumberInputField fontWeight="bold" border={0} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};