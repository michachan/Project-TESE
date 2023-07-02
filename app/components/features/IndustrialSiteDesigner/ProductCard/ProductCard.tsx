import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';

import { useStore } from '@/app/lib/store';
import { Product } from '@/app/utils/constants';
import { calculateRequiredSpace } from '@/app/utils/productConversions';

import { QuantityInput } from '../Cart/QuantityInput';

type ProductCardProps = { product: Product };

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [itemCount, updateCart] = useStore((state) => [
    state[product.name],
    state.updateCart,
  ]);

  const handleUpdateCart = (value: number) => {
    updateCart(product.name, value);
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton _hover={{ bg: 'whiteAlpha.600' }}>
          <Flex
            as="span"
            flex={1}
            textAlign="left"
            justify="space-between"
            align="center"
          >
            <Text fontWeight={500} fontSize="lg">
              {product.name}
            </Text>
            <Flex gap={3} mr={4}>
              <QuantityInput handleUpdateCart={handleUpdateCart} />
            </Flex>
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <TableContainer>
          <Table variant="simple" size="sm">
            <Tbody>
              <Tr>
                <Td w={0} fontWeight={500}>
                  Name
                </Td>
                <Td w={200}>{product.name}</Td>
                <Td isNumeric>-</Td>
              </Tr>
              <Tr>
                <Td w={0} fontWeight={500}>
                  Year
                </Td>
                <Td w={200}>{product.releaseYear ?? '-'}</Td>
                <Td isNumeric>-</Td>
              </Tr>
              <Tr>
                <Td fontWeight={500}>Size</Td>
                <Td>{calculateRequiredSpace(product, 1)}</Td>
                <Td isNumeric>{calculateRequiredSpace(product, itemCount)}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={500}>Input</Td>
                <Td>{itemCount}</Td>
                <Td isNumeric>{itemCount}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={500}>Energy</Td>
                <Td>{product.energy} MWH</Td>
                <Td isNumeric>{product.energy * itemCount} MWH</Td>
              </Tr>
              <Tr>
                <Td fontWeight={500}>Cost</Td>
                <Td>${product.cost.toLocaleString()}</Td>
                <Td isNumeric>
                  ${(product.cost * itemCount).toLocaleString()}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justify="flex-end" gap={3}>
          <Button mt={4} bg="#3e6ae1" color="white" size="sm" fontSize="xs">
            Change Property
          </Button>
          <Button
            mt={4}
            variant="ghost"
            size="sm"
            fontSize="xs"
            bg="#f4f4f4"
            border="1px solid gray"
            color="#3a3c42"
          >
            Clear Selection
          </Button>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};
