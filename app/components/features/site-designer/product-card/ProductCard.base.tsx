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

import { Product } from '@/app/utils/constants';
import {
  calculateRequiredSpace,
  formatRequiredSpace,
} from '@/app/utils/productConversions';

import { CartItemNumberInput } from './number-input';

export type ProductCardProps = {
  product: Product;
  handleClearItem: () => void;
  itemCount: number;
  handleUpdateCart: (value: number) => void;
  minimumCount?: number;
};

export const ProductCardBase: React.FC<ProductCardProps> = ({
  product,
  handleClearItem,
  itemCount,
  handleUpdateCart,
  minimumCount,
}) => {
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
            <Flex gap={3} mr={4} justifySelf="flex-end">
              <CartItemNumberInput
                value={itemCount}
                handleUpdateCart={handleUpdateCart}
                min={minimumCount}
              />
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
                <Td isNumeric textAlign="right"></Td>
              </Tr>
              <Tr>
                <Td w={0} fontWeight={500}>
                  Year
                </Td>
                <Td w={200}>{product.releaseYear ?? '-'}</Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td fontWeight={500}>Size</Td>
                <Td>
                  {formatRequiredSpace(calculateRequiredSpace(product, 1))}
                </Td>
                <Td isNumeric>
                  {itemCount
                    ? formatRequiredSpace(
                        calculateRequiredSpace(product, itemCount)
                      )
                    : '-'}
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={500}>Energy</Td>
                <Td>{product.energy.toLocaleString()} MWH</Td>
                <Td isNumeric>
                  {itemCount
                    ? `${(product.energy * itemCount).toLocaleString()} MWh`
                    : '-'}
                </Td>
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
            View Details
          </Button>

          <Button
            mt={4}
            variant="ghost"
            size="sm"
            fontSize="xs"
            bg="#f4f4f4"
            border="1px solid gray"
            color="#3a3c42"
            onClick={handleClearItem}
          >
            Clear Selection
          </Button>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};
