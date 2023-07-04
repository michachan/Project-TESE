'use client';

import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Flex,
  IconButton,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

export type CartItemNumberInputBase = {
  value: number;
  min: number;
  max: number;
  decrementInput: () => void;
  incrementInput: () => void;
  onInputChange: (_: string, val: number) => void;
};

export const CartItemNumberInputBase = ({
  value,
  min,
  max,
  decrementInput,
  incrementInput,
  onInputChange,
}: CartItemNumberInputBase) => {
  const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <Flex align="center" onClick={stopPropagation}>
      <IconButton
        as="span"
        aria-label="decrement count"
        icon={<MinusIcon boxSize={3} />}
        color="black"
        size="xs"
        _hover={{ bg: 'black', color: 'white' }}
        isDisabled={value <= min || value >= max}
        onClick={decrementInput}
      />
      <NumberInput
        size="sm"
        maxW={50}
        value={value}
        min={min ?? 0}
        max={max}
        variant="outline"
        border={0}
        onChange={onInputChange}
      >
        <NumberInputField
          fontWeight="bold"
          border={0}
          padding={0}
          justifyContent="center"
          textAlign="center"
        />
      </NumberInput>
      <IconButton
        as="span"
        aria-label="increment count"
        icon={<AddIcon boxSize={3} />}
        color="black"
        size="sm"
        _hover={{ bg: 'black', color: 'white' }}
        isDisabled={value >= max}
        onClick={incrementInput}
      />
    </Flex>
  );
};
