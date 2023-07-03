'use client';

import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Flex,
  IconButton,
  NumberInput,
  NumberInputField,
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
  min = 0,
  handleUpdateCart,
}: QuantityInputProps) => {
  const MAX_VALUE = 999;

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
        isDisabled={value <= min || value >= MAX_VALUE}
        onClick={() => value > min && handleUpdateCart(value - 1)}
      />
      <NumberInput
        size="sm"
        maxW={50}
        value={value}
        min={min ?? 0}
        max={MAX_VALUE}
        variant="outline"
        border={0}
        onChange={(_, val) => {
          handleUpdateCart(Math.min(Math.max(+val ?? 0, min), MAX_VALUE));
        }}
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
        isDisabled={value >= MAX_VALUE}
        onClick={() => handleUpdateCart(Math.min(value + 1, MAX_VALUE))}
      />
    </Flex>
  );
};
