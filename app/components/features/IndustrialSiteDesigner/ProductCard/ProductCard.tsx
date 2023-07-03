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
import { Product, PRODUCT_NAMES } from '@/app/utils/constants';
import {
  calculateRequiredSpace,
  calculateRequiredTransformers,
  formatRequiredSpace,
} from '@/app/utils/productConversions';

import { QuantityInput } from '../Cart/QuantityInput';

type ProductCardProps = { product: Product };

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [itemCount, updateCart, state] = useStore((state) => [
    state[product.name],
    state.updateCart,
    state,
  ]);

  const isTransformer = product.name === PRODUCT_NAMES.TRANSFORMER;
  const min = isTransformer ? calculateRequiredTransformers(state) : undefined;

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
            <Flex gap={3} mr={4} justifySelf="flex-end">
              <QuantityInput
                value={itemCount}
                handleUpdateCart={handleUpdateCart}
                min={min}
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
            onClick={() => updateCart(product.name, 0)}
          >
            Clear Selection
          </Button>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};
