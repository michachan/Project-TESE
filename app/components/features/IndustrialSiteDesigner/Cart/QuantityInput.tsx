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
  min,
  handleUpdateCart,
}: QuantityInputProps) => {
  const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <Flex align="center" onClick={stopPropagation}>
      <IconButton
        aria-label="decrement count"
        icon={<MinusIcon boxSize={3} />}
        color="black"
        size="xs"
        _hover={{ bg: 'black', color: 'white' }}
        isDisabled={!value}
        onClick={() => handleUpdateCart(value - 1)}
      />
      <NumberInput
        size="sm"
        maxW={50}
        value={value}
        min={min ?? 0}
        variant="outline"
        border={0}
        onChange={(_, val) => {
          handleUpdateCart(val || 0);
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
        aria-label="increment count"
        icon={<AddIcon boxSize={3} />}
        color="black"
        size="sm"
        _hover={{ bg: 'black', color: 'white' }}
        onClick={() => handleUpdateCart(value + 1)}
      />
    </Flex>
  );
};
